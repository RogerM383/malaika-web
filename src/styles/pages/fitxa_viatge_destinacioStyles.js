import {css} from '@emotion/react';

export const viatge_destinacio_fitxa = (theme) => {
    const style = css`

      .block1 {

        padding: 5rem 0;

        .column:first-of-type {
          border-right: 0;
          padding-right: 3rem;
        }

        .column:nth-of-type(2) {
          display: flex;
          justify-content: start;
          padding-top: 10rem;

          @media(min-width: 40rem){
            padding-top: 0;
          }



          .plane {
            margin: 10rem 0;
          }

        }

        li{
          list-style: none;
        }


        @media (min-width: 40.0rem) {

          .column:first-of-type {
            border-right: 1px solid black;
          }

          .column:nth-of-type(2) {
            justify-content: center;
          }
        }


      }

      .block2 {
        background: linear-gradient(90deg, #D8D8D8 50%, #F1F1F1 50%);
        padding: 2rem;
        margin: 4rem 0;

        > .container {
          display: flex;

          > .columna {
            flex: 0 0 50%;
            padding: 2rem 3rem;

            :first-child{
              padding: 3rem 3rem 3rem 0;
            }
            :nth-of-type(2){
              padding: 3rem ;
            }

          }


        }
      }


      .block3 {
        background-color: #F8F8F8;
        padding: 8rem 0;

        > .text {
          padding-top: 4rem;
          text-align: center;
        }
      }



    `;

    return [style];
}



