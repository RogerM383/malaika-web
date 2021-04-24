import {css} from '@emotion/react';

export const viatge_autor_fitxa = (theme) => {
    const style = css`


        .block1 {
            .column{
                padding: 2rem;
            }
            .column:first-of-type {
                border-right: 0;
            }

            .column:nth-of-type(2){

                display: flex;
                flex-direction: column;
                justify-content: space-around;

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
            }
        }

        .block2 {
            background: linear-gradient(90deg, #D8D8D8 50%, #F1F1F1 50%);
            padding: 2rem;
            margin: 4rem 0;


           & > .container {
                display: flex;
               flex-wrap: wrap;

                > .columna {
                    flex: 0 0 50%;
                    padding: 2rem 0;

                    :nth-of-type(2) {
                        padding: 2rem
                    }
                }


            }
        }






    `;

    return [style];
}



