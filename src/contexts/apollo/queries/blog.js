import {gql} from "@apollo/client";


export const GET_BLOG_ENTRYS= gql`
    query getBlogEntrys($where:LanguageCodeFilterEnum) {
        posts(where:{language:$where}) {
            nodes {
                excerpt
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
            title
            slug
            content
            featuredImage {
                node {
                    mediaItemUrl
                }
            }

        }
    }
`;


