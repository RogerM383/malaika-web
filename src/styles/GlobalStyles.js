import {css} from '@emotion/react';

export const global = (theme) => {

    const style = css`

        /* --- RESET ------------------------------------------------------------------------------------------------ */
        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed,
        figure, figcaption, footer, header, hgroup,
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font: inherit;
            vertical-align: baseline;
        }

        em {
            font-style: italic;
        }
      
        b, strong {
            font-weight: bold;
        }
      
        
        
        /* HTML5 display-role reset for older browsers */
        article, aside, details, figcaption, figure,
        footer, header, hgroup, menu, nav, section {
            display: block;
        }

        body {
            line-height: 1;
        }

        ol, ul {
            list-style: none;
        }

        blockquote, q {
            quotes: none;
        }

        table {
            border-collapse: collapse;
            border-spacing: 0;
        }
        /* ---------------------------------------------------------------------------------------------------------- */

        @font-face {
            font-family: 'Didot';
            src: local('Didot'), url('/fonts/didot/Didot Regular.ttf') format('truetype');
          //  src: local(Didot), url('./fonts/didot/Didot Regular.ttf') format('truetype');
        }

        @font-face {
            font-family: 'Quicksand';
            src: local('Quicksand'), url('/fonts/quicksand/Quicksand-Regular.ttf') format('truetype');
            //src: local(Quicksand), url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap') ;
        }
        * {
            box-sizing: border-box;
            border: 1px solid black;
        }

        html {
            padding: 0;
            margin: 0;
            background: ${theme.colors.white};
            min-height: 100vh;
            font-size: 12px;
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
                overflow-x: hidden;

                a {
                    text-decoration: none;
                    color: ${theme.colors.primary};
                    &:hover {
                        color: darkgray;
                    }
                }

                p {
                    font-size: ${theme.font.medium};
                    font-family: ${theme.font.quicksand};
                    margin-bottom: 1rem;
                }

                ul, ol {
                    list-style: none;
                }

                h1 {
                    font-size: ${theme.font.h1};
                }

                h2 {
                    font-size: ${theme.font.h2};
                }

                h3 {
                    font-size: ${theme.font.h3};
                }

                h4 {
                    font-size: ${theme.font.h4};
                }

                h5 {
                    font-size: ${theme.font.h5};
                }

                button {

                    border-radius: 1px;
                    height: 2.5rem;
                    align-items: center;
                    background-color: ${theme.colors.primary};
                    line-height: 1;
                    border: 0;
                    color: ${theme.colors.white};
                    font-size: 1rem;

                }

                input {

                    border: none;
                    height: 2.5rem;
                    margin-bottom: 1rem;
                    padding: 1rem;
                    font-size: 1rem;

                }

                .next_prev {
                    display: flex;
                    align-items: center;
                    padding:1.5rem 0;

                    button {

                        background-color: white;
                        color: gray;

                        line-height: initial;
                        display: flex;
                        align-items: center;
                            /*font-size: ${theme.font.xl};
                      height: 3.5rem;
                        padding-left: 1rem;
                        padding-right: 1rem;*/


                        font-size: ${theme.font.m};
                        height: 2rem;
                        padding-left: 0.5rem;
                        padding-right: 0.5rem;

                        .fa-slash {
                            background-color: transparent;
                            -webkit-transform: rotate(90deg);
                            -moz-transform: rotate(90deg);
                            -ms-transform: rotate(90deg);
                            -o-transform: rotate(90deg);
                            transform: rotate(90deg);
                        }


                    }


                }
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



/*
                button {
                    background-color: ${theme.colors.medium};
                    border: ${theme.colors.primary};

                }

                a {
                    color: ${theme.colors.primary};
                }

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
*/


/*
            .next_prev {
                display: flex;
                padding: 3rem 0;

                button, span {
                    background-color: white;
                    color: gray;
                    border-radius: 0;
                    margin: 0;
                    border:0;
                   color:  #9B9B9B;
                    padding: 1rem;
                }

                button:nth-of-type(2){
                    //padding:0;

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


        }*/


    `;
    return [style];
}
