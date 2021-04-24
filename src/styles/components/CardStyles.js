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

         .column-33 > img{
           height: 100%;
          object-fit: cover;
         }
            .timetable {
                display: flex;
                justify-content: space-between;



                 .plane {
                    display: flex;
                    justify-content: start;

                     ul {
                         list-style-type:none;
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

