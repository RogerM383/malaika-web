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
            }

            h2{
                margin-bottom: 1.5rem;
            }
        }


    `;

    return [style];
}



