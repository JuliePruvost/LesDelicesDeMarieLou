import Head from '../components/head';
import type { NextPage } from 'next'
import ContentWrapper from '../components/layout/wrappers/ContentWrapper';
import BoutiqueDescription from '../components/pages/boutique/BoutiqueDescription';

const BoutiquePage: NextPage = () => {
    return (
        <div>
            <Head title='Traiteur' />

            <main>
                <ContentWrapper>
                    <BoutiqueDescription />
                </ContentWrapper>
            </main>
        </div>
    );
}

export default BoutiquePage
