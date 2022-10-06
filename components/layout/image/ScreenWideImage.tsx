import styles from './ScreenWideImage.module.scss';
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { CSSProperties } from 'react';

type ImageProps = {
    width?: number | string,
    maxWidth?: number | string,
    height?: number | string,
    maxHeight?: number | string,
} & NextImageProps;

const ScreenWideImage = ({width, maxWidth, height, maxHeight, ...props}: ImageProps) => {

    const containerStyle: CSSProperties = {
        width, 
        maxWidth, 
        height, 
        maxHeight
    };
    /*containerStyle.width = width ? width : '100%';
    containerStyle.maxWidth = maxWidth ? maxWidth : '100%';*/
    const nextImageProps = {
        layout: props.layout ?? 'fill',
        ... props
    };

    return (
        <div className={styles.imageContainer} style={containerStyle}>
            <NextImage className={styles.image} {...nextImageProps} priority
            />
        </div>
    );
}

export default ScreenWideImage;