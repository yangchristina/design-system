"use client"
import { sva } from '@planda/styled-system/css';
import { createStyleContext } from '../createStyleContext';

export const table = sva({
  slots: ['th', 'td', 'table', 'thead', 'tr', 'tfoot', 'tbody', 'caption'],
  className: 'table',
  base: {
    table: {
      width: '100%',
      tableLayout: 'fixed',
      borderSpacing: 0,
    },
    tbody: {
      width: "100%"
    },
    caption: {
      textAlign: "start",
      marginBottom: "$5"
    },
    th: {
      fontWeight: "unset",
      textAlign: "start",
      fontSize: "$2",
      py: "$2",
      borderBottom: "1px solid {colors.$gray4}"
    },
    td: {
      py: "$2",
      borderBottom: "1px solid {colors.$gray4}",
      fontSize: "$2"
    }
  },
  variants: {
    striped: {
      true: {
        tbody: {
          [`& table__tr`]: {
            '&:nth-child(odd)': {
              backgroundColor: '$gray2',
            },
          },
        },
        thead: {
          [`& table__th`]: {
            fontSize: '$1',
            color: '$gray11',
          },
          [`& table__td`]: {
            fontSize: '$1',
            color: '$gray11',
          },
        },
      }
    },
    align: {
      start: {
        th: {
          textAlign: "start"
        },
        td: {
          textAlign: "start"
        }
      },
      center: {
        th: {
          textAlign: "center"
        },
        td: {
          textAlign: "center"
        }
      },
      end: {
        th: {
          textAlign: "center"
        },
        td: {
          textAlign: "end"
        }
      },
    },
    border: {
      solid: {
        th: {
          borderBottom: "1px solid {colors.$gray4}"
        },
        td: {
          borderBottom: "1px solid {colors.$gray4}"
        }
      },
      dashed: {
        th: {
          borderBottom: "1px dashed {colors.$gray8}"
        },
        td: {
          borderBottom: "1px dashed {colors.$gray8}"
        }
      }
    },
    alignTh: {
      start: {
        th: {
          textAlign: "start"
        },
      },
      center: {
        th: {
          textAlign: "center"
        },
      },
      end: {
        th: {
          textAlign: "center"
        },
      },
    },
    borderTh: {
      solid: {
        th: {
          borderBottom: "1px solid {colors.$gray4}"
        },
      },
      dashed: {
        th: {
          borderBottom: "1px dashed {colors.$gray8}"
        },
      }
    }
  },
  defaultVariants: {
    // align: "start",
    border: "solid"
  },
})


const { withProvider, withContext } = createStyleContext(table)

export const Table = withProvider('table', 'table')
export const Th = withContext('th', 'th')
export const Td = withContext('td', 'td')
export const Thead = withContext('thead', 'thead')
export const Tr = withContext('tr', 'tr')
export const Tfoot = withContext('tfoot', 'tfoot')
export const Tbody = withContext('tbody', 'tbody')
export const Caption = withContext('caption', 'caption')
