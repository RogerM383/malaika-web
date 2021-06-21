import {css} from '@emotion/react';

export const viatge_autor_fitxa = (theme) => {
    const style = css`
      padding-bottom: 4rem;
      font-size: 1rem;

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
              padding-right: 0;
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
              padding-left: 0;
               div:first-of-type{
                  font-weight: ${theme.font.bold};
                   span{
                       display: block;
                   }
              }
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
              //margin:0 auto;
              display: block;
            }

           > div{
               margin-bottom: 2.5rem;
           }
          }


        }

        .block2 {
          margin-bottom: 4rem;
            .title{
                font-weight:${theme.font.bold};
                font-size: ${theme.font.h5};
                font-family: ${theme.font.didot};
            }

        }


        .block3 {
            padding-bottom: ${theme.container.vertical_padding};
          margin-left: 1rem;
          //  padding-left:1rem;
            //margin-left: 1rem ;


            .title{
                font-weight:${theme.font.bold};
                font-size: ${theme.font.h3};
                font-family: ${theme.font.didot};
              padding-bottom: ${theme.container.vertical_padding};
            }

            :after {
                display: block;
                content: "";
                width: 100%;
                border: 1px solid lightgray;
                bottom: 0;
                margin-top: 8rem;

            }


        }


        ${theme.mq('tablet-portrait')} {
            .block1 {
                .left_column{
                    border-right:1px solid black ;
                    padding-right: 2rem;
                }
                .right_column{
                    padding-left: 4rem;
                }
            }

          .block2{
            .columna:nth-of-type(2){
              padding-left: 3rem;
            }
          }




        }


}

    `;

    return [style];
}



