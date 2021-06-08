import {css} from '@emotion/react';

export const destinacio_style = (theme) => {
    const style = css`

        .block1{
            padding: 5.1rem ${theme.container.horizontal_padding} 0;
            margin-bottom: 11.5rem;
            
            .title {
                margin-bottom:${theme.container.big_screen_top_padding};
            }
            
            #viatges {
                border-bottom: 1px solid ${theme.colors.dark_gray};
            }
        }





    `;

    return [style];
}




