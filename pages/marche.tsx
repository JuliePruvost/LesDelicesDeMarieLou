import type { NextPage } from 'next'
import ContentWrapper from '../components/layout/wrappers/ContentWrapper';
import MarcheDescription from '../components/pages/marche/MarcheDescription';

const MarchePage: NextPage = () => {
    return (
        <ContentWrapper>
            <MarcheDescription />
        </ContentWrapper>
    );
}

export default MarchePage
