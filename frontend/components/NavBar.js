import Link from 'next/link';
import styles from '../styles/NavBar.module.scss';

const NavBar = () => {
    return (
        <>
            <div className={styles.navbar} id={'navbar'}>
                <div className={styles.logo}>
                    <p>arthurvera</p>
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