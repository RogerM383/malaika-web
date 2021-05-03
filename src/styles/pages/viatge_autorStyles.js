import {css} from '@emotion/react';

export const viatge_autor_style = (theme) => {
    const style = css`

      .info {
        width: 100%;
        margin: 8rem 0;

        @media(min-width: 40rem){
          width: 65%;
        }
      }

      .block2 {
        margin-top: 7rem;
        background-color: #F8F8F8;
        padding: 8rem 0;
      }



    `;

    return [style];
}



