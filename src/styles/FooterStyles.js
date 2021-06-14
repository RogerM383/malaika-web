import {css} from '@emotion/react';

export const footer_styles = (theme) => {
    const style = css`

          padding: 2rem ;
         font-size: ${theme.font.xs};


      .info_contact{
        font-weight: ${theme.font.medium};
        font-size:0.9rem;
      }
        .contact {

            flex-direction: column;
            justify-content: flex-end;
            vertical-align: middle;

             img {

                filter: invert(100%);
                padding-right: 0.5rem;
            }

            .phone{
                display: flex;
                align-items: center;
                margin:1rem 0;
            }
        }

        .social {
            display: flex;
            margin:1rem 0;
            img {

                filter: invert(0%);
                padding-right: 2rem;
            }

        }

        ${theme.mq('tablet-portrait')} {
            padding: 5rem ${theme.container.horizontal_padding};
        }




    `;

    return [style];
}
