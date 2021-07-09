import {css} from '@emotion/react';

export const nosaltres_styles = (theme) => {
    const style = css`

        .block1 {
            padding: 7.5rem ${theme.container.horizontal_padding};
            display: flex;
            flex-direction: column;
            .item {
                flex: 1;


                .title {
                    font-family: ${theme.font.didot};
                    font-weight: ${theme.font.bold};
                    margin-right: 2rem;
                    margin-bottom: 2rem;
                    font-size: 2rem;

                }

                .pad {
                    text-align: justify;
                    font-family: ${theme.font.quicksand};
                    font-size: 0.9rem;
                    padding-top: 1rem;
                }
            }
        }

        .block2 {
            background-color: #F8F8F8;

            .text{
                font-family: ${theme.font.didot};
                font-weight: ${theme.font.bold};
                font-size: ${theme.font.h4};
                margin-top: 2rem;
                margin-bottom: 2rem;
                padding-right: 2rem;

            }

            img {
                width: 100%;
               margin-right: auto;
            }

        }

        ${theme.mq('tablet-landscape')} {
            .block1 {
                flex-direction: row;
                .item:last-of-type {
                    margin-left: 1rem;
                }
            }

        }


    `;

    return [style];
}



