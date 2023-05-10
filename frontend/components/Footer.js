import styles from '@/styles/Footer.module.scss';
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

}


const Footer = () => {

    // const [hasRendered, setHasRendered] = useState(false);
    //
    // useEffect(() => {
    //     setHasRendered(true)
    // });



    const footerRef = useRef(null);
    const surnameRef = useRef(null);
    const veraRef = useRef(null);
    const getInTouchRef = useRef(null);
    // const socialItems = document.querySelectorAll('.social-item');



    useEffect(() => {

        // if (hasRendered) {
            gsap.set(surnameRef.current, {x: '-100%', ease: 'power2.out', autoAlpha: 0, scale: 2});
            gsap.set(veraRef.current, {x: '100%', ease: 'power2.out', autoAlpha: 0, scale: 2});
            // gsap.set(getInTouchRef.current, {ease: 'power2.out', autoAlpha: 0});
            // gsap.set(socialItems, {autoAlpha: 0, x: 70});


            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 80%',
                    end: 'bottom 30%',
                    scrub: true,
                    // markers: true,
                }
            });

            tl.to(surnameRef.current, {x: '0%', duration: 1, ease: 'power2.out', autoAlpha: 1, scale: 1})
                .to(veraRef.current, {x: '0%', duration: 1, ease: 'power2.out', autoAlpha: 1, scale: 1}, '-=1')
                .to(getInTouchRef.current, {autoAlpha: 1, duration: 1, ease: 'power2.out'}, '+=.5')
            // .to(socialItems, {autoAlpha: 1, x: 0, duration: 1, ease: 'power2.out', stagger: .2})
        // }



    }, []);

    return (
        <footer className={styles.footer} ref={footerRef}>
            <div className={styles.footer__container}>
                <div className={styles.footer__left}>
                    <Link href={"mailto:arthurvera96@gmail.com"} ref={getInTouchRef}>Get in touch <span>👋</span></Link>
                </div>

                <div className={styles.footer__right}>
                    <Link href={"https://www.linkedin.com/in/arthurvera/"} className={'social-item'}>LinkedIn</Link>
                    <Link href={""} className={'social-item'}>Github</Link>
                    <Link href={""} className={'social-item'}>Twitter</Link>
                </div>
            </div>
            <div className={styles.footer__bottom}>
                <div className={styles.surname} ref={surnameRef}>Arthur</div>
                <div className={styles.name} ref={veraRef}>Vera</div>
            </div>
        </footer>
    );
}

export default Footer;
