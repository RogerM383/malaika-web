import React from 'react';
import {destinacio_style} from "../styles/pages/destinacionsStyles";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Grid from "../components/Grid";
import Card from "../../package/components/Card";
import {card_destinacio} from "../styles/components/CardStyles";
import Image from "../../package/components/Image";
import {useRouter} from "next/router";
import MaxWidthContainer from "../components/MaxWidthContainer";
import {apolloClient, initializeApollo} from "../contexts/apollo/ApolloContext";
import {GET_PAGE_BY_URI} from "../contexts/apollo/queries";


const Page = ({children, ...props}) => {
    const elements = ['one', 'two', 'three', 'four', 'five', 'six','seven','eight','nine'];

    const router = useRouter();

    const goToFitxa = (e) =>{
        router.push("/viatge-destinacio-destinacio");
    }

    return (
        <div css={destinacio_style}>

{/*
            <Header title={"ASIA"} img={"foto2.png/"}/>


            <MaxWidthContainer className={"block1"}>

                    <h2 className={"title didot"}>Ens apassiona l’Asia</h2>

                    <Grid size={"350px"}>
                        {

                            elements.map((element) => {
                                return (
                                    <Card  onClick={goToFitxa} css={card_destinacio}>
                                        <Image src={"home_card_1.png"}/>
                                        <div className={"text"}>
                                            <span className={"db didot bold fs-18"}>ANDALUSIA CRUILLA DE CULTURES</span>
                                            <p className={"fs-14"}>Palaus i cultura mil.lenària</p>
                                            <p className={"fs-12 sbold"}><img src={"/calendar_icon.png"}/> 3 dies - Sortides 13 Octubre, 18 Novembre</p>
                                            <span className={" db didot fs-14 bold"}>Més Informació <span className={"arrow"}>&#8594;</span>	</span>
                                        </div>
                                    </Card>
                                )
                            })

                        }
                    </Grid>


            </MaxWidthContainer>

            <Footer></Footer>

*/}

        </div>

    );
};

/*export const getStaticProps = async (ctx) => {
    const client = initializeApollo();
    const data = await client.query({query: GET_PAGE_BY_URI, variables: { uri: '/destinacions/' }});
/!*    .then((data) => {
        return data.data.pageBy;
    });*!/
    return {props: data.data.pageBy, revalidate: 3600};
}*/

export default Page;



