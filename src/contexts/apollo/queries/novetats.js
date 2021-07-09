import {gql} from "@apollo/client";

export const GET_NOVETATS = gql`
    query getNovetats {
        novetats {
            nodes {
                content
                title
                uri
                slug
            }
        }
    }
`;
