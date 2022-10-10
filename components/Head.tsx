import Head from "next/head";

const siteTitle = "Les Délices de Marie Lou";
const description = "Les Délices de Marie Lou est un restaurant traiteur à Cormeilles en Parisis"

export default function SEO({
    title,
}: {
    title: string;
}) {
    return (
        <Head>
            <title>{`${title} - ${siteTitle}`}</title>
            <meta name="description" content={description} />
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={siteTitle} />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="robots" content="index, follow"></meta>
            <meta lang="fr_FR" name="keywords" content="Traiteur antillais Cormeilles en Parisis,Puteaux,marché,Marie Lou,Martinique,plats antillais,service a domicile"></meta>
        </Head>
    );
}
