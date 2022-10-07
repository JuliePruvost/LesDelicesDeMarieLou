import { SectionTitle } from "components/text/Text";
import FoodGallery from "./FoodGallery";
import LesDelicesDescription from "./LesDelicesDescription";

export default function MainView() {
    return (
        <>
            <SectionTitle content="Saveurs antillaises" />
            <LesDelicesDescription />
            <SectionTitle content="Gallerie Photo" />
            <FoodGallery />
            <div>Vous trouverez des photos plus récentes sur notre <a href="https://www.instagram.com/lesdelicesdemari_lou/" target="_blank"
                rel="noopener noreferrer" title="Instagram (link opens in a new tab)">Instagram</a></div>
        </>
    );
}