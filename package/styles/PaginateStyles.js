import {css} from '@emotion/react';

export const main = (theme) => {
    const style = css`

      .Pagination{

      }

      .pagination{}

      .page-item{
        display: inline;
        padding: 1rem;
        border:1px solid ${theme.colors.primary};
        margin: 0.5rem;

        :hover{
          background-color:${theme.colors.primary};
        }
        :hover > .page-link{
          color: white;
        }
      }


    `;

    return [style];
};
