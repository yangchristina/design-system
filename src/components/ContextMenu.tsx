'use client'
import React from 'react'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu';
import { styled } from '../stitches.config';
import { ChevronRightIcon } from '@radix-ui/react-icons';

/**
 * generic context menu:
 * takes in units: Unit[] for layout
 */

interface Option {
  label: string,
  rightSlot?: JSX.Element,
  onSelect?: () => void
}

interface Item extends Option {
  onSelect: () => void,
}

interface SubMenu extends Option {
  content: (Item | SubMenu)[]
}
export type ContextMenuUnit = Item | 'separator' | SubMenu

function handleType(unit: ContextMenuUnit | ContextMenuUnit[]): JSX.Element {
  if (Array.isArray(unit)) return <>{unit.map(x => handleType(x))}</>
  if (unit === 'separator') return <ContextMenuSeparator />

  if ('content' in unit && Array.isArray(unit.content)) { // submenu
    return (
      <ContextMenuSub key={unit.label} >
        <ContextMenuSubTrigger>
          {unit.label}
          <RightSlot>
            {unit.rightSlot || <ChevronRightIcon />}
          </RightSlot>
        </ContextMenuSubTrigger>
        <ContextMenuSubContent sideOffset={2} alignOffset={-5}>
          {handleType(unit.content)}
        </ContextMenuSubContent>
      </ContextMenuSub>
    )
  }

  // item
  return (
    <ContextMenuItem key={unit.label} onSelect={unit.onSelect}>
      {unit.label} <RightSlot>{unit.rightSlot}</RightSlot>
    </ContextMenuItem>
  )
}

export const ContextMenu = ({ units = [], children: child, title, }: { units?: ContextMenuUnit[], children: JSX.Element, title?: string }) => {

  return (
    <ContextMenuRoot>
      <ContextMenuTrigger asChild>
        {child}
      </ContextMenuTrigger>
      <ContextMenuContent sideOffset={5} align="end">
        {title && <>
          <ContextMenuLabel>
            {title}
          </ContextMenuLabel>
          <ContextMenuSeparator />
        </>}
        <ContextMenuItem onSelect={() => history.back()}>
          Back <RightSlot>⌘+[</RightSlot>
        </ContextMenuItem>
        <ContextMenuItem onSelect={() => history.forward()}>
          Foward <RightSlot>⌘+]</RightSlot>
        </ContextMenuItem>
        <ContextMenuItem onSelect={() => { window.location.reload(); }}>
          Reload <RightSlot>⌘+R</RightSlot>
        </ContextMenuItem>
        {handleType(units)}
      </ContextMenuContent>
    </ContextMenuRoot>
  )
}


const contentStyles = {
  minWidth: 220,
  backgroundColor: '$loContrast',
  borderRadius: 6,
  overflow: 'hidden',
  padding: 5,
  zIndex: 500,
  boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  // boxShadow: '$colors$shadowLight 0px 10px 38px -10px, $colors$shadowDark 0px 10px 20px -15px'
};

const StyledContent = styled(ContextMenuPrimitive.Content, { ...contentStyles });

function Content(props: any) {
  return (
    <ContextMenuPrimitive.Portal>
      <StyledContent {...props} />
    </ContextMenuPrimitive.Portal>
  );
}

const StyledSubContent = styled(ContextMenuPrimitive.SubContent, { ...contentStyles, minWidth: contentStyles.minWidth / 2, width: 'max-content' });

function SubContent(props: any) {
  return (
    <ContextMenuPrimitive.Portal>
      <StyledSubContent {...props} />
    </ContextMenuPrimitive.Portal>
  );
}

const itemStyles = {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  color: '$primary11',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '0 5px',
  position: 'relative',
  paddingLeft: 25,
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$gray8',
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    backgroundColor: '$primary9',
    color: '$primary1',
  },
} as const;

const StyledItem = styled(ContextMenuPrimitive.Item, { ...itemStyles });
const StyledCheckboxItem = styled(ContextMenuPrimitive.CheckboxItem, { ...itemStyles });
const StyledRadioItem = styled(ContextMenuPrimitive.RadioItem, { ...itemStyles });
const StyledSubTrigger = styled(ContextMenuPrimitive.SubTrigger, {
  '&[data-state="open"]': {
    backgroundColor: '$primary4',
    color: '$primary11',
  },
  ...itemStyles,
});

const StyledLabel = styled(ContextMenuPrimitive.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: '25px',
  color: '$gray11',
});

const StyledSeparator = styled(ContextMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: '$primary6',
  margin: 5,
});

const StyledItemIndicator = styled(ContextMenuPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const RightSlot = styled('div', {
  marginLeft: 'auto',
  paddingLeft: 20,
  color: '$gray11',
  '[data-highlighted] > &': { color: '$loContrast' },
  '[data-disabled] &': { color: '$gray8' },
});

// Exports
export const ContextMenuRoot = styled(ContextMenuPrimitive.Root, {});
export const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
export const ContextMenuContent = Content;
export const ContextMenuItem = StyledItem;
export const ContextMenuCheckboxItem = StyledCheckboxItem;
export const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;
export const ContextMenuRadioItem = StyledRadioItem;
export const ContextMenuItemIndicator = StyledItemIndicator;
export const ContextMenuLabel = StyledLabel;
export const ContextMenuSeparator = StyledSeparator;
export const ContextMenuSub = ContextMenuPrimitive.Sub;
export const ContextMenuSubTrigger = StyledSubTrigger;
export const ContextMenuSubContent = SubContent;