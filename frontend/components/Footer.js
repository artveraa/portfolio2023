import styles from '@/styles/Footer.module.scss';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__left}>
                    <Link href={"mailto:arthurvera96@gmail.com"}>Get in touch</Link>
                </div>

                <div className={styles.footer__right}>
                    <Link href={"https://www.linkedin.com/in/arthurvera/"}>LinkedIn</Link>
                    <Link href={""}>Github</Link>
                    <Link href={""}>Twitter</Link>
                </div>
            </div>
            <div className={styles.footer__bottom}>
                <div className={styles.surname}>Arthur</div>
                <div className={styles.name}>Vera</div>
            </div>
        </footer>
    );
}

export default Footer;
