import NavigationBar from "./NavigationBar";
import styles from './Header.module.scss';

export default function Header() {
    return (
        <>
            <div className="top-header" />
            <div className={styles.navigationBarWrapper}>
                <NavigationBar />
            </div>           
        </>
    );
}