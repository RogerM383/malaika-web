import React from 'react';
import {nosaltres_styles} from "../styles/pages/nosaltresStyles";
import Header from "../components/Header";
import Image from "../../package/components/Image";
import Footer from "../components/Footer";
import {blog_styles} from "../styles/pages/blogStyles";
import Card from "../../package/components/Card";
import {card_blog} from "../styles/components/CardStyles";
import Item from "../../package/components/Item";
import {item_blog_thumbnail} from "../styles/components/ItemStyles";
import {useRouter} from "next/router";


const Page = ({children, ...props}) => {

    const elements = ['one', 'two', 'three'];
    const router = useRouter();

    const goToArticle = () => {
        router.push("/blog_article")
    }


    return (
        <div css={blog_styles}>
            <Header
                title={"New Ideas For A Low Cost Vacation On Water"}
                img={"palmeras.png/"}/>

            <div className={"container"}>

                <div className={"listBlock row"}>
                    <div className={"column column-66"}>

                        {
                            elements.map((item)=>{
                                return(
                                    <Card onClick={goToArticle} css={card_blog} img={"blog_card.png"}>
                                        <p>30 Jul 2019</p>
                                        <p className={"didot fs-24"}>Three Ways To Get Travel Discounts</p>
                                        <p className={"didot fs-14"}>So you’re going abroad, you’ve chosen your destination and now you have to choose a hotel. Ten years ago, you’d have probably visited your local travel agent and trusted the face-to-face advice you were given by the …</p>
                                        <p className={"didot"}>Més Informació &#8594;</p>
                                    </Card>
                                )
                            })
                        }



                    </div>
                    <div className={"column column-33"}>
                        <input className={"search_input"} placeholder={"cercar..."} type={"text"}/>

                        <div className={"recent"}>
                            <p className={"didot fs-18"}>Recent Posts</p>

                            {
                                elements.map((item)=>{
                                    return(
                                        <Item onClick={goToArticle} css={item_blog_thumbnail} img={"blog_card.png"}>
                                            <span className={"didot fs-16 bold"}>Three Ways To Get Travel Discounts</span>
                                            <p>30 Jul 2019</p>
                                        </Item>
                                    )
                                })
                            }
                        </div>


                    </div>
                </div>



            </div>

            <Footer/>
        </div>

    );

};


export default Page;



