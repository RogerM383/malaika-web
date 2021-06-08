import {css} from '@emotion/react';

export const asia_styles = (theme) => {
    const style = css`
        .block1 {
            padding: 5rem ${theme.container.horizontal_padding} 0;
            
            .title {
                font-family: ${theme.font.didot};
                font-weight: ${theme.font.medium};
                display: flex;
                flex-direction: column;
                margin-bottom: 2rem;
            }
        }
    `;

    return [style];
}



