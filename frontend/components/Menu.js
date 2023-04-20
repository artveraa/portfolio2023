import styles from '@/styles/Menu.module.scss';
import {useEffect, useRef} from "react";
import gsap from "gsap";

const Menu = ({open, menuBtn}) => {
	const menuContainerRef = useRef(null);
	const titleRef = useRef(null);

	gsap.set(menuContainerRef.current, {y: '-100%', ease: 'power2.out'});
	gsap.set(menuBtn.current, {rotate: 90, ease: 'power2.out'});
	gsap.set(titleRef.current, {autoAlpha: 0, ease: 'power2.out'});

	const tl = gsap.timeline({
		paused: true,
		reversed: true,
	});

	tl.to(menuBtn.current, {duration: 0.5, rotate: 45, ease: 'power2.out'})
	.to(menuContainerRef.current, {duration: 0.5, y: 0, ease: 'power2.out'}, '-=0.5')
	.to(titleRef.current, {duration: 0.5, autoAlpha: 1, delay: .5,  ease: 'power2.out'}, );



	useEffect(() => {
		if (open) {
			tl.play();
		} else {
			tl.reverse();
		}
	}, [open]);

	return (
		<div className={styles.menuContainer} id={'menu'} ref={menuContainerRef}>
			<h1 ref={titleRef}>Menu</h1>
		</div>
	);
}

export default Menu;