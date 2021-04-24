import {css} from '@emotion/react';

export const nosaltres_styles = (theme) => {
    const style = css`

        .block1 {
            padding: 5em;
            margin-bottom: 2rem;
            display: flex;
            flex-wrap: wrap;

            .item{
                flex:1 0 300px;
            }
            & .row{

            }
            & .column{
               //flex: 1 0 300px;
            }

            & .title{
              margin:0;
            }
        }

        .block2 {

            background-color: #F8F8F8;
            .column-33{
                font-size: 34px;
                font-weight: bold;
                padding: 5rem 0;
            }
        }


    `;

    return [style];
}



