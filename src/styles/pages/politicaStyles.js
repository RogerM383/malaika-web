import {css} from '@emotion/react';

export const politica_styles = (theme) => {
    const style = css`

        padding-top: 5rem;
        .block1 {

            > img {
                display: block;
                margin:auto;
                margin-bottom: 4rem;
                cursor: pointer;
            }
            h1{
                margin-bottom: 2rem;
                font-size: 1.8rem;
            }

            h2{
                margin-bottom: 1.5rem;
                font-size: 1.4rem;
            }
        }


    `;

    return [style];
}



