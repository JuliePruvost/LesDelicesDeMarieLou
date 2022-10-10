import Head from '../components/head';
import ContentWrapper from '../components/layout/wrappers/ContentWrapper';
import ContactView from '../components/pages/contact/ContactView'
import type { NextPage } from 'next'

const ContactPage: NextPage = () => {
    return (
        <div>
            <Head title='Contact' />

            <main>
                <ContentWrapper>
                    <ContactView />
                </ContentWrapper>
            </main>
        </div>
    );
}

export default ContactPage
