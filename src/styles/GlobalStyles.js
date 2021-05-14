import {css} from '@emotion/react';

export const global = (theme) => {

    const style = css`
        html {
            padding: 0;
            margin: 0;
            background: ${theme.colors.white};
            min-height: 100vh;
            font-size: 62.5%;
            scroll-behavior: smooth;


            body {
                padding: 0;
                margin: 0;
                background: ${theme.colors.white};
                min-height: 100vh;
                font-family: 'Quicksand', sans-serif;
                font-size: 1.2rem;
                color: black;
                line-height: 1.2;

                button {
                    background-color: ${theme.colors.primary};
                    border: ${theme.colors.primary};

                }

                a {
                    color: ${theme.colors.primary};
                }

            ,
            select {
                &:hover {
                    border-color: ${theme.colors.primary};
                }

                &:focus {
                    border-color: ${theme.colors.primary};
                }

            },
            input [ type = number ] {
                &:hover {
                    border-color: ${theme.colors.primary};
                }

                &:focus {
                    border-color: ${theme.colors.primary};
                }

            },
            input [ type = time ] {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                background-color: transparent;
                border: 0.1rem solid #d1d1d1;
                border-radius: .4rem;
                box-shadow: none;
                box-sizing: inherit;
                height: 3.8rem;
                padding: .6rem 1.0rem;
                // width: 100%;


            },
            input [ type = time ] {
                &:focus {
                    border-color: ${theme.colors.primary};
                }

            ,
            &: hover {
                border-color: ${theme.colors.primary};
            },
            }

                input[type=text] {
                    &:hover {
                        border-color: ${theme.colors.primary} !important;
                    }

                ,
                &: focus {
                    border-color: ${theme.colors.primary};
                },
                }

            ,
            input [ type = password ] {
                &:hover {
                    border-color: ${theme.colors.primary} !important;
                }

                &:focus {
                    border-color: ${theme.colors.primary};
                }
            },
            textarea {
                &:hover {
                    border-color: ${theme.colors.primary};
                }

                &:focus {
                    border-color: ${theme.colors.primary};
                }
            },
            . button: focus,
            . button: hover,
            button: focus,
            button: hover,
            input [ type = 'button' ]: focus,
            input [ type = 'button' ]: hover,
            input [ type = 'reset' ]: focus,
            input [ type = 'reset' ]: hover,
            input [ type = 'submit' ]: focus,
            input [ type = 'submit' ]: hover {

            }


                a.button {

                    background-color: ${theme.colors.primary};
                    border: ${theme.colors.primary};
                }

                .wrap {
                    max-width: 1200px;
                    margin: 0 auto;
                    overflow: visible;
                }

            }


            .link{
                cursor: pointer;
            }


            button {

                border-radius: 1px;
                height: 2.5rem;
                align-items: center;
                background-color: ${theme.colors.primary};
                font-size: ${theme.font.small};
                line-height: 1;

            }

            input[type="text"] {
                border-radius: 0;
                height: 2.5rem;
            }


            .breadcrumb {
                color: lightgray;
                margin: 2rem 0;
            }

            .title {
                // width: 40%;
                font-size: 2.5rem;
                font-weight: bold;
                font-family: Didot, serif;

                > span {
                    color: ${theme.colors.primary};
                    font-size: 30px;
                    font-weight: initial;
                }
            }


            .container {
                max-width: 158.0rem;
                //158
            }

            .wrap {
                max-width: 1200px;
                overflow: visible;
            }


            .bold {
                font-weight: bold;
            }

            .sbold {
                font-weight: 600;
            }

            .mbold {
                font-weight: 500;
            }


            .primary {
                color: ${theme.colors.primary};
            }

            .white {
                color: ${theme.colors.white};
            }

            .black {
                color: ${theme.colors.black};
            }

            .fs-100 {
                font-size: 5rem;
            }

            .fs-50 {
                font-size: 2.5rem;
            }

            .fs-40 {
                font-size: 2rem;
            }

            .fs-36 {
                font-size: 1.8rem;
            }

            .fs-32 {
                font-size: 1.6rem;
            }

            .fs-30 {
                font-size: 1.5rem;
            }

            .fs-28 {
                font-size: 1.4rem;
            }

            .fs-26 {
                font-size: 1.3rem;
            }

            .fs-24 {
                font-size: 1.2rem;
            }

            .fs-20 {
                font-size: 1rem;
            }

            .fs-21 {
                font-size: 1.05rem;
            }

            .fs-18 {
                font-size: 0.9rem;
            }

            .fs-16 {
                font-size: 0.8rem;
            }

            .fs-14 {
                font-size: 0.7rem;
            }

            .fs-12 {
                font-size: 0.6rem;
            }

            .db {
                display: block;
            }

            .my-5 {
                margin: 5rem 0;
            }

            .didot {
                font-family: 'Didot', sans-serif;;
            }

            .sofia {
                font-family: 'sofia', sans-serif;;
            }

            * {
                box-sizing: border-box;
            }


            .next_prev {
                padding: 3rem 0;

                button {
                    background-color: white;
                    color: gray;
                    border-radius: 0;
                }
            }


            .psmall {
                padding-top: 2rem;
            }

            .pmedium {
                padding-top: 3.5rem;
            }

            .plarge {
                padding-top: 4rem;
            }


        }


        ${theme.mq('mobile-landscape')} {
            html {
                font-size: 15px;
            }
        }

        ${theme.mq('laptop')} {
            html {
                font-size: 20px;
            }
        }
    `;
    return [style];
}


/*         input:hover, textarea:hover, select:hover {
           border-color:${theme.colors.primary};
         }

         input:focus, textarea:focus, select:focus {
           border-color:${theme.colors.primary};
         }*/

/*      input[type=checkbox] {

    filter: hue-rotate(55deg);*/

/*        -webkit-appearance: none;
        -moz-appearance: none;
        -o-appearance: none;
        appearance: none;

        width: 14px !important;
        height: 14px !important;
        margin: 5px;

        outline: 1px solid gray;
        box-shadow: none;
        font-size: 0.8em;
        text-align: center;
        line-height: 1em;
        background: ${theme.colors.primary};

        &:checked:after {
          content: '✔';
          color: white;
        }

      }*/
