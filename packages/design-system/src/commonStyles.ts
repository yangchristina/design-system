import { styled } from '@planda/styled-system/jsx';

export const Unimportant = styled('p', {
    base: {
        textStyle: 'unimportant',
        margin: 0,
    },
});

export const UnimportantVerticalCenter = styled('p', {
    base: {
        textStyle: 'unimportant',
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        gap: 4,
    },
});

export const UnimportantCategory = styled('p', {
    base: {
        textStyle: 'unimportantCategory',
        margin: 0,
    },
});

export const UnimportantInline = styled('span', {
    base: {
        textStyle: 'unimportant',
        fontSize: '0.6em',
        margin: 0,
        marginInline: 6,
        marginTop: 5,
        marginBottom: -5,
    },
});

export const UnimportantInlineCategory = styled('span', {
    base: {
        textStyle: 'unimportantCategory',
        fontSize: '0.6em',
        margin: 0,
        marginInline: 6,
        marginTop: 5,
        marginBottom: -5,
    },
});

export const BareFlexCol = styled('div', {
    base: {
        padding: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
    },
});

export const Group = styled('div', {
    variants: {
        align: {
            horizontal: {},
            vertical: {
                flexDirection: 'column',
                alignItems: 'flex-start',
            },
        },
    },
    base: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '0.1rem',
        width: '100%',
    },
});
