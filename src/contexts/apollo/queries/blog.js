import {gql} from "@apollo/client";


export const GET_BLOG_ENTRYS= gql`
    query getBlogEntrys {
        posts {
            nodes {
                content
                title
                slug
                featuredImage {
                    node {
                        mediaItemUrl
                    }
                }
                date
            }
        }
    }
`;

export const GET_BLOG_ENTRY_BY_SLUG= gql`
    query getBlogEntryBySlug ($slug:String){
        postBy(slug:$slug) {
            date
            featuredImage {
                node {
                    mediaItemUrl
                }
            }
            title
            slug
            content
        }
    }
`;


