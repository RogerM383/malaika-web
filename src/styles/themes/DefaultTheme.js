
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
        big_screen_height: '10.5rem',
        mobile_screen_height: '5rem',
        font_weight: 500,
        font_size: '1.6rem',
    },
    paddings: {
        xl_padding:'8rem',
        big_screen_general: '5.5rem',
        mobile_screen_general: '2rem',

    },
    font: {
        small: '.8rem',
        smedium: '1.2rem',
        medium: '1.4rem',   // regular
        large: '1.8rem',    // h2
        xlarge: '2rem',
        XLlarge:'3rem',
        XXLlarge:'4rem',// h1
        slim_bold: 500,
        bold: 700,
    },
    container: {
        max_width: '1580px',
        mobile_screen_padding: '2rem',
        big_screen_padding: '4rem',
        mobile_screen_top_padding: '3.5rem',
        big_screen_top_padding: '4rem'
    }
}

export default DefaultTheme;

