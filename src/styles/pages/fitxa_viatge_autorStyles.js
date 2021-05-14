import {css} from '@emotion/react';

export const viatge_autor_fitxa = (theme) => {
    const style = css`


        .block1 {
            margin-top: ${theme.container.mobile_screen_padding};

            .row {
                margin-top: ${theme.container.big_screen_top_padding};


                .column {
                    padding-right: 1rem;
                    padding-left: 1rem;
                }

                .column:first-of-type {
                    position: relative;
                    border-right: 0;

                    button {

                       margin-bottom: 3rem;
                       margin-top: 3rem
                    }

                    li {
                        list-style: none;
                    }


                }

                .column:nth-of-type(2) {
                    display: flex;
                    justify-content: center;


                    span {
                        display: block;
                    }

                    .plane {
                        margin: 2rem 0;
                    }


                }


            }


        }

        .block2 {

        }

        .block3 {

            margin:0 1rem;
            .separator {
                position: relative;
                content: "";
                height: 1px;
                width: 80%;
                border: 1px solid lightgray;
                bottom: 0;
                margin:${theme.container.big_screen_padding} 0;
            }


        }


        ${theme.mq('tablet-portrait')} {
            .block1 {
                .row {
                    .column:first-of-type {
                        border-right: 1px solid black;
                    }
                }
            }

            .block2{

            }
        }


}

    `;

    return [style];
}



