import Description from "../../text/Description";

const desctiption = '« Aux Délices de Marie Lou, nous souhaitons vous faire partager toute la richesse et la gourmandise de la cuisine antillaise, élaborée à partir de produits frais, locaux, de saison et en grande partie issus de l’agriculture biologique. »';

export default function LesDelicesDescription() {
    return (
        <Description content={desctiption} />
    );
}