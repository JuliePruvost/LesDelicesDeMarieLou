import Head from "../components/Head";
import MainView from "../components/pages/main/MainView";
import WideScreenImage from "../components/pages/main/WideScreenImage";
import type { NextPage } from "next";
import ContentWrapper from "../components/layout/wrappers/ContentWrapper";

const Home: NextPage = () => {
    return (
        <div>
            <Head title='Accueil' />

            <main>
                <div style={{height:'0vh'}}></div>
                <WideScreenImage />
                <ContentWrapper>
                    <MainView />
                </ContentWrapper>
            </main>
        </div>
    );
};

export default Home;
