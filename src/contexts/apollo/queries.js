import {gql} from "@apollo/client";

export const GET_PAGES = gql`
    query MyQuery($cn: String!) {
        pages(where: {categoryName: $cn}) {
            nodes {
                title
                uri
                status
                slug
                id
                content
                categories {
                    nodes {
                        id
                        name
                        slug
                    }
                }
            }
        }
    }

`;

export const GET_MENU_BY_NAME = gql`
    query getMenuByName ($name: ID!, $first: Int) {
        menu(id: $name, idType: NAME) {
            id
            name
            slug
            menuItems(first: $first) {
                nodes {
                    path
                    parentId
                    order
                    label
                    id
                }
            }
        }
    }
`;

export const GET_POSTS = gql`
    query getPosts($last: Int) {
        posts(last: $last) {
            nodes {
                date
                content
                id
                modified
                postId
                slug
                title
                uri
                featuredImage {
                    node {
                        altText
                        mediaItemUrl
                    }
                }
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
            }
        }
    }
`;

export const GET_POST_BY_SLUG = gql`
    query getPostBySLug($slug: String!) {
        postBy(slug: $slug) {
            content
            date
            slug
            title
            uri
            modified
            featuredImage {
                node {
                    altText
                    mediaItemUrl
                }
            }
        }
    }
`;

