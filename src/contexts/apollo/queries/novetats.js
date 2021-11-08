import {gql} from "@apollo/client";

export const GET_NOVETATS = gql`
    query getNovetats ($lang: LanguageCodeFilterEnum) {
        novetats (where: {language: $lang}) {
            edges {
                node {
                    date
                    content
                    title
                    uri
                    slug
                    language {
                        id
                        code
                    }
                }
            }
            
        }
    }
`;
/*nodes {
                content
                title
                uri
                slug
                language {
                    code
                }
            }*/
