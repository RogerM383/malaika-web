import {css} from '@emotion/react';

export const grid_style = (size) => (theme) => {

    /*  console.log(size);*/
    const style = css`

        display: grid;
        // grid-template-columns: repeat(auto-fill, minmax(35rem, 1fr));
        grid-auto-rows: minmax(150px, auto);
        row-gap: 2rem;
        grid-column-gap: 2rem;
        // grid-template-columns: repeat(3, 1fr);
        grid-template-columns: repeat(auto-fill, minmax(${size}, 1fr));
        //grid-template-columns: repeat(auto-fill, minmax(${size}, 1fr));


        margin-bottom: 2rem;
            /*
        ${theme.mq('mobile-landscape')} {
            grid-template-columns: repeat(auto-fill, minmax(${size}, 1fr));
        }
*/





    `;

    return [style];
}
