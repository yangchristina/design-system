// import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
// import * as TabsPrimitive from '@radix-ui/react-tabs';
// import { styled } from "src/stitches.config";
// import { ReactNode } from 'react';
// import { useSpring, useSpringRef, animated, useSprings, Spring, useTransition } from '@react-spring/web'
// import type * as Stitches from '@stitches/react';
// import ContextMenu, { ContextMenuUnit } from './ContextMenu';
// import { useInternalExternalState } from '@hooks/useInternalExternalState';

// interface TabType {
//     label: string,
//     value: string,
//     content: JSX.Element,
//     contextMenu?: ContextMenuUnit[]
// }

// type Props = Stitches.VariantProps<typeof TabTrigger>

// // TODO: defaultValue, passed in values
// // Slidy tabs
// // REQUIRED: tabs.length > 0
// const Tabs = ({ tabs, defaultValue, onValueChange, disabled = false, value, ...tabTriggerProps }: {
//     tabs: TabType[], defaultValue?: string, disabled?: boolean, onValueChange?: ((value: string) => void),
//     value: string,
// } & Props) => {
//     // const { internalState: value, setInternalState: setValue } = useInternalExternalState<string>(
//     //     defaultValue || tabs[0].value, externalValue, externalSetValue,
//     //     (v)=>tabs.some(t=>t.value === v)
//     // )
//     // const [value, setValue] = useState(defaultValue || tabs[0].value)
//     defaultValue = defaultValue || tabs[0].value

//     const [springs, api] = useSprings(
//         tabs.length,
//         (springIndex) => ({
//             reverse: tabs[springIndex].value != value,
//             from: { flex: 1 },
//             to: { flex: 2 },
//         }),
//         [value]
//     )
//     const isValidValue = tabs.some(t => t.value === value)

//     return (
//         <TabRoot defaultValue={defaultValue} value={isValidValue ? value : defaultValue} onValueChange={(val) => { onValueChange && onValueChange(val) }}>
//             <TabList>
//                 {springs.map((props, i) => (
//                     <TabTrigger disabled={disabled} key={'tab-' + tabs[i].value} style={props} {...tabTriggerProps} value={tabs[i].value}>
//                         <ContextMenu units={tabs[i].contextMenu} >
//                             <Container>
//                                 <TabLabel>{tabs[i].label}</TabLabel>
//                             </Container>
//                         </ContextMenu>
//                     </TabTrigger>
//                 ))}
//             </TabList>
//             {
//                 tabs.map((tab, i) => {
//                     return (
//                         <TabContent key={tab.value} value={tab.value}>
//                             {tab.content}
//                         </TabContent>
//                     )
//                 })
//             }
//         </TabRoot>
//     )
// }

// export default Tabs


// export const TabList = styled(TabsPrimitive.List, {
//     flexShrink: 0,
//     display: 'flex',
//     flexDirection: 'row',
//     borderBottom: `1px solid $gray6`,
// });

// export const TabLabel = styled(animated.span, {})

// const Container = styled('div', {
//     size: '100%',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
// })

// export const TabTrigger = styled(animated(TabsPrimitive.Trigger), {
//     boxSizing: 'border-box',
//     $$curColor: '$colors$primary11',
//     position: 'relative',
//     all: 'unset',
//     fontFamily: 'inherit',
//     backgroundColor: '$gray1',
//     padding: '0 20px',
//     flex: 1,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     lineHeight: 1,
//     color: '$gray11',
//     userSelect: 'none',
//     '&:first-child': { borderTopLeftRadius: 6 },
//     '&:last-child': { borderTopRightRadius: 6 },
//     '&:hover': {
//         '&:not([data-disabled])': {
//             color: '$$curColor',
//         }
//     },
//     '&[data-state="active"]': {
//         color: '$$curColor',
//         boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
//         '& span': {
//             transform: 'scale(1.25)',
//         }
//     },
//     '&[data-state="inactive"]': {
//         color: '$$curColor',
//         background: '$overlay1',
//     },
//     '&[data-disabled]': {
//         cursor: 'no-drop'
//     },
//     '&:focus': { position: 'relative', boxShadow: `0 0 0 2px $colors$gray12` },

//     variants: {
//         size: {
//             1: {
//                 height: 22,
//                 fontSize: 10,
//                 '&[data-state="active"]': {
//                     boxShadow: 'inset 0 -0.6px 0 0 currentColor, 0 0.6px 0 0 currentColor',
//                 }
//             },
//             2: {
//                 height: 30,
//                 fontSize: 12,
//                 '&[data-state="active"]': {
//                     boxShadow: 'inset 0 -0.75px 0 0 currentColor, 0 0.75px 0 0 currentColor',
//                 }
//             },
//             3: {
//                 height: 45,
//                 fontSize: 15,
//                 '&[data-state="active"]': {
//                     boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
//                 }
//             }
//         },
//         color: {
//             primary: {
//                 $$curColor: '$colors$primary11',
//             },
//             gray: {
//                 $$curColor: '$colors$gray11',
//             },
//         }
//     },
//     defaultVariants: { size: 3, color: 'primary' },
// });

// export const TabContent = styled(animated(TabsPrimitive.Content), {
//     flexGrow: 1,
//     backgroundColor: '$primary1',
//     borderBottomLeftRadius: 6,
//     borderBottomRightRadius: 6,
//     transition: 'flex 0.3s ease-out',
//     outline: 'none',
//     // overflow: 'visible',
//     // height: '100%',
//     // overflow: 'auto',
//     // '&:focus': { boxShadow: `0 0 0 2px black` },
// });

// export const TabRoot = styled(animated(TabsPrimitive.Root), {
//     display: 'flex',
//     flexDirection: 'column',
//     boxShadow: `0 2px 10px $overlay4`,
//     maxHeight: 'inherit',
//     // overflow: 'auto',

//     variants: {
//         size: {
//             small: {
//                 [`& ${TabTrigger}`]: {
//                     height: 30,
//                     flex: 1,
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontSize: 12,
//                     lineHeight: 1,
//                     '&[data-state="active"]': {
//                         boxShadow: 'inset 0 -0.5px 0 0 currentColor, 0 0.5px 0 0 currentColor',
//                     },
//                     '&:focus': { position: 'relative', boxShadow: `0 0 0 1px $colors$gray12` },
//                 },
//                 [`& ${TabList}`]: {
//                     borderBottom: `0.5px solid $gray6`,
//                 }
//             }
//         }
//     }
// });


// {/* <>
//                 {
//                     tabs.map((tab, i) => {
//                         return <Content tab={tab} open={tab.value == value} />
//                         // {
//                             //     transition((style, val) => {
//                                 //         return (
//                                     //             <>
//                                     //                 {tabs[i].value == val ? (
                                        
//                                         //                     <TabContent style={style} value={tab.value}>
//                                         //                         {tab.content}
//                                         //                     </TabContent>
//                                         //                 ) : null}
//                                         //             </>
//                                         //         )
//                                         //     })
//                                         // }
//                                     })
//                                 }
//                             </> */}