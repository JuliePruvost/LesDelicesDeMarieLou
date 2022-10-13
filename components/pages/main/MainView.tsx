import { DescriptionWithChildren, FoodList, SectionTitle, SubSectionTitle } from "components/text/Text";
import FoodGallery from "./FoodGallery";
import LesDelicesDescription from "./LesDelicesDescription";

export default function MainView() {
    return (
        <>
            <SectionTitle content="Saveurs antillaises" />
            <LesDelicesDescription />
            <SectionTitle content="Nos spécialités" />
            <div>
                <DescriptionWithChildren>
                    <FoodList title="Entrée">
                        <li>Accras de morue</li>
                        <li>Samoussas de bœufs et de poulets</li>
                        <li>Feuilletés de boudins noir</li>
                        <li>Croustilles de crabes et de poissons sur feuilleté</li>
                        <li>Roulé feuilleté de  saumon fumé</li>
                    </FoodList>
                </DescriptionWithChildren>
            </div>
            <div>
                <DescriptionWithChildren>
                    <FoodList title="Plat">
                        <li>Gambas au crème de coco</li>
                        <li>Colombo de porc aux petits légumes</li>
                        <li>Purée d’igname et de carotte</li>
                        <li>Massalé de cabri</li>
                        <li>Rougail de saucisses</li>
                        <li>Porc caramel</li>
                        <li>Purée épicée de patate douce</li>
                    </FoodList>
                </DescriptionWithChildren>
            </div>
            <SectionTitle content="Gallerie Photo" />
            <FoodGallery />
            <DescriptionWithChildren>
                <div>Vous trouverez des photos plus récentes sur notre <a href="https://www.instagram.com/lesdelicesdemari_lou/" target="_blank"
                    rel="noopener noreferrer" title="Instagram (link opens in a new tab)">Instagram</a></div>
            </DescriptionWithChildren>
        </>
    );
}