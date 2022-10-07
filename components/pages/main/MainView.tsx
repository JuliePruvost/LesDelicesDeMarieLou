import { SectionTitle } from "components/text/Text";
import FoodGallery from "./FoodGallery";
import LesDelicesDescription from "./LesDelicesDescription";

export default function MainView() {
    return (
        <>
            <SectionTitle content="Saveurs antillaises" />
            <LesDelicesDescription />
            <SectionTitle content="Gallerie" />
            <FoodGallery />
        </>
    );
}