'use client';
import { tableSlots } from '@planda/styled-system/recipes';
import { createStyleContext } from '../createStyleContext';

const { withProvider, withContext } = createStyleContext(tableSlots);

export const Table = withProvider('table', 'table');
export const Th = withContext('th', 'th');
export const Td = withContext('td', 'td');
export const Thead = withContext('thead', 'thead');
export const Tr = withContext('tr', 'tr');
export const Tfoot = withContext('tfoot', 'tfoot');
export const Tbody = withContext('tbody', 'tbody');
export const Caption = withContext('caption', 'caption');
