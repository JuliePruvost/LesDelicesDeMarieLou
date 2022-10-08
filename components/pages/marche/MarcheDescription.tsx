import { HorizontalNoWrapFlex } from "../../layout/flex/Flex";
import Image from "../../layout/image/Image";
import MapWrapper from "../../map/MapWrapper";
import flexStyles from '../../layout/flex/Flex.module.scss';
import textStyles from '../../text/Text.module.scss';
import { BoldSpan, DescriptionWithChildren } from "../../text/Text";
import marche from '/public/marche/marche.jpg'

const position = {
    lat: 48.88174,
    lng: 2.237954
}

const zoom = 16.25;

export default function MarcheDescription() {
    return (
        <>
            <div>
                <Image src={marche} alt="Marché" priority />
            </div>
            <HorizontalNoWrapFlex>
                <div className={flexStyles.flexItemWithBaseSize} >
                    <DescriptionWithChildren>
                        <div className={textStyles.rightAlign}><BoldSpan content='Marché Chantecoq de Puteaux' /></div>
                        <div className={textStyles.rightAlign}>59 Rue Eugène Eichenberger</div>
                        <div className={textStyles.rightAlign}>Puteaux 92800</div>
                        <div className={textStyles.rightAlign}>Commande au 06141907XX</div>
                    </DescriptionWithChildren>
                </div>
                <div className={flexStyles.flexItemWithBaseSize} >
                    <DescriptionWithChildren>
                        <div><BoldSpan content={'Horaires d\'ouverture'} /></div>
                        <div>Tous les Dimanche</div>
                        <div>8h - 13h</div>
                    </DescriptionWithChildren>
                </div>
            </HorizontalNoWrapFlex>
            <div style={{display: 'flex', height: '400px'}}>
                <MapWrapper position={position} zoom={zoom}></MapWrapper>
            </div>
            
            
        </>
    );
}