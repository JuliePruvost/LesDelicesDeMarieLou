import { HorizontalNoWrapFlex, VerticalFlex } from "../../layout/flex/Flex";
import Image from "../../layout/image/Image";
import { Description, SectionTitle } from "../../text/Text";
import flexStyles from '../../layout/flex/Flex.module.scss';
import marielou from '/public/cuisine/marielou.jpg';
import cuisine2 from '/public/cuisine/cuisine2.jpg';

const marieLouText = "C’est au-travers de cagettes de fruits et légumes empilées comme des totems, que l’on peut apercevoir depuis la rue Marie Lou et son équipe s’affairer en cuisine. En 2016, Marie Lou dit au revoir à l'architecture et décide de faire revivre ses souvenirs d'enfance en créant une cantine de quartier entièrement tournée vers le végétal et qui balaye tous les clichés: \"Je veux proposer une cuisine de saison, alternative et savoureuse mettant les richesses de la terre à l'honneur\".";
const cuisineText = "En cuisine, c'est une équipe de 6 apprentis qui répondent à la douce symphonie orchestrée par la main de maître Marie Lou.";

export default function LesDelicesDescription() {
    return (
        <VerticalFlex >
            <HorizontalNoWrapFlex >
                <div className={flexStyles.flexItemWithBaseSize} >
                    <Image src={marielou} alt="Marie Lou" priority />
                </div>
                <div className={flexStyles.flexItemWithBaseSize} >
                    <VerticalFlex >
                        <SectionTitle content="La touche Marie Lou" />
                        <Description content={marieLouText}  />
                    </VerticalFlex>
                </div>
            </HorizontalNoWrapFlex>
            <SectionTitle content="En cuisine" />
            <Description content={cuisineText}  />
            <div>
                <Image src={cuisine2} alt="La cuisine" />
            </div>
        </VerticalFlex>
    );
}