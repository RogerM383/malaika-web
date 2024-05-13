import {gql} from "@apollo/client";


export const GET_NEWSLETTER_ENTRYS= gql`
    query getNewslettersEntrys {
        newsletters {
            nodes {
                title
                id
                guid
                date
                slug
                news_pdf {
                    pdf {
                        sourceUrl
                        mediaItemUrl
                        altText
                        title
                        uri
                    }
                }
            }
        }
    }
`;
