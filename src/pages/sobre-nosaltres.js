import React from 'react';
import {nosaltres_styles} from "../styles/pages/nosaltresStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../../package/components/Image";
import MaxWidthContainer from "../components/MaxWidthContainer";
import {apolloClient, initializeApollo} from "../contexts/apollo/ApolloContext";
import {GET_PAGE_BY_URI} from "../contexts/apollo/queries";
import {Col, Row} from "antd";
import HeaderInici from "../components/HeaderInici";


const Page = ({ id, title, uri, status, slug, content, featuredImage, ...props }) => {

    const elements = ['one', 'two'];
    return (
        <div css={nosaltres_styles}>

            <HeaderInici title={title} img={featuredImage?.node?.mediaItemUrl}/>

            <MaxWidthContainer  className={"block1"}>

                <div className={"item"}>
                    <h2 className={"title"}>Som viatgeres</h2>
                </div>

                <div className={"item"}>
                    <p className={"fs-18 mbold pad"}>
                        Ens agrada tant viatjar que el món ens queda petit. Cada viatge és una experiència vital i d'aprenentatge: les cultures, la seva gent, els paisatges, les olors, la llum. Tots hem sentit alguna vegada aquella felicitat difícil de traduir en paraules.
                    </p>

                </div>
                <div className={"item"}>
                    <p className={"fs-18 mbold pad"}>
                        Això és el que intentem transmetre als nostres viatges, felicitat, i per aconseguir-ho hi posem tota la nostra passió i dedicació, perque cada viatge sigui una experiència única i irrepetible.

                    </p>
                </div>

            </MaxWidthContainer>

            <div className={"block2"}>

                <MaxWidthContainer>
                    <Row>
                        <Col span={8}>
                            <p className={"text"}>Viatjar per saber, per olorar la llum dels llocs; també, per ésser, per tenir memòria.</p>

                        </Col>
                        <Col span={16}>
                            <Image src={"image_nosaltres.png"}/>
                        </Col>
                    </Row>

                </MaxWidthContainer>


            </div>

            <Footer/>
        </div>

    );

};

export const getStaticProps = async (ctx) => {
    const client = initializeApollo();
    const data = await client.query({query: GET_PAGE_BY_URI, variables: { uri: '/sobre-nosaltres/' }})
    .then((data) => {
        return data.data.pageBy;
    });
    return {props: data, revalidate: 3600};
}

export default Page;











