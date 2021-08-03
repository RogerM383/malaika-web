import {css} from '@emotion/react';

export const destinacions_styles = (theme) => {
    const style = css`
        .block1 {
            padding: 5rem ${theme.container.horizontal_padding} 0;



            .title {
                p{
                    font-family: ${theme.font.didot};
                    font-weight: ${theme.font.medium};
                    font-size:${theme.font.h5};
                }

                display: flex;
                flex-direction: column;
                margin-bottom: 2rem;



            }

          :after {
            display: block;
            content: "";
            width: 100%;
            border: 1px solid lightgray;
            bottom: 0;
            margin-top: 8rem;

          }
        }
    `;

    return [style];
}



