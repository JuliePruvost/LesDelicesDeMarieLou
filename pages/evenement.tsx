import Head from '../components/Head';
import type { NextPage } from 'next'
import ContentWrapper from '../components/layout/wrappers/ContentWrapper';
import EvenementDescription from '../components/pages/evenement/EvenementDescription';

const EvenementPage: NextPage = () => {
    return (
        <div>
            <Head title='Evenement' />

            <main>
                <ContentWrapper>
                    <EvenementDescription />
                </ContentWrapper>
            </main>
        </div>
    );
}

export default EvenementPage
