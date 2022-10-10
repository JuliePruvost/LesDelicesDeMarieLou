import Head from '../components/head';
import type { NextPage } from 'next'
import ContentWrapper from '../components/layout/wrappers/ContentWrapper';
import CuisineDescription from '../components/pages/cuisine/CuisineDescription';

const CuisinePage: NextPage = () => {
    return (
        <div>
            <Head title='Cuisine' />

            <main>
                <ContentWrapper>
                    <CuisineDescription />
                </ContentWrapper>
            </main>
        </div>
    );
}

export default CuisinePage
