import {css} from '@emotion/react';

export const footer_styles = (theme) => {
    const style = css`

        padding: 5rem 2rem;
        .info {
            font-weight: 600;
            font-size: 14px;
        }

        .contact {
            font-size: 12px;
            padding: 2rem;
            flex-direction: column;
            justify-content: flex-end;
            vertical-align: middle;
            text-align: center;

            > p > img {

                filter: invert(100%);
                padding: 0 1rem
            }
        }

        .social {
            display: flex;
            justify-content: space-between;

        }
    `;

    return [style];
}
