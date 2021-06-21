import {css} from '@emotion/react';

export const blog_article_styles = (theme) => {
    const style = css`





      .block_text {
        padding-top: ${theme.container.vertical_padding};

        .notice{
          .title{
            font-size: ${theme.font.l};
            font-weight: ${theme.font.bold};
            font-family: ${theme.font.didot};
          }

          .content{
            font-size: ${theme.font.s};
          }
            img{

                object-fit: contain;
                max-height: 80vh;
                margin-bottom:2rem ;
                display: block;

            }
        }




      }

      .block_text {
        :after {
          display: block;
          content: "";
          width: 100%;
          border: 1px solid lightgray;
          bottom: 0;
          margin-top: 8rem;

        }
      }
/*



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


      font-size: ${theme.font.s};
      line-height: 1.6;

      img {

        width: 100%;
        display: block;
        margin: 0 auto;
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

*/


    `;


    return [style];
}



