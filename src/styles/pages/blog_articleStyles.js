import {css} from '@emotion/react';

export const blog_article_styles = (theme) => {
    const style = css`

        .video_blog {
            img {
                object-fit: cover;
                width: 100%;
            }
        }

        > .content {
            padding: 10rem;
            font-size: 14px;
            font-family: 'Sofia', serif;
            line-height: 1.6;

            .border_top {

                flex: 0 0 20%;

                > div {
                    border-top: 1px solid black;
                    margin: 0 2rem;
                }
            }

            .doble_image {
                padding: 5rem 0;
            }

            .steps_block {
                padding: 3rem 0;


                .steps {
                    padding: 2rem 0;
                }
            }



    `;

    return [style];
}



