import { HorizontalNoWrapFlex } from "../../layout/flex/Flex";
import Image from "../../layout/image/Image";
import MapWrapper from "../../map/MapWrapper";
import flexStyles from '../../layout/flex/Flex.module.scss';
import textStyles from '../../text/Text.module.scss';
import { BoldSpan, Description, DescriptionWithChildren } from "../../text/Text";
import boutique from '/public/boutique/_boutique2.jpeg';
import traiteur from '/public/boutique/traiteur2.jpg';

const position = {
    lat: 48.95862207325106,
    lng: 2.1971300992365026
}

const zoom = 16.25;

export default function BoutiqueDescription() {
    return (
        <>
            <DescriptionWithChildren>
                <div>Nous vous accueillons dans notre boutique de Cormeilles en Parisis, du mardi au samedi, en vous proposant des plats à emporter. Possibilité de se restaurer sur place.</div>
            </DescriptionWithChildren>
            <div style={{width:'100%'}}>
                <Image src={boutique} alt="La cuisine" priority width='100%' />
            </div>
            <DescriptionWithChildren>
                <div>Poissons, fruits de mer, viandes, plats végétarien... vous y trouverez une cuisine variée, épicée ou plus douce... Nous modifions notre carte de façon quotidienne.</div>
            </DescriptionWithChildren>
            <div style={{width:'100%'}}>
                <Image src={traiteur} alt="La cuisine" priority width='100%' />
            </div>
            <HorizontalNoWrapFlex>
                <div className={flexStyles.flexItemWithBaseSize} >
                    <DescriptionWithChildren>
                        <div className={textStyles.rightAlign}><BoldSpan content='Les Délices de Marie Lou' /></div>
                        <div className={textStyles.rightAlign}>74 rue Jean Bart</div>
                        <div className={textStyles.rightAlign}>Cormeilles en Parisis 95240</div>
                        <div className={textStyles.rightAlign}>Commande au 06141907XX</div>
                    </DescriptionWithChildren>
                </div>
                <div className={flexStyles.flexItemWithBaseSize} >
                    <DescriptionWithChildren>
                        <div><BoldSpan content={'Horaires d\'ouverture'} /></div>
                        <div>du Mardi au Samedi</div>
                        <div>11h - 14h</div>
                        <div>16h - 20h</div>
                    </DescriptionWithChildren>
                </div>
            </HorizontalNoWrapFlex>
            <div style={{display: 'flex', height: '400px'}}>
                <MapWrapper position={position} zoom={zoom}></MapWrapper>
            </div>
        </>
    );
}