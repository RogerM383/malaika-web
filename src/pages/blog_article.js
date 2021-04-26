import React from 'react';
import {blog_article_styles} from "../styles/pages/blog_articleStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Page = ({children, ...props}) => {


    return (
        <div css={blog_article_styles}>

            <Header></Header>
            <div></div>

            <Footer/>
        </div>

    );

};


export default Page;



