import ContactForm from "./ContactForm";
import styles from './ContactView.module.scss';

export default function ContactView () {
    return (
        <div className={styles.contactForm}>
            <h1 className={styles.pageTitle}>Laissez nous un message</h1>
            <ContactForm  />
        </div>
    )
}