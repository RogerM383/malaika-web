import {css} from '@emotion/react';

export const blog_article_styles = (theme) => {
    const style = css`

        .video_blog {
            img {
                object-fit: cover;
                width: 100%;
            }
        }

         .block_text {

            margin-top: ${theme.container.big_screen_top_padding};
            font-size: 0.7rem;
            font-family: 'Sofia', serif;
            line-height: 1.6;

            .border_top {

                flex: 0 0 20%;

                > div {
                    border-top: 1px solid black;
                    margin: 0 2rem;
                }
            }


            .steps_block {
                margin-top: ${theme.container.mobile_screen_padding};
            }



    `;

    return [style];
}



