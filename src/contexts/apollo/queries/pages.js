import {gql} from "@apollo/client";

/**
 * Retorna lista de paginas agrupadas por ZONA
 * @type {DocumentNode}
 */
export const GET_ZONED_PAGES = gql`
    query getZonedPages {
        terms(where: {taxonomies: ZONA}) {
            nodes {
                ... on Zona {
                    id
                    name
                    slug
                    pages {
                        edges {
                            node {
                                id
                                slug
                                title
                                uri
                                content
                            }
                        }
                    }
                }
            }
        }
    }
`;

/**
 * Retorna pagina con la URI
 * @type {DocumentNode}
 */
export const GET_PAGE_BY_URI = gql`
    query getPageByUri ($uri: String!) {
        pageBy(uri: $uri) {
            id
            title
            uri
            status
            slug
            content
            date
            featuredImage {
                node {
                    mediaItemUrl
                    altText
                }
            }
            notadestacada {
                avisos {
                    avis
                }
            }
            descripcioviatgesdautor {
                descripcioViatgesDautor
            }
        }
    }
`;
