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
          .ant-col:first-of-type{
              padding-bottom: 4rem;
            border: none;
            font-size:${theme.font.l} ;
            .title{
              font-size:${theme.font.h2} ;
              font-weight:${theme.bold} ;
              padding-bottom: 4rem;
            }


          }

          .ant-col:nth-of-type(2){
              padding-left:2rem;
            font-size:0.9rem ;
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

        .block2 {
          margin-bottom: 4rem;
            .title{
                font-weight:${theme.font.bold};
                font-size: ${theme.font.h5};
            }
        }


        .block3 {
            padding-bottom: 4rem;


            .title{
                font-weight:${theme.font.bold};
                font-size: ${theme.font.h3};
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
                .ant-col:first-of-type{
                    border-right:1px solid black ;
                }
            }


        }


}

    `;

    return [style];
}



