import Head from '../components/head';
import type { NextPage } from 'next'
import ContentWrapper from '../components/layout/wrappers/ContentWrapper';
import MarcheDescription from '../components/pages/marche/MarcheDescription';

const MarchePage: NextPage = () => {
    return (
        <div>
            <Head title='Marché' />

            <main>
                <ContentWrapper>
                    <MarcheDescription />
                </ContentWrapper>
            </main>
        </div>
    );
}

export default MarchePage
