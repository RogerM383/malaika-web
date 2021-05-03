import {css} from '@emotion/react';

export const card_home_1 = (theme) => {
    const style = css`

        box-shadow: 0px 1px 4px -1px #24194D;
        padding: 0;
        cursor: pointer;

        .content {
            // text-align: center;

            span {
                margin: 1rem 0;
            }

            .text {
                padding: 2rem;

                span:nth-of-type(2) {
                    margin: 2rem 0;
                }

                img {
                    width: 24px;
                }
            }

            > img {
                width: 100%;
            }
        }
    `;

    return [style];
}


export const card_home_2 = (theme) => {
    const style = css`

        border: 1px solid lightgray;
        padding: 0;
        box-shadow: 0 1px 50px rgba(0, 0, 0, .3);

        .content {
            // text-align: center;
            .text {
                padding: 1rem;
            }

            > img {
                width: 100%;
            }
        }

    `;

    return [style];
}

export const card_viatge_autor = (theme) => {
    const style = css`


        border-bottom: 1px solid lightgray;
        padding: 0;


        .content {
            cursor: pointer;

            .row {
                max-width: 100%;
                @media (min-width: 60rem) {
                    max-width: 70%;
                }


                .column{

                    padding-left:3rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
            }


            .column > img {
                height: 100%;
                object-fit: cover;
                display: block;
                margin-left: auto;
                margin-right: auto;
                width: 100%;
            }

            .timetable {
                padding: 2rem 0;
                margin-top: 1rem;


                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                flex-direction: column;

                .plane {
                    display: flex;
                    justify-content: start;
                    padding:1rem 0;


                    ul {
                        list-style-type: none;
                        margin: 0;
                    }

                    img {
                        margin-right: 2rem;
                    }
                }

                @media(min-width: 65rem){
                    flex-direction: row;
                    .plane {
                        padding:0
                    }
                }


            }


            .more_info{
             padding:2rem 0;
                span{
                    padding: 1rem 0;
                }
            }
        }

    `;

    return [style];
}

export const card_discover = (theme) => {
    const style = css`

        width: 70%;

        .inner .row {
            margin: 2rem 0;
            padding: 0;
        }
    `;

    return [style];
}


export const card_destinacio = (theme) => {
    const style = css`
        border: 1px solid lightgray;
        padding: 0;
        box-shadow: 0 1px 50px rgba(0, 0, 0, .3);

        .content {
            cursor: pointer;
            // text-align: center;
            .text {
                padding: 1rem;

                p:nth-of-type(2){
                    color:#9B9B9B;
                }

                .arrow{
                    margin-left: 2rem;
                }
            }

            > img {
                width: 100%;
            }
        }
    `;

    return [style];
}

export const card_fitxa_destinacio = (theme) => {
    const style = css`
        border: 1px solid lightgray;
        padding: 0;
        box-shadow: 0 1px 50px rgba(0, 0, 0, .3);

        .content {
            > .text {
                padding: 1rem;
            }

            > img {
                min-height: 300px;
                width: 100%;
                object-fit: cover;
            }
        }
    `;

    return [style];
}


export const card_itinerari = (theme) => {
    const style = css`
        position: relative;

        .inner:after {
            content: "";
            position: absolute;
            top: 15px;
            left: -18px;
            border-left: 1px solid black;
            height: 100%;
            z-index: 1;
        }

        .inner:before {
            content: '';
            position: absolute;
            left: -25px;
            width: 15px;
            height: 15px;
            border-radius: 7.5px;
            background-color: white;
            border: 1px solid black;
            z-index: 2;
        }

        li{
            list-style: none;
        }

    `;

    return [style];
}

export const card_itinerari_finish = (theme) => {
    const style = css`

        position: relative;

        .inner:before {
            content: '';
            position: absolute;
            left: -25px;
            width: 15px;
            height: 15px;
            border-radius: 7.5px;
            background-color: white;
            border: 1px solid black;
            z-index: 2;
        }

    `;

    return [style];
}


export const card_blog = (theme) => {
    const style = css`

        cursor: pointer;

        .inner {
            img {
                width: 100%;
            }

            .content {

            }
        }


    `;

    return [style];
}


