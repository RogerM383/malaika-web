
export const bp = {
    'mobile-landscape': '480',
    'tablet-portrait':  '768',
    'tablet-landscape': '992',
    'laptop':           '1200'
}

export const mq = n => {
    const bpArray = Object.keys(bp).map(key => [key, bp[key]]);
    const [result] = bpArray.reduce((acc, [name, size]) => {
        if (n === name) return [...acc, `@media (min-width: ${size}px)`];
        return acc;
    }, []);

    return result;
};

const DefaultTheme = {
    mq: mq,
    colors: {
        primary: '#8AC3E6',
        primary_light: '#2b9dcb',
        white: '#ffffff',
        black: '#000000',
        dark_gray: '#212B36',
        text_gray: '#293340',
        light_gray: '#9B9B9B'
    },
    header: {
        padding_vertical: '1.37rem',
        padding_horizontal: '2.5rem',
        menu: {
            border_top_right_radius: '25px',
        }
    },
    paddings: {

    },
    font: {
        xs: '.6rem',
        s: '.7rem',
        sm: '.8rem',
        m: '1rem',
        l: '1.2rem',
        xl: '1.3rem',
        xxl:'1.4rem',
        h5: '1.5rem',
        h4: '1.7rem',
        h3: '2rem',
        h2: '2.5rem',
        h1: '4rem',
        regular: 400,
        medium: 500,
        bold: 700,
        didot: 'Didot, serif',
        quicksand: 'Quicksand, sans-serif'
    },
    container: {
        max_width: '1580px',
        horizontal_padding: '4rem',
    }
}

export default DefaultTheme;

