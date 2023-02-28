import styles from '../styles/Banner.module.scss';
import bg from '../public/images/bg.jpg';
import vera from '../public/vera.svg';
import Image from "next/image";
import { useEffect, useRef } from "react";
import { SplitText } from "gsap/SplitText";

const Banner = () => {

    const bannerText = useRef(null);


    useEffect(() => {
    const splitText = new SplitText(bannerText.current, {type: 'lines'});
    const lines = splitText.lines;
        lines.forEach((line) => {
            gsap.to(line, {
                backgroundPositionX: '0',
                ease: 'none',
                scrollTrigger: {
                    trigger: line,
                    start: 'top 90%',
                    end: 'bottom 10%',
                    scrub: 1,
                    markers: true
                }
                })
        });
    });

    return (
        <>
            <div className={styles.banner}>
                <div className={styles.container}>
                    <div className={styles.leftSide}>
                        <div className={styles.textContainer}>
                            <div className={styles.text} ref={bannerText}>
                                Newly graduated front-end developer based in Lyon, France. I am passionate about creating attractive and functional websites, and I have expertise in programming languages such as HTML, SCSS, JavaScript, as well as frameworks like React. My expertise also extends to accessibility, speed optimization, and cross-platform compatibility.
                            </div>
                        </div>
                    </div>
                    <div className={styles.rightSide}>
                        <div className={styles.imageContainer}>
                            <Image
                                className={styles.background}
                                src={bg}
                                alt={'background image'}
                                width={2160}
                                height={3840}
                            />
                        </div>

                        <div className={styles.logoContainer}>
                            <Image
                                className={styles.logo}
                                src={vera}
                                alt={'logo'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner;