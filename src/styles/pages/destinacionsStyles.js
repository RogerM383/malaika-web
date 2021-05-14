import {css} from '@emotion/react';

export const destinacio_style = (theme) => {
    const style = css`

        .block1{
            margin-top: ${theme.container.big_screen_top_padding};
            margin-bottom:${theme.container.big_screen_top_padding};

            .title {

                margin-bottom:${theme.container.big_screen_top_padding};
            }
        }





    `;

    return [style];
}




