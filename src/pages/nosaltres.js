import React from 'react';
import {nosaltres_styles} from "../styles/pages/nosaltresStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../../package/components/Image";
import MaxWidthContainer from "../components/MaxWidthContainer";


const Page = ({children, ...props}) => {

    const elements = ['one', 'two'];
    return (
        <div css={nosaltres_styles}>
            <Header
                title={"Sobre nosaltres"}
                img={"foto5.png/"}/>


            <MaxWidthContainer  className={"block1"}>


                        <div className={"item"}>
                            <p className={"fs-50 didot sbold title"}>Som viatgeres</p>
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
                        <div className={"row"}>
                            <div className={"column"}>
                                <p className={"text"}>Viatjar per saber,per olorar la llum dels llocs; també, per ésser, per tenir memòria.
                                </p>
                            </div>
                            <div className={"column"}>
                                <Image src={"image_nosaltres.png"}/>
                            </div>
                        </div>
                </MaxWidthContainer>


            </div>

            <Footer/>
        </div>

    );

};


export default Page;











