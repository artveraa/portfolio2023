import Link from 'next/link';
import styles from '../styles/NavBar.module.scss';
import {useEffect, useRef, useState} from "react";
import gsap from "gsap";
const NavBar = () => {


	// const menuBtnRef = useRef(null);
	// const [menuOpen, setMenuOpen] = useState(false);
	//
	// const ontoggle = () => {
	// 	setMenuOpen(!menuOpen);
	// }


	return (
		<>

			<div className={styles.navbar} id={'navbar'}>
				<div className={styles.logo}>
					<a href="/">arthurvera</a>

				</div>
				{/*<div className={styles.menuIcon} ref={menuBtnRef} onClick={ontoggle} >*/}
				{/*	<div className={styles.dot}></div>*/}
				{/*	<div className={styles.dot}></div>*/}
				{/*	<div className={styles.dot}></div>*/}
				{/*	<div className={styles.dot}></div>*/}
				{/*	<div className={styles.dot}></div>*/}
				{/*	<div className={styles.dot}></div>*/}
				{/*	<div className={styles.dot}></div>*/}
				{/*	<div className={styles.dot}></div>*/}
				{/*	<div className={styles.dot}></div>*/}
				{/*</div>*/}
				{/*<div className={styles.aboutBtn}>*/}
				{/*	<Link href="/about">*/}
				{/*		À propos*/}
				{/*	</Link>*/}
				{/*</div>*/}
			</div>
		</>
	);
}

export default NavBar;