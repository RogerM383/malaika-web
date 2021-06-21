import {css} from '@emotion/react';

export const bicolor_style = (theme) => {
    const style = css`
        background: linear-gradient(90deg, #D8D8D8 50%, #F1F1F1 50%);

    > div{
        margin: auto;
        max-width: ${theme.container.max_width};
        padding: 0;

    }

        .inclou{
            padding:2rem 0;
        }




        .left{
            background-color: #D8D8D8;
            padding-left: 2rem;
        }

        .right{
            background-color: #F1F1F1;
            padding-left: 2rem;
        }




      ${theme.mq('tablet-portrait')} {

        .left{
          padding-left: 4rem;
        }

        .right{
          padding-left: 4rem;
        }


      }





/*     & > div {
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            > .columna {
                flex: 0 0 50%;
                padding: 1rem 1rem;
            }
        }

        ${theme.mq('tablet-portrait')} {

                & > div {
                    flex-direction: row;
                }
                background: linear-gradient(90deg, #D8D8D8 50%, #F1F1F1 50%);

        }*/


    `;

    return [style];
}

