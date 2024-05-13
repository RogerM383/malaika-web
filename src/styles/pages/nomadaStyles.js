import {css} from '@emotion/react';

export const nomada_styles = (theme) => {
    const style = css`


        .block1{
           // padding-top: 4rem;

            .left_column{
                height: 1500px;
            }
            .right_column{
                .search_input {
                    border: 0;
                    border-bottom: 1px solid lightgray;
                }
                .recent_post{
                    font-weight: ${theme.font.bold};
                    font-size: 0.9rem;
                }
            }

            :after {
                display: block;
                content: "";
                width: 100%;
                border: 1px solid lightgray;
                bottom: 0;
                margin-top: 8rem;

            }
        }

        .more {
            color: #4A4A4A;
        }



        .recent {
            display: none;
        }

        @media (min-width: 40.0rem) {
            .recent {
                display: block;
            }

        }

    `;

    return [style];
}



