import NavigationBar from "./NavigationBar";
import styles from './Header.module.scss';

export default function Header() {
    return (
        <>
            <div className={styles.navigationBarWrapper}>
                <NavigationBar />
            </div>           
            <div className={styles.topHeader} />
        </>
    );
}