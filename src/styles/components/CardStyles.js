import {css} from '@emotion/react';

export const card_home_1 = (theme) => {
    const style = css`

        border: 1px solid lightgray;
        padding: 0;

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

export const card_viatge = (theme) => {
    const style = css`


        border-bottom: 1px solid lightgray;
        padding: 0;

       .row{
        max-width: 70%;
      }

       .content {
           cursor:pointer;
         .column > img{
           height: 100%;
          object-fit: cover;
         }
            .timetable {
                margin-top: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;



                 .plane {
                    display: flex;
                    justify-content: start;


                     ul {
                         list-style-type:none;
                         margin: 0;
                     }
                     img {

                    }
                }


            }

        }

    `;

    return [style];
}

export const card_discover = (theme) => {
    const style = css`

        width: 70%;

      .inner .row{
        margin:2rem 0;
        padding:0;
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
          > .text{
            padding: 1rem;
          }
            > img {
              min-height:300px;
              width: 100%;
              object-fit: cover;
            }
        }
    `;

    return [style];
}


export const card_itinerari = (theme) => {
    const style = css`
    position:relative;

        .inner:after {
          content:"";
          position: absolute;
          top:15px;
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
        border:1px solid black; z-index: 2;
      }

    `;

    return [style];
}

export const card_itinerari_finish = (theme) => {
    const style = css`

      position:relative;

      .inner:before {
        content: '';
        position: absolute;
        left: -25px;
        width: 15px;
        height: 15px;
        border-radius: 7.5px;
        background-color: white;
        border:1px solid black; z-index: 2;
      }

    `;

    return [style];
}


export const card_blog = (theme) => {
    const style = css`

        cursor: pointer;
        .inner{
            img {
                width: 100%;
            }
            .content{

            }
        }


    `;

    return [style];
}


