import { HorizontalNoWrapFlex } from "../../layout/flex/Flex";
import Image from "../../layout/image/Image";
import MapWrapper from "../../map/MapWrapper";
import flexStyles from '../../layout/flex/Flex.module.scss';
import textStyles from '../../text/Text.module.scss';
import { BoldSpan } from "../../text/Text";
import boutique from '/public/boutique/_boutique2.jpeg';

const position = {
    lat: 48.95862207325106,
    lng: 2.1971300992365026
}

const zoom = 16.25;

export default function BoutiqueDescription() {
    return (
        <>
            <div style={{width:'100%'}}>
                <Image src={boutique} alt="La cuisine" priority width='100%' />
            </div>
            <HorizontalNoWrapFlex>
                <div className={flexStyles.flexItemWithBaseSize} >
                    <div>
                        <div className={textStyles.rightAlign}><BoldSpan content='Les Délices de Marie Lou' /></div>
                        <div className={textStyles.rightAlign}>74 rue Jean Bart</div>
                        <div className={textStyles.rightAlign}>Cormeilles en Parisis 95240</div>
                        <div className={textStyles.rightAlign}>Commande au 06141907XX</div>
                    </div>
                </div>
                <div className={flexStyles.flexItemWithBaseSize} >
                    <div><BoldSpan content={'Horaires d\'ouverture'} /></div>
                    <div>du Lundi au Vendredi</div>
                    <div>10h - 15h</div>
                </div>
            </HorizontalNoWrapFlex>
            <div style={{display: 'flex', height: '400px'}}>
                <MapWrapper position={position} zoom={zoom}></MapWrapper>
            </div>
        </>
    );
}