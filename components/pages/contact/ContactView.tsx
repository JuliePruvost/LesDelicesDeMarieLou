import { DescriptionWithChildren } from "components/text/Text";
import ContactForm from "./ContactForm";
import styles from './ContactView.module.scss';

export default function ContactView () {
    return (
        <div className={styles.contactForm}>
            <DescriptionWithChildren>
                <p>{"N'hésitez pas à nous contacter pour passer une commande au 06 14 19 07 XX."}</p>
                <p>Vous pouvez également nous laisser un message directement via le formulaire ci dessous :</p>
            </DescriptionWithChildren>
            <ContactForm  />
        </div>
    )
}