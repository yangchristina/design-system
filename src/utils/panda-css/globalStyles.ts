import { defineGlobalStyles } from '@pandacss/dev';

export const globalStyles = defineGlobalStyles({
    '*': {
        margin: 0,
        padding: 0,
    },
    html: {
        margin: 0,
        minHeight: '100%',
    },
    ':root': {
        margin: 0,
        fontFamily: 'system',
        height: '100%',
        color: '$primary12',
        boxSizing: 'border-box',
        '-moz-box-sizing': 'border-box',
        '-webkit-box-sizing': 'border-box',
        scrollBehavior: 'smooth',
        scrollbarColor: 'auto transparent',
        background: '$primary1',
        fontSize: '1em',
    },
    body: {
        minHeight: '100vh',
        minWidth: '100vw',
        fontSize: '1em',
        margin: 0,
        padding: 0,
        background: '$primary1',
        // display: 'flex',
        // alignItems: 'stretch',
    },
    'h1, h2, h3, h4, h5, h6': {
        color: '$primary11',
        margin: 0,
        display: 'block',
        fontWeight: 'bold',
    },
    main: {
        // TODO: delete this when done testing
        backgroundColor: '$primary1',
        width: '100vw',
    },
    sub: {
        verticalAlign: 'bottom',
        position: 'relative',
        bottom: '-0.5em',
        color: '$unimportant',
        fontSize: '0.65em',
    },
    textarea: {
        fontFamily: 'system',
        padding: 5,
        letterSpacing: 0.8,
        boxSizing: 'border-box',
        background: '$overlayB11',
        '&:focus': {
            // border: '$focus',
            outline: 'none !important',
            // border: '1px solid red',. .
            boxShadow: '$focus',
        },
    },
    a: {
        textDecoration: 'none',
    },
    '.gap': {
        display: 'flex',
        gap: 15,
    },
    '.center': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    li: {
        marginInline: 40,
    },
});
