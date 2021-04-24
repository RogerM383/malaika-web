import {css} from '@emotion/react';

export const viatge_autor_style = (theme) => {
    const style = css`

    .info{
        width: 65%;
        margin:8rem 0;
    }

        .block2{
            margin-top: 7rem;
            background-color:#F8F8F8 ;
            padding: 3rem 0;
        }

        .next_prev{
            button{
                background-color: white;
                color:gray;
                border-radius: 0;
            }
        }

    `;

    return [style];
}



