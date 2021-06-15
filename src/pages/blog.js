import React from 'react';
import {nosaltres_styles} from "../styles/pages/nosaltresStyles";
import Header from "../components/Header";
import Image from "../../package/components/Image";
import Footer from "../components/Footer";
import {blog_styles} from "../styles/pages/blogStyles";
import Card from "../../package/components/Card";
import {card_blog, card_blog_thumbnail} from "../styles/components/CardStyles";
import Item from "../../package/components/Item";
import {item_blog_thumbnail} from "../styles/components/ItemStyles";
import {useRouter} from "next/router";
import MaxWidthContainer from "../components/MaxWidthContainer";
import {Col, Row} from "antd";


const Page = ({children, ...props}) => {

    const elements = ['one', 'two', 'three'];
    const router = useRouter();

    const goTo = (slug) => (e) =>{
        router.push(slug)
    }


    return (
        <div css={blog_styles}>
            <Header
                title={"New Ideas For A Low Cost Vacation On Water"}
                img={"palmeras.png/"}/>


            <MaxWidthContainer>

                <div className={"block1"}>

                    <Row gutter={[40]}>
                        <Col className={"left_column"} sm={24} md={16} lg={14} >
                            {
                                elements.map((item)=>{
                                    return(
                                        <div onClick={goTo("/blog/test_blog")} css={card_blog} >
                                            <span><Image src={"blog_card.png"}/></span>
                                            <p>30 Jul 2019</p>
                                            <p className={"title_entry"}>Three Ways To Get Travel Discounts</p>
                                            <p >So you’re going abroad, you’ve chosen your destination and now you have to choose a hotel. Ten years ago, you’d have probably visited your local travel agent and trusted the face-to-face advice you were given by the …</p>
                                            <p >Més Informació &#8594;</p>
                                        </div>
                                    )
                                })
                            }



                        </Col>

                        <Col className={"right_column recent"} sm={24} md={8} lg={10}  >
                            <input className={"search_input"} placeholder={"cercar..."} type={"text"}/>

                            <div >
                                <p className={"recent_post"}>Recent Posts</p>

                                {
                                    elements.map((item)=>{
                                        return(
                                            <Row gutter={[20]} onClick={goTo("/blog/test_blog")} css={card_blog_thumbnail}>
                                                <Col span={8}><Image src={"blog_card.png"}/></Col>
                                                <Col span={16}>
                                                    <span className={"title_entry"}>Three Ways To Get Travel Discounts</span>
                                                    <span className={"date"}>30 Jul 2019</span></Col>

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


export default Page;



