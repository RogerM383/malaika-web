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

        .block2{
            margin-bottom: 4rem;
        }

        .block3 {
            background-color: #F8F8F8;
            padding: 4rem 0;

            .title{
                font-weight: ${theme.font.bold} ;
                font-size:${theme.font.h3};
            }

        }


        ${theme.mq('tablet-portrait')} {
            .block1 {
                .ant-col:first-of-type{
                    border-right:1px solid black ;
                }
            }


        }



    `;

    return [style];
}



