import React, {useContext, useEffect, useState} from 'react';
import {nosaltres_styles} from "../styles/pages/nosaltresStyles";
import Header from "../components/Header";
import Image from "../../package/components/Image";
import Footer from "../components/Footer";
import {nomada_styles} from "../styles/pages/nomadaStyles";
import {card_blog, card_blog_thumbnail} from "../styles/components/CardStyles";
import {useRouter} from "next/router";
import MaxWidthContainer from "../components/MaxWidthContainer";
import {Col, Row} from "antd";
import {useLazyQuery} from "@apollo/client";
import {GET_VIATGES_DESTACATS} from "../contexts/apollo/queriesTest";
import {GET_BLOG_ENTRY_BY_SLUG, GET_BLOG_ENTRYS} from "../contexts/apollo/queries/blog";
import {GET_NEWSLETTER_ENTRYS} from "../contexts/apollo/queries/newsletter";
import moment from "moment";
import HeaderInici from "../components/HeaderInici";
import {initializeApollo} from "../contexts/apollo/ApolloContext";
import {GET_PAGE_BY_URI} from "../contexts/apollo/queries";
import {LaunguageContext} from "../contexts/LanguageContext";

const Page = ({data, ...props}) => {

    const elements = ['one', 'two', 'three'];
    const router = useRouter();

    const [page, setPage] = useState(null);
    useEffect(() => {
        if (data) {
            setPage(data.pageBy);
        }
    },[data]);

    useEffect(() => {
        loadNewsletters({variables: { where: "ES" }});
    }, [data]);


    const [iframeUrl, setIframeUrl] = useState("");

    const {language, setLanguage} = useContext(LaunguageContext);
    useEffect(() => {
        setLanguage({language:'ES',pageTranslation:'el-primat-nomada'})
    }, [page]);

    const [newsletters, setNewsletters] = useState([]);
    const [loadNewsletters, { loadingN, errorN, data: dataNews }] = useLazyQuery(GET_NEWSLETTER_ENTRYS);
    useEffect(() => {
        if (dataNews && dataNews.newsletters.nodes.length >= 1) {
            setNewsletters(dataNews.newsletters.nodes);
            setIframeUrl(dataNews.newsletters.nodes[0].news_pdf.pdf.mediaItemUrl);
        } else if (dataNews && dataNews.newsletters.nodes.length < 1) {
            loadNewsletters({variables: { lang: "ES" }});
        }
    },[dataNews]);

    useEffect(() => {
        loadNewsletters({variables: { lang: "ES" }});
    },[page]);

    return (
        <div css={nomada_styles}>
            <HeaderInici
                title={"Newsletter"}
                img={"palmeras.png/"}/>

            <MaxWidthContainer>
                <div className={"block1"}>

                    <Row gutter={[40]}>
                        <Col className={"left_column"} sm={24} md={20} lg={19} >
                            {
                                <iframe src={iframeUrl} frameBorder="0" width="99%" height="99%"/>
                            }

                        </Col>

                        <Col className={"right_column recent"} sm={24} md={4} lg={5}  >

                            <div>
                                <p className={"recent_post"}>Newsletters</p>

                                {
                                    newsletters.map((element)=>{
                                        const{title,date} = element;
                                        return(
                                            <Row gutter={[20]} onClick={() => setIframeUrl(element.news_pdf.pdf.mediaItemUrl)} css={card_blog_thumbnail}>
                                                <Col span={16}>
                                                    <span className={"title_entry"}>{title}</span>
                                                    <span className={"date"}>{moment(date).format('DD-MM-YYYY')}</span></Col>

                                            </Row>
                                        )
                                    })
                                }
                            </div>

                        </Col>
                    </Row>

                </div>

            </MaxWidthContainer>

            <Footer/>

        </div>

    );

};

export const getStaticProps = async (ctx) => {
    const client = initializeApollo();

    const page = await client.query({query: GET_PAGE_BY_URI, variables: {uri: '/el-primate-nomada/'}})
    .then((data) => {
        return data.data.pageBy;
    });

    return {props: {...page}, revalidate: 60};
}

/*export const getStaticProps = async (ctx) => {
    const {data, initialState} = await getInitialData();
    return {props: {data, initialState}, revalidate: 60};
}

const getInitialData = async (slug) => {
    const apolloClient = initializeApollo();
    const {error, data} = await apolloClient.query({query: GET_PAGE_BY_URI, variables: { uri: '/el-primate-nomada/' }})
    return { data: data, initialState: apolloClient.cache.extract()};
}
*/
export default Page;



