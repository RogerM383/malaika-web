import {css} from '@emotion/react';

export const footer_styles = (theme) => {
    const style = css`

        padding-top: 2rem ;
        padding-bottom: 1rem ;

        font-size: ${theme.font.xs};


      .avasa_logo{
        display: block;
        max-height: 100px;
        padding: 0 5px 5px 5px;

      }



        .info_contact {
            font-weight: ${theme.font.medium};
            font-size: 0.9rem;
        }

        .contact {

            flex-direction: column;
            justify-content: flex-end;
            vertical-align: middle;
            color:#4A4A4A;
            .address{
                display: block;
                font-size:0.65rem ;
               :last-of-type{
                   margin-bottom: 1.5rem;
               }


            }

            img {

                filter: invert(100%);
                padding-right: 0.5rem;
            }

            a{
                color:#4A90E2;
            }

            .phone {
                display: flex;
                align-items: center;
                margin: 1rem 0;
                font-size:0.6rem ;
            }



        }

        .last{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          // height: 100%;

            .politicas{
            margin-bottom: 1rem;
               a{
                   color:#4A4A4A;
               }
            }
        }

        .social {
            display: flex;
            margin: 1rem 0;

          img{
            max-height: 1.5rem;
          }

            img {

                filter: invert(0%);
                padding-right: 2rem;
            }

        }

        ${theme.mq('tablet-portrait')} {
            padding-top: 5rem ;
        }




    `;

    return [style];
}
