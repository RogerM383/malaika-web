import React, {useEffect, useState} from 'react';
import {destinacio_style} from "../../styles/pages/destinacionsStyles";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Grid from "../../components/Grid";
import Card from "../../../package/components/Card";
import {card_destinacio} from "../../styles/components/CardStyles";
import Image from "../../../package/components/Image";
import {useRouter} from "next/router";
import MaxWidthContainer from "../../components/MaxWidthContainer";
import {apolloClient, initializeApollo} from "../../contexts/apollo/ApolloContext";
import {
    GET_PAGE_BY_TERM_SLUG,
    GET_VIATGE_BY_TERM_SLUG,
    GET_PAGES_FROM_ZONES
} from "../../contexts/apollo/queries";
import {useLazyQuery} from "@apollo/client";
import {GET_ZONED_PAGES, GET_PAGE_BY_URI} from "../../contexts/apollo/queries/pages";


const Page = ({id, title, uri, status, slug, featuredImage, content, date, term, ...props}) => {

    const router = useRouter();
    const PER_PAGE = 6;
    const [loadViatges, { loading: loadingViatges, error: errorVatges, data: dataViatges }] = useLazyQuery(GET_VIATGE_BY_TERM_SLUG);
    const [viatgesAutor, setViatgesAutor] = useState([]);
    const [pageInfo, setPageInfo] = useState(null);

    useEffect(() => {
        if (slug) {
            loadViatges({
                variables: {
                    first: PER_PAGE,
                    slug
                }
            });
        }
    },[slug]);

    const goToFitxa = (e) =>{
        router.push("/fitxa-viatge-destinacio");
    }

    return (
        <div css={destinacio_style}>

            <Header title={title} img={featuredImage?.node?.mediaItemUrl}/>
            {term}
            <MaxWidthContainer className={"block1"}>

                <h2 className={"title"} dangerouslySetInnerHTML={{__html: content}}/>

                <section id={'viatges'}>
                    {
                        dataViatges &&
                        dataViatges.map( (viatge) => {
                            return (
                                <span>{viatge.name}</span>
                            )
                        })
                    }
                </section>

            </MaxWidthContainer>

            <Footer/>

        </div>

    );
};

export async function getStaticPaths() {
    const {error, data} =  await apolloClient.query({ query: GET_ZONED_PAGES });
    const paths = data.terms.nodes.map( (node) => {
        let term = node.slug;
        console.log(term)
        let aux;
        for (let page of node.pages.edges) {
            if (page.node.uri) {
                aux = {params: {uri: page.node.uri, term: term}};
            }
        }
        return aux;
    });
    return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
    const {uri, term} = params;
    const client = initializeApollo();
    const {error, data} = await client.query({query: GET_PAGE_BY_URI, variables: { uri: uri }});
    const page = data.pageBy;
    return { props: {...page, term: term}, revalidate: 3600 };
}

export default Page;



