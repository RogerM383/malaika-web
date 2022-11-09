import {css} from '@emotion/react';

export const animalsInvisiblesStyles = (theme) => {
    const style = css`

        .block1 {

            padding-bottom: 4.5rem;

            .logo_animals{
                display: block;
              max-height: 250px;
              max-width: 250px;
                margin-top: 1rem;
                margin-bottom: 4rem;
            }

           .title {
                    font-family: ${theme.font.didot};
                    font-weight: ${theme.font.medium};
                    margin-bottom: 4.4rem;
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



