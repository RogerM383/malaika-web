import {css} from '@emotion/react';

export const item_blog_thumbnail = (theme) => {
    const style = css`

        cursor:pointer;

        img{
            width: 100px;
            height: 100%;
        }

        span{
            display: block;
        }


    `;

    return [style];
}
