import {css} from '@emotion/react';

export const bicolor_style = (theme) => {
    const style = css`

        background: linear-gradient(0deg, #D8D8D8 50%, #F1F1F1 50%);
        padding: ${theme.container.mobile_screen_padding};
        margin: ${theme.container.big_screen_padding} 0;

        & > div {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            > .columna {
                flex: 0 0 50%;
                padding: 1rem 1rem;
            }
        }

        ${theme.mq('tablet-portrait')} {

                & > div {
                    flex-direction: row;
                }
                background: linear-gradient(90deg, #D8D8D8 50%, #F1F1F1 50%);

        }


    `;

    return [style];
}

