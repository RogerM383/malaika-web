import {css} from '@emotion/react';

export const blog_article_styles = (theme) => {
    const style = css`


      font-size: ${theme.font.s};
      font-family: 'Sofia', serif;
      line-height: 1.6;

      img {

        width: 100%;
        display: block;
        margin: 0 auto;
      }


      .block_text {
        padding-top: ${theme.container.vertical_padding};


        .doble_image {
          padding-bottom: ${theme.container.vertical_padding};
          padding-top: ${theme.container.vertical_padding};
        }


        .border_top {
          border-top: 2px solid black;
        }

        .text_border {
          font-size: 0.9rem;

        }


      }

      .steps_block {
        .step {
          font-size: 0.9rem;
        }
      }

      .video_blog {
        padding-bottom: ${theme.container.vertical_padding};
        padding-top: ${theme.container.vertical_padding};


      }

      .last_block {
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



