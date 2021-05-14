import {css} from '@emotion/react';

export const nosaltres_styles = (theme) => {
    const style = css`

        .block1 {
            padding-top: ${theme.container.mobile_screen_top_padding};
            display: flex;
            flex-wrap: wrap;

            .item {
                flex: 1 0 100%;
                flex-direction: column;
                padding: 0 1rem;

            }

            .title {
                padding-bottom: 1rem;
            }

            & .title {
                margin: 0;
            }
        }

        .block2 {
            margin-top: ${theme.container.mobile_screen_top_padding};
            background-color: #F8F8F8;

            .column:first-of-type {
                font-size: 34px;
                font-weight: bold;
                padding: 5rem 0;
                max-width: 100%;
            }

            img{
                position: relative;
                top: 50%;
                transform: translateY(-50%);
            }
        }


        ${theme.mq('mobile-landscape')} {
            .block2 {
                .column:first-of-type {
                    max-width: 33%;
                }
            }
        }


        ${theme.mq('tablet-landscape')} {
            .block1 {
                .item {
                    flex-direction: row;
                    flex: 1 0 300px;

                }
            }
        }


    `;

    return [style];
}



