import {css} from '@emotion/react';

export const footer_styles = (theme) => {
    const style = css`

        padding: 5rem 2rem;



        .contact {

            padding: 0 2rem;
            flex-direction: column;
            justify-content: flex-end;
            vertical-align: middle;




             img {

                filter: invert(100%);
                padding-right: 0.5rem;
            }

            .phone{
                display: flex;
                align-items: center;
                margin:1rem 0;
            }
        }

        .social {
            display: flex;
            margin:1rem 0;
            img {

                filter: invert(0%);
                padding-right: 2rem;
            }

        }
    `;

    return [style];
}
