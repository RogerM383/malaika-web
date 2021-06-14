import React, {useEffect, useState} from 'react';
import {destinacio_style} from "../../styles/pages/destinacionsStyles";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Grid from "../../components/Grid";
import Card from "../../../package/components/Card";
import {card_destinacio, top_img_tagged_card} from "../../styles/components/CardStyles";
import Image from "../../../package/components/Image";
import {useRouter} from "next/router";
import MaxWidthContainer from "../../components/MaxWidthContainer";
import {apolloClient, initializeApollo} from "../../contexts/apollo/ApolloContext";
import {GET_VIATGE_BY_TERM_SLUG} from "../../contexts/apollo/queries";
import {useLazyQuery} from "@apollo/client";
import {GET_ZONED_PAGES, GET_PAGE_BY_URI} from "../../contexts/apollo/queries/pages";
import {destinacions_styles} from "../../styles/pages/destinacioStyle";
import {GET_VIATGES_DESTACATS, GET_VIATGES_ZONA} from "../../contexts/apollo/queriesTest";


const PageDestinacions = ({id, title, uri, status, slug, featuredImage, content, date, ...props}) => {


    const router = useRouter();
    const PER_PAGE = 6;
    const [pageInfo, setPageInfo] = useState(null);



    /***********************************************************************/
    const [loadViatges, { loading: loadingVD, error: errorVD, data }] = useLazyQuery(GET_VIATGES_ZONA,{variables: {slug}});

    useEffect(() => {
        if(slug)
        loadViatges();
    }, [slug]);

    useEffect(() => {
        if (data) {
            setViatges( data.zona.viatges)
        }
        debugger
    },[data]);

    const [viatges, setViatges] = useState([]);

    /****WORKAROUND*******************************************************************/


    const goToFitxa = (e) =>{
        router.push("/fitxa-viatge-destinacio");
    }

    return (
        <div css={destinacions_styles}>

            <Header title={title} img={featuredImage?.node?.mediaItemUrl}/>

            <MaxWidthContainer className={"block1"}>

                <h2 className={"title"}>
                    <span  className={""} dangerouslySetInnerHTML={{__html: content}}/>
                </h2>

                <Grid size={"350px"}>
                    {
                        viatges?.nodes?.map((item) => {
                            const {dates} = item.Campsviatge;
                            return (
                                <Card  onClick={goToFitxa} css={top_img_tagged_card}>
                                    <Image className={"image_card"} src={item.featuredImage.node.mediaItemUrl}></Image>
                                    <div className={"text"}>
                                        <span className={"title"}>{item.title}</span>
                                        <span  className={"tags"} dangerouslySetInnerHTML={{__html: item.content}}/>
                                        <span className={"calendar"}><img src={"/calendar_icon.png"}/> {dates}</span>
                                        <span className={"more_info"}>Més Informació <span className={"arrow"}>&#8594;</span>	</span>
                                    </div>
                                </Card>
                            )
                        })

                    }
                </Grid>


            </MaxWidthContainer>

            <Footer></Footer>


        </div>


    );
};

export async function getStaticPaths() {
    const client = initializeApollo();
    const {error, data} =  await client.query({ query: GET_ZONED_PAGES });
    const paths = data.terms.nodes.map( (node) => {
        let term = node.slug;
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

export async function getStaticProps({ params,...ctx }) {
    const {uri, term} = params;
    const client = initializeApollo();
    const {error, data} = await client.query({query: GET_PAGE_BY_URI, variables: { uri: uri }});

/*    const {error:error2, data:data2} = await client.query({query:  GET_VIATGE_BY_TERM_SLUG, variables: {first: 6, slug:"Oceania"}});
    console.log("data2")
    console.log(data2)*/


    const page = data.pageBy;
    return { props: {...page}, revalidate: 3600 };
}

export default PageDestinacions;



