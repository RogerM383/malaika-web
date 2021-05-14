import {css} from '@emotion/react';

export const viatge_autor_style = (theme) => {
    const style = css`

      .info {
        width: 100%;
        margin: ${theme.container.big_screen_top_padding} 0;


      }

      .block2 {
        margin-top: 7rem;
        background-color: #F8F8F8;
        padding: ${theme.container.big_screen_top_padding} 0;

          .discover{
              color: ${theme.colors.light_gray}
          }

      }

        ${theme.mq('tablet-portrait')} {
            .info{
                width: 65%;
            }
        }



    `;

    return [style];
}



