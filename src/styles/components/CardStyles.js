import {css} from '@emotion/react';

export const card_viatge_autor_small = (theme) => {
    const style = css`

        box-shadow: 0px 1px 4px -1px RGBA(0, 0, 0, .20);
        padding: 0;
        cursor: pointer;
        display: flex;
        flex-direction: column;
       height: 100%;
        justify-content: space-between;

          span{
            display: block;
          }

            &:last-of-type {
              margin-bottom: 2rem;
            }

        .card-text {

          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 1rem 1rem 0 1rem;
          height: 100%;

          .card-title {
            flex: 10;
            font-family: ${theme.font.didot};
            font-weight: ${theme.font.bold};
            font-size: 1.1rem;
            margin-bottom: 1rem;
            margin-top: auto;
          }

          .card-data {
            flex: 1;
            font-family: ${theme.font.quicksand};
            font-weight: ${theme.font.medium};
            font-size: ${theme.font.sm};
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 1.3rem;
            margin-top: auto;

            img {
              margin-right: 1rem;
              width: 1.2rem;
              height: 1.2rem;
            }
          }

          .more-info {
            flex: 1;
            font-family: ${theme.font.didot};
            font-weight: ${theme.font.medium};
            font-size: ${theme.font.sm};
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-bottom: 1.3rem;
            margin-top: auto;
            height: 100%;
          }

      }
        .photo{
          height: 250px;
          object-fit: cover;
        }
    `;

    return [style];
}

export const card_viatge_autor = (theme) => {
    const style = css`

        border-bottom: 1px solid lightgray;
        padding-left: 0;
        cursor: pointer;
        margin-bottom: 2rem;
        width: 100%;

        & > div {

        }

        &.cva:last-of-type {
            margin-bottom: 0;
        }

        .photo-wrapper {
            //margin-bottom: 2rem;
            .photo {
              max-width: 100%;
              display: block;
              margin-bottom: 2rem;
            }
        }

        .card-info {
            margin-bottom: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .title {
                font-size: ${theme.font.l};
                font-weight: ${theme.font.bold};
                font-family: ${theme.font.didot};
                margin-bottom: 2rem;
                display: block;
            }
            .timetable {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                padding: 0;
                margin-bottom: 2rem;

                .calendar {
                    display: flex;
                    img {
                        margin-right: 1.5rem;
                    }
                    .days {
                        font-size: ${theme.font.m};
                        font-weight: ${theme.font.bold};
                        justify-self: center;
                        flex: 1;
                    }
                }
                .plane {
                    display: flex;
                    flex-direction: row;

                    & > div {
                        margin-right: 1rem;
                        img {

                        }
                    }
                    ul {
                        li {
                            font-size: ${theme.font.sm};
                            font-weight: ${theme.font.medium};
                            white-space: nowrap;
                        }
                    }


                }
            }

            .more_info {
                display: flex;
                flex-direction: column;

                .author {
                    font-size: ${theme.font.sm};
                    font-weight: ${theme.font.medium};
                    font-family: ${theme.font.quicksand};
                    margin-bottom: 1rem;
                }
                .button {
                    font-size: ${theme.font.sm};
                    font-weight: ${theme.font.bold};
                    font-family: ${theme.font.didot};
                }
            }
        }

        ${theme.mq('tablet-landscape')} {



            & > div {
                max-width: 80%;
                display: flex;
            }

            .photo-wrapper {
                flex: 2;
                .photo {

                }
            }

            .card-info {
                flex: 3;
                padding: 0 2rem;
                .title {

                }
                .timetable {


                    .calendar {

                        img {

                        }
                        .days {

                        }
                    }
                    .plane {


                        & > div {

                            img {

                            }
                        }
                        ul {
                            li {

                            }
                        }
                    }
                }
                .more_info {


                    .author {

                    }
                    .button {

                    }
                }
            }
        }

        /*.photo {

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
        }*/


    `;

    return [style];
}

export const card_discover = (theme) => {
    const style = css`

        width: 100%;

        .text-info {
            margin: 0 0 2rem 0;
            padding: 0;
            display: flex;
            flex-direction: column;

            .title {
                margin-bottom: 2rem;
                font-family: ${theme.font.didot};
            }

            .text {
                font-size: ${theme.font.sm};
                a {
                    color: ${theme.colors.primary}
                }
            }
        }

        img {
            max-width: 100%;
            width: 100%;
        }

        ${theme.mq('tablet-landscape')} {
            width: 80%;
            .text-info {
                display: flex;
                flex-direction: row;

                .title {
                    flex: 2;
                    margin-bottom: 0;
                }

                .text {
                    flex: 3;
                    padding: 0 0 0 2rem;
                }
            }
        }
    `;

    return [style];
}

export const top_img_tagged_card = (theme) => {
    const style = css`

        border: 1px solid lightgray;
        padding: 0;
        box-shadow: 0 1px 50px rgba(0, 0, 0, .3);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .image_card {

          height: 250px;
          width: 100%;
          object-fit: cover;
        }

        .text {
            flex:2;
            padding: 1rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
            .title {
              height: 100%;
                font-family: ${theme.font.didot};
                font-weight: ${theme.font.medium};

                font-size: 0.9rem;
              margin-bottom: auto;
            }


            .tags {
                font-family: ${theme.font.quicksand};
                font-weight: ${theme.font.regular};
                font-size: ${theme.font.s};
                margin-bottom: 1rem;
                margin-top: 1rem;
                display:block;

            }

            .calendar {
                display: flex;
                flex-direction: row;
                align-items: center;
                font-family: ${theme.font.quicksand};
                font-size: ${theme.font.s};
                font-weight: ${theme.font.medium};
                margin-bottom: 1rem;

                > img{
                    margin-right: 1rem;
                }


            }

            .more_info {
                font-family: ${theme.font.didot};
                font-size: ${theme.font.s};
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-bottom: auto;
                span {
                    margin-left: .5rem;
                }
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
        padding-left: 2rem;
        text-align: justify;

             .etapa_title{

                font-size:${theme.font.l};
                font-weight:${theme.font.bold};
            }

          .etapa_ubicacio{

              font-weight:${theme.font.medium};
              font-size:${theme.font.m};
              text-align: left;
          }

        :after {
            content: "";
            position: absolute;
            top: 15px;
            left: 0px;
            border-left: 1px solid black;
            height: 105%;
            z-index: 1;
        }

        :before {
            content: '';
            position: absolute;
            left: -7px;
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
        font-size: ${theme.font.s};
        cursor: pointer;
        margin-bottom: 4rem;

        .title_entry{
            font-size: ${theme.font.l};
            font-weight: ${theme.font.bold};
            font-family: ${theme.font.didot};

        }

      .link-more{
        display: none;
      }

            img {
                width: 100%;

            }

    `;

    return [style];
}

export const card_blog_thumbnail = (theme) => {
    const style = css`
        cursor: pointer;

        margin-bottom: 0.5rem;
        .title_entry{
            font-family:${theme.font.didot}; ;
            font-size: ${theme.font.sm};
            font-weight: ${theme.font.bold};
            margin-bottom: 0.5rem;
            display: block;
        }
        .date{
            display: block;
            font-size: ${theme.font.s};
            color:${theme.colors.text_gray}
        }

        img {
            width: 100%;

        }



    `;

    return [style];
}
