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
            .column:first-of-type{
                font-size: 34px;
                font-weight: bold;
                padding: 5rem 0;
                max-width: 100%;
            }
        }


        @media (min-width: 40.0rem) {
            .block2 {
                .column:first-of-type {
                    max-width: 33%;
                }
            }
        }


    `;

    return [style];
}



