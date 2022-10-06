import type { NextPage } from 'next'
import ContentWrapper from '../components/layout/wrappers/ContentWrapper';
import BoutiqueDescription from '../components/pages/boutique/BoutiqueDescription';

const BoutiquePage: NextPage = () => {
    return (
        <ContentWrapper>
            <BoutiqueDescription />
        </ContentWrapper>
    );
}

export default BoutiquePage
