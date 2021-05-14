import {css} from '@emotion/react';

export const blog_styles = (theme) => {
    const style = css`


      .more{
        color:#4A4A4A;
      }
        .listBlock {
            padding: ${theme.container.mobile_screen_top_padding} 0;
            align-items: center;
        }

        .search_input {
            border: 0;
            border-bottom: 1px solid lightgray;
        }

        .column-66 {
            order: 2;
        }

        .column-33 {
            order: 1;
        }

        .recent{
            display:none;
        }

        @media (min-width: 40.0rem) {
            .recent{
                display:block;
            }

            .column-66 {
                order: 1;
            }

            .column-33 {
                order: 2;
            }

            .listBlock {
                align-items: start;
            }

        }

    `;

    return [style];
}



