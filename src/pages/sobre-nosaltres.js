import React, {useContext, useEffect} from 'react';
import {nosaltres_styles} from "../styles/pages/nosaltresStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../../package/components/Image";
import MaxWidthContainer from "../components/MaxWidthContainer";
import {apolloClient, initializeApollo} from "../contexts/apollo/ApolloContext";
import {GET_PAGE_BY_URI} from "../contexts/apollo/queries";
import {Col, Row} from "antd";
import HeaderInici from "../components/HeaderInici";
import {LaunguageContext} from "../contexts/LanguageContext";


const Page = ({ id, title, uri, status, slug, content, featuredImage,bloc1,bloc2, ...props }) => {

    const elements = ['one', 'two'];
    const {language,setLanguage} = useContext(LaunguageContext);


    useEffect(() => {
        setLanguage({language:props?.language?.code,pageTranslation:props.translations[0].slug})
    }, []);



    return (
        <div css={nosaltres_styles}>

            <HeaderInici title={title} img={featuredImage?.node?.mediaItemUrl}/>

            <MaxWidthContainer  className={"block1"}>

                <div className={"item"}>
                    <div dangerouslySetInnerHTML={{__html: bloc1.text1}} className={"title"}/>
                {/*    <h2 className={"title"}>{bloc1.text1}</h2>*/}
                </div>

                <div className={"item"}>
                    <div dangerouslySetInnerHTML={{__html: bloc1.text2}} className={"fs-18 mbold pad"}/>
                </div>
                <div className={"item"}>
                    <div dangerouslySetInnerHTML={{__html: bloc1.text3}} className={"fs-18 mbold pad"}/>
                </div>

            </MaxWidthContainer>

            <div className={"block2"}>

                <MaxWidthContainer>
                    <Row>
                        <Col span={8}>
                            <div dangerouslySetInnerHTML={{__html: bloc2.textc1}} className={"text"}/>
                        </Col>
                        <Col span={16}>
                            <Image src={bloc2.imatgeNos.mediaItemUrl}/>
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
    return {props: data, revalidate: 60};
}

export default Page;











