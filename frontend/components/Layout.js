import NavBar from "@/components/NavBar";
import styles from "@/styles/Layout.module.scss";
import {ScrollSmoother} from "gsap/dist/ScrollSmoother";
import {useEffect, useState} from "react";
import gsap from "gsap/dist/gsap";
import Footer from "@/components/Footer";

export default function Layout({children}) {
    if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollSmoother);
    }

    const [hasRendered, setHasRendered] = useState(false);

    useEffect(() => {
       setHasRendered(true)
    });



    useEffect(() => {
		if (hasRendered) {
			ScrollSmoother.create({
				smooth: 1,
				effect: true,
				smoothTouch: .1,
			});
		}
    }, [hasRendered])


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
