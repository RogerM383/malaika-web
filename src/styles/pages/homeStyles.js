import {css} from '@emotion/react';

export const home_styles = (theme) => {
    const style = css`




        .block1 {

            margin-bottom: 15rem;

            .alert {
                margin: 7rem 0;

                > p {
                    margin-bottom: 1rem;
                    font-size: 16px;

                    > span {
                        font-size: 18px;
                    }
                }

            }

            .cita {
                max-width: 500px;
                margin: 4rem 0;

                p {
                    font-weight: bold;
                    font-size: 24px;
                }

            }

            .subtitle {
                font-size: 16px;
                max-width: 700px;
                margin: 4rem 0;
            }


        }


        .block2 {

            background-color: #F8F8F8;

             .title {
                padding: 8rem 0;
            }

        }


        .block3 {
            background-color: #4D4D4D;

            .row {
                padding-top: 5rem;
            }

            .column:first-of-type {
                color: white;
                padding: 0 5rem;
                flex: 1 0 25% ;

                input {
                    background-color: white;
                    border-radius: 1px;
                   // width: 50%;
                }

            }

            .column:nth-of-type(2) {
                color: initial;
                background-color: white;
                border-top-left-radius: 23px;
                border-top-right-radius: 23px;
            }


            .normas {
                padding: 4rem;
                font-size: 16px;

                .normas_item {
                    display: flex;
                    border-bottom: 1px solid #979797;
                    margin-right: 1rem;
                    margin-bottom: 2rem;

                    p:first-child {
                        margin-right: 1rem;
                    }
                }


                .normas_item:last-child {
                    border-bottom: none;
                }
                }


            }


            .block4 {
                background-color: #F8F8F8;

                .row {
                    padding: 6rem;

                    .columna{
                        flex: 0 0 50% ;

                        @media(min-width: 60rem){
                            flex:0 0 33%;
                        }
                    }

                    .subscribe {
                        width: 70%;

                    }

                    .form_subscribe {
                        display: flex;

                        input {
                            background-color: white;
                        }
                    }

                }


            }

    `;

    return [style];
}



