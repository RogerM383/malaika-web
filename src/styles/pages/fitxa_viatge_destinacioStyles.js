import {css} from '@emotion/react';

export const viatge_destinacio_fitxa = (theme) => {
    const style = css`


        .breadcrumb{
            color: lightgray;
            margin: 2rem 0;
            padding-bottom: 4rem;
            padding-top: 2rem;
        }

      .block1 {
        padding-bottom: 4rem;
        .left_column{
          padding-bottom: 4rem;
          border: none;
          font-size:${theme.font.l} ;
          .title{
            font-size:${theme.font.h2} ;
            font-weight:${theme.bold} ;
            font-family:${theme.font.didot} ;
            padding-bottom: 4rem;
          }
          .content{
            margin-bottom: 4rem;

          }

          button{
            padding-left: 1rem;
            padding-right: 1rem;
            border-radius: 8px;
            font-size:1.2rem ;
          }

        }

        .right_column{
          padding-left:2rem;
          p{
            font-size:0.9rem ;
          }

          .plane{
            p{
              font-size:0.8rem ;
            }
          }


          img.mapa{
            object-fit: contain;
            width: 80%;
            max-height: 400px;
            margin:0 auto;
            display: block;
          }

          > div{
            margin-bottom: 2.5rem;
          }
        }


      }

      .block2{
            margin-bottom: 4rem;
        }

        .block3 {
            background-color: #F8F8F8;
            padding: 4rem 0;

            p.title{
                font-weight: ${theme.font.bold} ;
                font-size:${theme.font.h3};
                font-family:${theme.font.didot};
            }

        }


        ${theme.mq('tablet-portrait')} {
          .block1 {
            .left_column{
              border-right:1px solid black ;
            }
          }


        }



    `;

    return [style];
}



