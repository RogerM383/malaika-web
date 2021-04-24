import {css} from '@emotion/react';

export const home_styles = (theme) => {
    const style = css`




      .block1{

        margin-bottom: 15rem;
        .alert {
          margin: 4rem 0;

          > p {
            margin-bottom: 1rem;
            font-size: 16px;

            > span{
              font-size: 18px;
            }
          }

        }

        .cita {
          max-width: 500px;
          margin: 4rem 0;

          p {
            font-weight: bold;
            font-size: 24px;
          }

        }

        .subtitle{
          font-size: 16px;
          max-width: 700px;
          margin: 4rem 0;
        }


      }


      .block2{
        margin-top:5rem;
        padding:2rem;
        background-color: #F8F8F8;

        > .title{
          margin:4rem 0;
        }



      }


    `;

    return [style];
}



