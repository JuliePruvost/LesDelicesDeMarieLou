import Image from "next/image";
import boutique_large from "/public/boutique_large.jpeg";
import styles from "./WideScreenImage.module.scss";
import { useEffect, useState } from "react";

export default function WideScreenImage() {
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    const height = width < 480 ? '80vh' 
        : width < 600 ? '70vh'
        : width < 800 ? '60vh'
        : width < 1000 ? '50vh'
        : '30vh'
    return (
        <div style={{ display: "block" }}>
            <Image
                src={boutique_large}
                alt="accueil les delices de marie lou"
                height={height}
                width="100vw"
                objectFit="cover"
                objectPosition="50% 30%"
                layout="responsive"
                className={styles.wideScreenImage}
            />
        </div>
    );
}
