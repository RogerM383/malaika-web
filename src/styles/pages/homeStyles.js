import {css} from '@emotion/react';

export const home_styles = (theme) => {
    const style = css`


        .block1 {

            padding-top: ${theme.container.mobile_screen_top_padding};

            .cita {
                padding-top: ${theme.container.mobile_screen_top_padding};
                max-width: 600px;
            }

            .title {
                padding-top: ${theme.container.mobile_screen_top_padding};
            }


            .subtitle {

                max-width: 700px;
                margin: ${theme.container.mobile_screen_top_padding} 0;
            }

            hr {
                margin: 0;
            }

            .more {
                float: right;

                > a {
                    margin-bottom: ${theme.container.mobile_screen_top_padding};
                    display: block;
                    color: black;
                }
            }


        }


        .block2 {


            margin-top: 6rem;

            .title {
                padding-top: 2rem;
            }


        }


        .block3 {
            background-color: #4D4D4D;

            .row {
                padding-top: ${theme.container.mobile_screen_top_padding};
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


            .normas {
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
            }


        }


        .block4 {
            background-color: #F8F8F8;

            .row {
                padding: 6rem 0;

                .left {

                    flex: 0 0 50%;

                }

                .right {
                    padding-left: 1rem;

                    .subscribe {
                        width: 70%;

                    }

                    .form_subscribe {
                        display: flex;

                    }
                }

            }


        }

        ${theme.mq('tablet-portrait')} {
            .block4 {
                .row {
                    .left {
                        flex: 0 0 33%;
                    }

                    .right {

                    }
                }
            }
        }

    `;

    return [style];
}



