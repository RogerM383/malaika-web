import {css} from '@emotion/react';

export const header_inici_styles = (theme) => {
    const style = css`

        position: relative;

        .topRow{
            padding:2rem;
            position: absolute;
            top:0;
            z-index:200;
            width: 100%;
            color:white;
            font-size: ${theme.font.s};

            .contact, .language{
                margin-top: 1rem;
                .icons{
                    display:none;
                }
            }

       /*     img{
                max-width: 6rem;
            }*/
            a{
                color:white;

            }

            a.phone{
                padding-left: 1rem;
                padding-right: 1rem;
            }

            .info{

            }


        }

        .title{

            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index:200;
            width: 75%;
            font-size: ${theme.font.h1};
            font-family: ${theme.font.didot};
            font-weight: ${theme.font.bold};
            color: ${theme.colors.white};


        }

        .arrows{
            padding:0 2rem;
            position: absolute;
            display: flex;
            justify-content: space-between;
            top: 50%;
            transform: translateY(-50%);
            z-index:200;
            width: 100%;
            font-size: ${theme.font.m};
            font-family: ${theme.font.didot};
            font-weight: ${theme.font.bold};
            color: ${theme.colors.white};
        }


        ${theme.mq('tablet-portrait')} {
         .topRow{
        /*     img{
                 max-width: 10rem;
             }*/
             .contact, .language{
                 margin-top: 0;
                 .icons{
                     display: inline-block;
                 }
             }
         }
        }


    `;

    return [style];
}
