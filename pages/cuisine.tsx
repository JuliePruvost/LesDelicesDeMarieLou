import type { NextPage } from 'next'
import ContentWrapper from '../components/layout/wrappers/ContentWrapper';
import CuisineDescription from '../components/pages/cuisine/CuisineDescription';

const CuisinePage: NextPage = () => {
    return (
        <ContentWrapper>
            <CuisineDescription />
        </ContentWrapper>
    );
}

export default CuisinePage
