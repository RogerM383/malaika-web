import {css} from '@emotion/react';

export const contacta_styles = (theme) => {
    const style = css`

        font-size: ${theme.font.m};
        .block1 {
            padding: 7.5rem ${theme.container.horizontal_padding};

            .title {

                font-family: ${theme.font.didot};
                font-size: ${theme.font.h3};
                padding-bottom: ${theme.container.vertical_padding};
                };

            }


        input{
            border: 1px solid ${theme.colors.light_gray};
        }
        button{
            padding-left: 1rem;
            padding-right: 1rem;
        }
        textarea{
            border: 1px solid ${theme.colors.light_gray};
            padding: 1rem;
        }





        ${theme.mq('tablet-landscape')} {

        }


    `;

    return [style];
}



