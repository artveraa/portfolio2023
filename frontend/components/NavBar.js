import Link from 'next/link';
import styles from '../styles/NavBar.module.scss';

const NavBar = () => {
    return (
        <>
            <div className={styles.navbar} id={'navbar'}>
                <div className={styles.logo}>
                    <a href="/">arthurvera</a>

                </div>
                <div className={styles.menuIcon}>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                    <div className={styles.dot}></div>
                </div>
            </div>
        </>
    );
}

export default NavBar;