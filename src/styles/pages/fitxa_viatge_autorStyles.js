import {css} from '@emotion/react';

export const viatge_autor_fitxa = (theme) => {
    const style = css`


        .block1 {
            .title{
                padding:4rem 0
            }
            .column{
                padding: 2rem;
            }
            .column:first-of-type {
                border-right: 0;
                li{
                    list-style: none;
                }

                button{

                }
            }

            .column:nth-of-type(2){
                display: flex;
                justify-content: center;
                padding:6rem 0;


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
                    padding: 2rem 3rem;

                    :first-child{
                        padding: 3rem 3rem 3rem 0;
                    }
                    :nth-of-type(2){
                        padding: 3rem ;
                    }

                }


            }
        }

        .block3{

            padding:5rem;
            .separator{
                position: relative;
                content:"";
                height: 1px;
                width: 80%;
                border: 1px solid lightgray;
                bottom: 0;
                margin:10rem;
            ;
            }


        }





    `;

    return [style];
}



