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
            
            .slick-arrow {
                display: none;
            }
        }
        ${theme.mq('tablet-portrait')} {
            .info {
                width: 65%;
            }
        }
    `;
    return [style];
}

export const nav_buttons = (theme) => {
    const style = css`
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: ${theme.container.big_screen_top_padding};
        & > button {
            height: 3rem;
            line-height: 3rem;  
            padding-left: .7rem;
            padding-right: 1rem;
            &.next {
              margin-left: auto;
              padding-left: 1rem;
              padding-right: .7rem;
            }          
        }
    `;
    return [style];
};



