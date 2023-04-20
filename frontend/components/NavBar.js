import Link from 'next/link';
import styles from '../styles/NavBar.module.scss';
import {useEffect, useRef, useState} from "react";
import gsap from "gsap/dist/gsap";
import Menu from "@/components/Menu";

const NavBar = () => {


	const menuBtnRef = useRef(null);
	const [menuOpen, setMenuOpen] = useState(false);

	const ontoggle = () => {
		setMenuOpen(!menuOpen);
	}


	return (
		<>
			<Menu open={menuOpen} menuBtn={menuBtnRef} />
			<div className={styles.navbar} id={'navbar'}>
				<div className={styles.logo}>
					<a href="/">arthurvera</a>

				</div>
				<div className={styles.menuIcon} ref={menuBtnRef} onClick={ontoggle} >
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