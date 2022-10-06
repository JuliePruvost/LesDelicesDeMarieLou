import HorizontalNoWrapFlex from "../../layout/flex/HorizontalNoWrapFlex";
import Image from "../../layout/image/Image";
import MapWrapper from "../../map/MapWrapper";
import flexStyles from '../../layout/flex/HorizontalNoWrapFlex.module.scss';
import textStyles from '../../text/Text.module.scss';
import { BoldSpan } from "../../text/Text";

const position = {
    lat: 48.88174,
    lng: 2.237954
}

const zoom = 16.25;

export default function MarcheDescription() {
    return (
        <>
            <div>
                <Image src="/marche/marche.jpg" alt="Marché" priority />
            </div>
            <HorizontalNoWrapFlex>
                <div className={flexStyles.flexItemWithBaseSize} >
                    <div>
                        <div className={textStyles.rightAlign}><BoldSpan content='Marché Chantecoq de Puteaux' /></div>
                        <div className={textStyles.rightAlign}>59 Rue Eugène Eichenberger</div>
                        <div className={textStyles.rightAlign}>Puteaux 92800</div>
                        <div className={textStyles.rightAlign}>Commande au 06141907XX</div>
                    </div>
                </div>
                <div className={flexStyles.flexItemWithBaseSize} >
                    <div><BoldSpan content={'Horaires d\'ouverture'} /></div>
                    <div>Tous les Dimanche</div>
                    <div>8h - 13h</div>
                </div>
            </HorizontalNoWrapFlex>
            <div style={{display: 'flex', height: '400px'}}>
                <MapWrapper position={position} zoom={zoom}></MapWrapper>
            </div>
            
            
        </>
    );
}