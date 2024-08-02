'use client';
import localforage from 'localforage';
import { useEffect, useState } from 'react';
import { useForageArray } from './useForageArray';
import { uniqBy, isString, cloneDeep } from 'lodash-es';

/** Difference from useForageSortedArray
 *  - lets you edit the keys, while SortedArray keys stay the same after initial set
 *  - key doesn't have to be a string (main difference)
 *  */
export type UniqueIdentifier = string | number;
export default function useForageIdArray<K, T>(
  key: string,
  isValid: (x: unknown) => x is T,
  isValidKey: (x: unknown) => boolean = isString,
  defaultValue?: T,
  keyBy?: (x: K) => string
) {
  // const defaultArray: { key: K, value: T }[] = []
  const {
    items: keys,
    isLoading: isLoadingKeys,
    set: setKeyV,
    add: addKey,
    remove: removeKeyV,
    setEntire,
  } = useForageArray<K>(key, isValidKey);

  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<{ key: K; value: T }[]>([]);

  async function init() {
    if (uniqBy(keys, (x) => (keyBy ? keyBy(x) : x)).length !== keys.length) {
      setEntire(uniqBy(keys, (x) => (keyBy ? keyBy(x) : x)));
    }
    const items = await Promise.all(
      keys.map(async (key) =>
        localforage.getItem(((keyBy ? keyBy(key) : key) as number | string).toString())
      )
    );

    const validItems = validateItems(keys, items);
    setItems(validItems.map((x, i) => ({ key: keys[i], value: x })));
    setIsLoading(false);
    if (validItems.length === 0 && validItems.length !== keys.length) {
      clear();
    }
  }

  useEffect(() => {
    if (!isLoadingKeys) init();
  }, [isLoadingKeys, keys]);

  async function clear() {
    setEntire([]);
  }

  function validateItems(keys: K[], items: unknown[]) {
    if (defaultValue) return items.map((x) => (isValid(x) ? x : defaultValue));
    const validItems = items.filter(isValid);
    // setEntire(keys.filter((_, i) => !indexestoRemove.includes(i)))
    return keys.length === validItems.length ? validItems : []; // validItems
  }

  function getKeyIndex(id: any) {
    return keys.findIndex((k) => (keyBy ? keyBy(k) : k) === id);
  }

  async function setValue(id: any, value: T | (T & Function)) {
    const keyIndex = getKeyIndex(id);
    let newVal: T | undefined;
    setItems((p) => {
      return p.map((x, i) => {
        if (i !== keyIndex) return x;
        newVal = typeof value === 'function' ? value(x.value) : value;
        if (!isValid(newVal)) {
          console.log(newVal);
          throw new Error('invalid set value');
        }
        console.log(id, 'newVal', newVal);
        return { key: x.key, value: cloneDeep(newVal) };
      });
    });
    if (newVal) await localforage.setItem(id.toString(), newVal);
  }

  async function setKey(id: any, key: K) {
    if (!isValidKey(key)) throw new Error('invalid set value');
    const keyIndex = getKeyIndex(id);
    setKeyV(keyIndex, key);
    setItems((p) => {
      return p.map((x, i) => (i === keyIndex ? { ...x, key } : x));
    });
  }

  async function removeKey(id: any) {
    const keyIndex = getKeyIndex(id);
    removeKeyV(keyIndex);
  }

  async function add(id: K, value: T) {
    await localforage.setItem((keyBy ? keyBy(id) : id) as string, value);
    addKey(id);
  }

  return {
    isLoading: isLoading && isLoadingKeys,
    item: items,
    setValue,
    setKey,
    addKey,
    removeKey,
    add,
    clear,
    init,
  };
}
