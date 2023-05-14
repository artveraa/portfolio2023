import Link from 'next/link';
import styles from '../styles/NavBar.module.scss';
import logo from '../public/images/logo.png';
import {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import Image from "next/image";
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
					<a href="/">
						<Image src={logo} alt="logo" width={131} height={37}/>
					</a>

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