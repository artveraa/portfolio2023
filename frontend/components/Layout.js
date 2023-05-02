import NavBar from "@/components/NavBar";
import styles from "@/styles/Layout.module.scss";
import {ScrollSmoother} from "gsap/dist/ScrollSmoother";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {SwitchTransition, Transition} from "react-transition-group";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import gsap from "gsap";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);


export default function Layout({children}) {

	const [hasRendered, setHasRendered] = useState(false);

	useEffect(() => {
		setHasRendered(true)
	});

	useEffect(() => {
		if (hasRendered && typeof window !== 'undefined') {
			ScrollSmoother.create({
				smooth: 3,
				effect: true,
				smoothTouch: .1,
			});
		}
	}, [hasRendered])

	gsap.config({
		nullTargetWarn: false,
		trialWarn: false
	});


	return (
		<div>
			<main id={'smooth-wrapper'}>
				<div id="smooth-content">
					<NavBar/>
					{children}
					<Footer/>
				</div>
			</main>
		</div>
	);
}
