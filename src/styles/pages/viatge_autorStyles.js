import {css} from '@emotion/react';

export const viatge_autor_style = (theme) => {
    const style = css`
        
        .container {
            padding: 8.5rem ${theme.container.horizontal_padding} 0;
            margin-bottom: 3rem;
            .info {
                width: 100%;
                margin: 0 0 5rem;
                
                p {
                    font-size: ${theme.font.m};
                    font-weight: ${theme.font.bold};
                    margin-bottom: 2rem;
                }
            }
        }
        
        .block2 {
           
            background-color: #F8F8F8;
            padding: 4rem 0;

            & > div {
                padding: 0 ${theme.container.horizontal_padding};
            }
            
            .discover {
                color: ${theme.colors.light_gray};
                font-size: ${theme.font.sm};
                font-weight: ${theme.font.bold};
                margin-bottom: 2rem;
            }
            
            .slick-arrow {
                display: none;
            }
        }
        
        ${theme.mq('tablet-portrait')} {
            .container {
                .info {
                    width: 80%;
                }
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



