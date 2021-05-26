import {gql} from "@apollo/client";

export const GET_PAGES = gql`
    query getPages($cn: String!) {
        pages(where: {categoryName: $cn}) {
            nodes {
                title
                slug
                id
                content
                status
                featuredImage {
                    node {
                        mediaItemUrl
                    }
                }
                databaseId
                uri
            }
        }
    }
`;

export const GET_PAGE_BY_URI = gql`
    query getPageByUri ($uri: String!) {
        pageBy(uri: $uri) {
            id
            title
            uri
            status
            slug
            featuredImage {
                node {
                    mediaItemUrl
                    altText
                }
            }
            content
            date
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

export const GET_VIATGES_AUTOR = gql`
    query geytVietagesAutor ($first: Int, $last: Int, $before: String, $after: String) {
        viatgesdautor(first: $first, last: $last, before: $before, after: $after) {
            nodes {
                content
                date
                id
                slug
                status
                title
                viatgedautorId
                featuredImage {
                    node {
                        altText
                        mediaItemUrl
                    }
                }
                Campsviatge {
                    autor
                    durada
                    preu
                    taxes
                    suplement
                    etapes {
                        etapa {
                            descripcio
                            dia
                            subtTol
                            titol
                            ubicacio
                        }
                    }
                    fitxa {
                        altText
                        id
                        mediaItemUrl
                        sourceUrl
                        title
                    }
                }
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
        }
    }
`;

export const GET_VIATGES = gql`
    query geytVietages ($first: Int, $last: Int, $before: String, $after: String) {
        viatgesdautor(first: $first, last: $last, before: $before, after: $after) {
            nodes {
                date
                content
                id
                modified
                slug
                title
                uri
                excerpt
                featuredImage {
                    node {
                        altText
                        mediaItemUrl
                    }
                }
                Campsviatge {
                    fieldGroupName
                    preu
                    grup
                    suplement
                    taxes
                    itinerari
                    fitxa {
                        fileSize
                        title
                        mediaItemUrl
                    }
                }
            }
            pageInfo {
                hasNextPage
                hasPreviousPage
                startCursor
                endCursor
            }
        }
    }
`;

export const GET_TEXTOS = gql`
    query getTextos ($first: Int, $last: Int, $before: String, $after: String) {
        textos(first: $first, last: $last, before: $before, after: $after) {
            nodes {
                date
                content
                id
                modified
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
                startCursor
                endCursor
            }
        }
    }
`;

export const GET_POSTS = gql`
    query getPosts($first: Int, $last: Int, $before: String, $after: String) {
        posts(first: $first, last: $last, before: $before, after: $after) {
            nodes {
                date
                content
                id
                modified
                postId
                slug
                title
                uri
                excerpt
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
                startCursor
                endCursor
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

