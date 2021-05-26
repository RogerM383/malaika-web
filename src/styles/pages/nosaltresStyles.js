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
                    margin-right: 2rem;
                    margin-bottom: 2rem;
                }
                p {
                    font-family: ${theme.font.quicksand};
                    font-size: ${theme.font.m};
                }
            }
        }

        .block2 {
            background-color: #F8F8F8;
            padding: 2rem 0;
            h4 {
                font-family: ${theme.font.didot};
                font-weight: ${theme.font.bold};
                margin-top: 2rem;
                margin-bottom: 2rem;
                padding: 0 2rem;
            }

            img {
                width: 100%;
            }
        }

        ${theme.mq('tablet-landscape')} {
            .block1 {
                flex-direction: row;
                .item:last-of-type {
                    margin-left: 1rem;
                }
            }
            
            .block2 {
                padding-bottom: 0;
                & > div {
                    display: flex;
                    flex-direction: row;
                    h4 {
                        flex: 3;
                    }
                    img {
                        transform: translateX(10%);
                        flex: 10;
                    }
                }
            }
        }


    `;

    return [style];
}



