import {css} from '@emotion/react';

export const card_home_1 = (theme) => {
    const style = css`

        box-shadow: 0px 1px 4px -1px #24194D;
        padding: 0;
        cursor: pointer;

        .content {

            .text {
                padding: 1rem;

                span:nth-of-type(2) {
                    margin: 1.5rem 0;
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
        cursor: pointer;

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

        width: 90%;

        border-bottom: 1px solid lightgray;
        padding-left: 0;
        cursor: pointer;
        padding-bottom: 1rem;


        .photo {

            height: 100%;
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 100%;
            object-fit: cover;

        }

        .row {
            max-width: 100%;
            @media (min-width: 60rem) {
                max-width: 100%;
            }


            .column {

                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        }

        .timetable {
            padding-top: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-direction: column;

            .plane {
                display: flex;
                justify-content: start;
                padding: 1rem 0;


                .days {
                    margin-top: auto;
                    margin-bottom: auto;
                }

                ul {
                    list-style-type: none;
                    margin: 0;
                }

                img {
                    margin-right: 2rem;
                }
            }

            @media (min-width: 65rem) {
                flex-direction: row;
                .plane {
                    padding: 0
                }
            }


        }


        .more_info {

            span {
                padding: 1rem 0;
            }
        }


    `;

    return [style];
}

export const card_discover = (theme) => {
    const style = css`

        width: 70%;

        .row {
            margin: 2rem 0;
            padding: 0;


            .title {
                flex: 1 1 35%;
            }

            .text {

            }
        }
    `;

    return [style];
}


export const card_destinacio = (theme) => {
    const style = css`
        border: 1px solid lightgray;
        padding: 0;
        box-shadow: 0 1px 50px rgba(0, 0, 0, .3);
        cursor: pointer;

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

export const card_fitxa_destinacio = (theme) => {
    const style = css`
        //border: 1px solid lightgray;
        padding: 0;
        box-shadow: 0 1px 50px rgba(0, 0, 0, .3);

        .content {
            > .text {
                padding: 1rem;


                span {
                    line-height: 2rem;
                }

               >  p:first-of-type {
                    color: ${theme.colors.light_gray};
                }
            }

            > img {
                min-height: 300px;
                width: 100%;
                object-fit: cover;
            }

            .calendar {
                display: flex;
                align-items: baseline;

                p {
                    margin-left: 1rem;
                    margin-top: auto;
                    margin-bottom: auto;
                }

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
            top: 20px;
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

        li {
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


        li {
            list-style: none;
        }

    `;

    return [style];
}


export const card_blog = (theme) => {
    const style = css`

        cursor: pointer;

            img {
                width: 100%;

            }





    `;

    return [style];
}


