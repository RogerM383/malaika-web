import React from 'react';
import {nosaltres_styles} from "../styles/pages/nosaltresStyles";
import Header from "../components/Header";
import Image from "../../package/components/Image";
import Footer from "../components/Footer";
import {blog_styles} from "../styles/pages/blogStyles";


const Page = ({children, ...props}) => {


    return (
        <div css={blog_styles}>
            <Header img={"Banner.png/"}/>

            <Footer/>
        </div>

    );

};


export default Page;



