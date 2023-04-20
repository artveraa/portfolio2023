"use client";
import styles from '@/styles/Menu.module.scss';
import {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import Link from "next/link";

const Menu = ({open, menuBtn}) => {

	const [hasRendered, setHasRendered] = useState(false);

	useEffect(() => {
		setHasRendered(true)
	});



	const menuContainerRef = useRef(null);

	gsap.set(menuContainerRef.current, {y: '-100%', ease: 'power2.out'});
	gsap.set(menuBtn.current, {rotate: 90, ease: 'power2.out'});

	const tl = gsap.timeline({
		paused: true,
		reversed: true,
	});

	tl.to(menuBtn.current, {duration: 0.5, rotate: 45, ease: 'power2.out'})
		.to(menuContainerRef.current, {duration: 0.5, y: 0, ease: 'power2.out'}, '-=0.5')


	useEffect(() => {
		if (open) {
			tl.play();
		} else {
			tl.reverse();
		}
	}, [open]);

	return (
		<div className={styles.menuContainer} id={'menu'} ref={menuContainerRef}>
			<div className={styles.menuItems}>
				<div className={styles.menuItem + ' menu-item'}>
					<a href={'/'}>Home</a>
				</div>
				<div className={styles.menuItem + ' menu-item'}>
					<a href={'/about'}>About</a>
				</div>
				<div className={styles.menuItem + ' menu-item'}>
					<a href={'/projects'}>Projects</a>
				</div>
				<div className={styles.menuItem + ' menu-item'}>
					<a href={'/contact'}>Contact</a>
				</div>
			</div>
		</div>
	);
}

export default Menu;