import {css} from '@emotion/react';

export const home_styles = (theme) => {
    const style = css`


        .block1 {

            margin-top: 5.5rem;

           // padding: 0 ${theme.container.horizontal_padding};
            border-bottom: 1ps solif ${theme.colors.light_gray};

            .alert {
                display: flex;
                flex-direction: row;
                margin-bottom: 5.2rem;
                .head {
                    margin-right: 1rem;
                    font-family: ${theme.font.didot};
                    font-weight: ${theme.font.bold};
                    font-size: ${theme.font.sm};
                }
                .alert-group {
                    font-family: ${theme.font.quicksand};
                    font-size: ${theme.font.sm};
                    p {
                        font-family: ${theme.font.quicksand};
                        font-size: ${theme.font.sm};
                    }
                }
            }


            .cita {
                font-family: ${theme.font.didot};
                font-weight: ${theme.font.bold};
                font-size: ${theme.font.xl};
                margin-bottom: 6rem;
            }

            .title {
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                font-family: ${theme.font.didot};
                font-weight: ${theme.font.bold};
                margin-bottom: 2.2rem;

                h2 {
                    display: flex;
                    flex-direction: column;
                    margin-right: 1rem;
                }

                .litle {
                    color: ${theme.colors.primary}
                }
            }

            .subtitle {
                margin-bottom: 4rem;
                p {
                    font-family: ${theme.font.didot};
                    font-weight: ${theme.font.bold};
                    font-size: ${theme.font.sm};
                }
            }

            .card-vautor {
                display: flex;
                flex-direction: column;
                &:last-of-type {
                    margin-bottom: 2rem;
                }
                .card-text {
                    display: flex;
                    flex-direction: column;
                    padding: 1rem 1rem 0 1rem;
                    .card-title {
                        font-family: ${theme.font.didot};
                        font-weight: ${theme.font.bold};
                        font-size: ${theme.font.sm};
                        margin-bottom: 1rem;
                    }
                    .card-data {
                        font-family: ${theme.font.quicksand};
                        font-weight: ${theme.font.medium};
                        font-size: ${theme.font.sm};
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        margin-bottom: 1.3rem;
                        img {
                            margin-right: 1rem;
                            width: 1.2rem;
                            height: 1.2rem;
                        }
                    }
                    .more-info {
                        font-family: ${theme.font.didot};
                        font-weight: ${theme.font.medium};
                        font-size: ${theme.font.sm};
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        margin-bottom: 1.3rem;
                    }
                }
            }

            .more {
                float: right;
                font-family: ${theme.font.didot};
                font-weight: ${theme.font.medium};
                font-size: ${theme.font.sm};
                & > a {
                    display: block;
                    color: black;
                }
            }
        }


        .block2 {
            background-color: #F8F8F8;
            padding-top: 4.5rem;
            padding-bottom: 4.5rem;
            margin-top: 4.5rem;

            .container {
                padding: 0 ${theme.container.horizontal_padding};
                .title {
                    font-family: ${theme.font.didot};
                    font-weight: ${theme.font.medium};
                    margin-bottom: 4.4rem;
                }
            }
        }


        .block3 {
            background-color: #4D4D4D;
            padding-top: 3rem;

            .row {

                span {
                    margin-bottom: .5rem;
                    font-family: ${theme.font.didot};
                    font-weight: ${theme.font.regular};
                    font-size: ${theme.font.s};
                    display: block;
                }
               h4 {
                  font-family: ${theme.font.didot};
                  font-weight: ${theme.font.regular};
                  color: ${theme.colors.primary};
                  margin-bottom: 1.7rem;
               }
               p {
                  font-family: ${theme.font.quicksand};
                  font-weight: ${theme.font.regular};
                  font-size: ${theme.font.m};
                  color: white;
                  margin-bottom: 3.5rem;
               }
               input {
                  height: 3rem;
                  margin-bottom: 3rem;
                  padding: 1rem;
               }

                p.data_title{
                    color: #9B9B9B;
                }

                p.data_content{
                    color: initial;
                }


            }


            /*Columna GRIS*/

            .column:first-of-type {
                color: white;
                padding: 0 3rem;
                flex: 1 0 30%;


                p:nth-of-type(3) {
                    width: 80%;
                }

                input {
                    background-color: white;
                    border-radius: 1px;
                    // width: 50%;
                }

            }


            /*Columna BLANCA*/

            .column:nth-of-type(2) {
                color: initial;
                background-color: white;
                border-top-left-radius: 23px;
                border-top-right-radius: 23px;
            }


            .normas{
                padding:2rem;
            }
/*            .normas {
                padding: 4rem;


                .normas_item {
                    display: flex;
                    border-bottom: 1px solid #979797;
                    margin-right: 1rem;
                    margin-bottom: 1rem;

                    div > p {
                        margin-bottom: 1rem;
                    }


                    p:first-child {
                        margin-right: 1rem;
                    }
                }


                .normas_item:last-child {
                    border-bottom: none;
                }
            }*/




        }


        .block4 {
            padding:  4.5rem 3rem;
            background-color: #F8F8F8;
            .info{
                font-family: ${theme.font.didot};
                font-weight: ${theme.font.bold};
                font-size: ${theme.font.h5};
            }

            .subscribe{
                p:first-of-type{
                    font-size: 0.9rem;
                }

                p:nth-of-type(2){
                    font-size: 0.6rem;
                }


            }





            }



    `;

    return [style];
}



