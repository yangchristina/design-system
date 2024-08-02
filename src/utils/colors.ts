export const loContrasts = ['lime', 'yellow', 'amber', 'sky', 'mint'];

export const colors = [
  'gray',
  'mauve',
  'slate',
  'sage',
  'olive',
  'sand',

  'tomato',
  'red',
  'crimson',
  'pink',
  'plum',
  'purple',
  'violet',
  'indigo',

  'blue',
  'cyan',
  'teal',
  'green',
  'grass',

  'brown',
  'bronze',
  'gold',

  'sky',
  'mint',
  'lime',
  'yellow',
  'amber',
  'orange',
] as const;

export function getHiContrast(color: string) {
  if (loContrasts.includes(color)) {
    return 'hsl(0, 0%, 0%)';
  }

  return 'hsl(0, 0%, 100%)';
}
