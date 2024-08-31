import { it, expect } from 'vitest';
import { nCrAll } from './utils';
// const { it, expect } = import.meta.vitest
it('nCrAll', () => {
  //   expect(add()).toBe(0)
  expect(nCrAll(5, 2)).toHaveLength(10);
  expect(nCrAll(5, 1)).toHaveLength(5);
  expect(nCrAll(2, 1)).toHaveLength(2);
  expect(nCrAll(2, 1)).toStrictEqual([[0], [1]]);
});
