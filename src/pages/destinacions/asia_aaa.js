import React from 'react';
import {destinacions_styles} from "../../styles/pages/destinacioStyle";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Grid from "../../components/Grid";
import Card from "../../../package/components/Card";
import {top_img_tagged_card} from "../../styles/components/CardStyles";
import Image from "../../../package/components/Image";
import {useRouter} from "next/router";
import MaxWidthContainer from "../../components/MaxWidthContainer";
import {apolloClient, initializeApollo} from "../../contexts/apollo/ApolloContext";
import {GET_PAGE_BY_URI} from "../../contexts/apollo/queries";
import HeaderInici from "../../components/HeaderInici";
import {grid_style} from "../../styles/components/GridStyles";


const Page = ({ id, title, uri, status, slug, content, featuredImage, ...props }) => {
    const elements = ['one', 'two', 'three', 'four', 'five', 'six','seven','eight','nine'];

    const router = useRouter();

    const goToFitxa = (e) =>{
        router.push("/viatge-destinacio-destinacio");
    }

    return (
        <div css={destinacions_styles}>

            <HeaderInici title={title} img={featuredImage?.node?.mediaItemUrl}/>

            <MaxWidthContainer className={"block1"}>

                <h2 className={"title"}><span>Ens apassiona</span><span>l’Asia</span></h2>

                <Grid css={grid_style("300px")}>
                    {

                        elements.map((element) => {
                            return (
                                <Card  onClick={goToFitxa} css={top_img_tagged_card}>
                                    <Image src={"home_card_1.png"}/>
                                    <div className={"text"}>
                                        <span className={"title"}>ANDALUSIA CRUILLA DE CULTURES</span>
                                        <span className={"tags"}>Palaus i cultura mil.lenària</span>
                                        <span className={"calendar"}><img src={"/calendar_icon.png"}/> 3 dies - Sortides 13 Octubre, 18 Novembre</span>
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

export const getStaticProps = async (ctx) => {
    const client = initializeApollo();
    const data = await client.query({query: GET_PAGE_BY_URI, variables: { uri: '/asia/' }})
    .then((data) => {
        return data.data.pageBy;
    });
    console.log(data)
    console.log('--------------------------------------')
    return {props: data, revalidate: 60};
}

export default Page;



