import {css} from '@emotion/react';

export const bicolor_style = (theme) => {
    const style = css`



       /* background: linear-gradient(0deg, #D8D8D8 50%, #F1F1F1 50%);*/
/*        padding: ${theme.container.vertical_padding};
        margin: ${theme.container.vertical_padding} 0;*/

        .ant-col{
            padding: 2rem 0;
            width: 100%;
        }

        .ant-col:first-of-type{
            background-color: #D8D8D8 ;
        }

        .ant-col:nth-of-type(2){
            background-color: #F1F1F1 ;
        }
/*        & > div {
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

