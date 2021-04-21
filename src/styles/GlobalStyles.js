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



        , /*html end*/

            .wrap{
            max-width: 1200px;
            overflow: visible;
        }


        .bold {
            font-weight: bold;
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

        .fs-100{
            font-size: 100px;
        }
        .fs-50{
            font-size: 50px;
        }
        .fs-40{
            font-size: 40px;
        }
        .fs-36{
            font-size: 36px;
        }
        .fs-32{
            font-size: 32px;
        }
        .fs-30{
            font-size: 30px;
        }
        .fs-28{
            font-size: 28px;
        }
        .fs-26{
            font-size: 26px;
        }
        .fs-24{
            font-size: 24px;
        }
        .fs-20{
            font-size: 20px;
        }
        .fs-21{
            font-size: 21px;
        }
        .fs-18{
            font-size: 18px;
        }
        .fs-14{
            font-size: 14px;
        }
        .fs-12{
            font-size: 12px;
        }

        .db{
            display: block;
        }
        .my-5{
            margin:5rem 0;
        }


        * {
            box-sizing: border-box;
        }

            .block1, .block2, .block3, .block4{
                margin:8rem 5rem;
                max-width: 1200px;

                overflow-x: hidden;
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
