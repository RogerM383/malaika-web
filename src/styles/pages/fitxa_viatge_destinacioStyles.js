import {css} from '@emotion/react';

export const viatge_destinacio_fitxa = (theme) => {
    const style = css`

        .block1 {
            .column:first-of-type {
                border-right: 0;
                padding-right: 3rem;
            }

            .column:nth-of-type(2){
                display: flex;
                justify-content: start;


                span{
                    display: block;
                }

                .plane{
                    margin:2rem 0;
                }

            }


            @media (min-width: 40.0rem) {

                .column:first-of-type {
                    border-right: 1px solid black;
                }
                .column:nth-of-type(2){
                    justify-content: center;
                }
            }

                @media (min-width: 60.0rem) {

                }

                @media (min-width: 80.0rem) {
                }


            }

        .block2 {
            background: linear-gradient(90deg, #D8D8D8 50%, #F1F1F1 50%);
            padding: 2rem;
            margin: 4rem 0;

            > .container {
                display: flex;

                > .columna {
                    flex: 0 0 50%;
                    padding: 2rem 0;

                    :nth-of-type(2) {
                        padding: 2rem
                    }
                }


            }
        }


        .block3 {
            background-color:#F8F8F8 ;
            padding: 8rem 0;
            > .text{
                padding-top: 4rem;
                text-align: center;
            }
        }



    `;

    return [style];
}



