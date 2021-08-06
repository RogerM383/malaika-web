import {gql} from "@apollo/client";

export const GET_VIATGES_DESTACATS = gql`
        query geytViatgesDestacats($first: Int,$after:String) {
            viatges(where: {categoryName: "Destacat"},first:$first,after:$after) {
                nodes {
                    content
                    date
                    id
                    uri
                    title
                    slug
                    status
                    link
                    subtitolViatge {
                        subtitolviatge
                    }
                    featuredImage {
                        node {
                            altText
                            mediaItemUrl
                        }
                    }
                    Campsviatge {
                        dates
                        taxes
                        suplement
                        preu
                        grup
                        fieldGroupName
                    }
                    zones {
                        nodes {
                            slug
                            name
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

export const GET_VIATGE_BY_SLUG = gql`
    query getViatgeBySlug($slug:ID!) {
        viatge(id: $slug, idType: SLUG) {
            uri
            title
            slug
            status
            content
            zones {
                nodes {
                    name
                    slug
                }
                pageInfo {
                    endCursor
                    startCursor
                }
            }
            Campsviatge {
                taxes
                suplement
                preu
                grup
                dates
                fieldGroupName
            }
            featuredImage {
                node {
                    uri
                    title
                    mediaItemUrl
                }
            }

        }
    }

`;

export const GET_VIATGE_DAUTOR_BY_SLUG = gql`
    query getViatgeDautorBySlug($slug:ID!) {
        viatgedautor(id: $slug, idType: SLUG) {
           content
            slug
            title
            uri
            zones {
                nodes {
                    name
                }
            }
            Campsviatge {
                grup
                autor
                durada
                preu
                suplement
                taxes
                noInclou
                inclou
                etapes {
                    etapa {
                        descripcio
                        dia
                        titol
                        ubicacio
                    }
                }
                vols {
                    datavol
                    vol {
                        ubicacio
                        numvol
                        datavol
                        horari
                        fieldGroupName
                    }
                }

                mapa {
                    mediaItemUrl
                   title
                }
            }
            featuredImage {
                node {
                    uri
                    title
                    mediaItemUrl
                }
            }
        }
    }

`;


export const GET_VIATGES_ZONA = gql`
    query getViatgesZona($slug:ID!,$first: Int) {
    zona(id: $slug, idType: SLUG) {
        viatges(first: $first) {
            nodes {
                Campsviatge {
                    taxes
                    suplement
                    preu
                    grup
                    dates
                }
                subtitolViatge {
                    subtitolviatge
                }
                uri
                title
                slug
                content
                featuredImage {
                    node{
                        mediaItemUrl
                        altText
                    }
                }
            }
        }
    }
}

`;
