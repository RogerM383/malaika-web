import {css} from '@emotion/react';

export const header_inici_styles = (theme) => {
    const style = css`

        position: relative;

        .topRow{
            padding:2rem 0;
            position: absolute;
            top:0;
            z-index:200;
            width: 90%;
            color:white;
            font-size: ${theme.font.s};

            .contact, .language{
                white-space: nowrap;
                margin-top: 1rem;
                .phone{
                    padding:0 0.5rem;
                }


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
            transform: translateY(-50%) translateX(50%);
            right: 50%;
           // transform: translateX(50%);
            z-index:1;
           // width: 75%;
            font-size: ${theme.font.h1};
            font-family: ${theme.font.didot};
            font-weight: ${theme.font.bold};
            color: ${theme.colors.white};
            pointer-events: none;



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


        .slick-dots{
            padding-bottom: 7rem;
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

            .title{
                transform: translateY(-50%);
                right: initial;

            }
        }

        ${theme.mq(' mobile-landscape')} {
            .title{

                right: initial;
                transform: translateY(-50%);
            }
        }




    `;

    return [style];
}
