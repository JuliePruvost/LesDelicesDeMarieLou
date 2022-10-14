import { HorizontalNoWrapFlex, VerticalFlex } from "../../layout/flex/Flex";
import Image from "../../layout/image/Image";
import { Description, SectionTitle } from "../../text/Text";
import flexStyles from '../../layout/flex/Flex.module.scss';
import evenement from '/public/evenement/evenement.jpg';

const text1 = "Les Antilles, ses parfums et ses ambiances tropicales le temps d'un repas convivial, partagez un moment magique et exotique avec vos hôtes.";
const text2 = "Surprenez vos invités avec les saveurs raffinées concoctées pour vous par Notre Chef, dans Votre cuisine.";
const text3 = "Avec une carte gastronomique à prix abordables, un service de qualité, nous vous simplifions vraiment la vie !";
const text4 = "Servis à tables par le Chef, nous n'avez plus qu'à savourer.";
const text5 = "Contactez nous pour obtenir un devis au 06 14 19 07 XX."

export default function LesDelicesDescription() {
    return (
        <VerticalFlex >
            <HorizontalNoWrapFlex >
                <div className={flexStyles.flexItemWithBaseSize} >
                    <Image src={evenement} alt="plat" priority />
                </div>
                <div className={flexStyles.flexItemWithBaseSize} >
                    <VerticalFlex >
                        <SectionTitle content="Traiteur à domicile" />
                        <div>
                            <Description content={text1}  />
                            <Description content={text2}  />
                        </div>
                    </VerticalFlex>
                </div>
            </HorizontalNoWrapFlex>
            <Description content={text3}  />
            <Description content={text4}  />
            <Description content={text5}  />
        </VerticalFlex>
    );
}