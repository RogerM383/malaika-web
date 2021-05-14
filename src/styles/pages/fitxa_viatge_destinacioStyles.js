import {css} from '@emotion/react';

export const viatge_destinacio_fitxa = (theme) => {
    const style = css`

        .block1 {

            padding: ${theme.container.mobile_screen_padding} 0;

            button{
                border-radius: 8px;
                margin-top:  ${theme.container.big_screen_top_padding} ;
            }
            .column:first-of-type {
                border-right: 0;
                //padding-right: 3rem;
            }

            .column:nth-of-type(2) {
                display: flex;
                justify-content: start;


                .plane {
                    margin-top:  ${theme.container.big_screen_top_padding} ;
                }

            }

            li {
                line-height: 1rem;
                list-style: none;
            }



        }


        .block3 {
            background-color: #F8F8F8;
            padding: 8rem 0;

            > .text {
                padding-top: 4rem;
                text-align: center;
            }
        }


        ${theme.mq('tablet-portrait')} {
            .block1 {

                .column:first-of-type {
                    border-right: 1px solid black;
                }

                .column:nth-of-type(2) {
                    justify-content: center;
                    padding-top: 0;
                }

            }
        }



    `;

    return [style];
}



