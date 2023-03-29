import styles from '../styles/Skills.module.scss';
import {useEffect, useState, useRef} from "react";
import gsap from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import {SplitText} from "gsap/dist/SplitText";


const Skills = (props) => {

    if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger, SplitText);
    }

    const [hasRendered, setHasRendered] = useState(false);

    useEffect(() => {
        setHasRendered(true);
    });

    const skillsTitleRef = useRef(null);
    const skillsContainerRef = useRef(null);
    const skillRef = useRef(null);

    useEffect(() => {

        if (hasRendered) {
            ScrollTrigger.create({
                trigger: skillsTitleRef.current,
                start: 'top 5%',
                end: '+=1000',
                scrub: true,
                pin: true,
                pinSpacing: false,
                // markers: true,
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: skillsContainerRef.current,
                    start: 'top 70%',
                    end: '+=1000',
                    scrub: true,
                    markers: true,
                }
            });

            const skills = document.querySelectorAll('.skill');

            gsap.set(skills, {autoAlpha: 0, x: -70});

            tl.to(skills, {autoAlpha: 1, x: 0, duration: 1, ease: "power2.out", stagger: .2})


        }

    }, [hasRendered]);


    return (
        <div className={styles.skillsLayout}>
            <h2 ref={skillsTitleRef}>Skills</h2>
            <div className={styles.skillsContainer} ref={skillsContainerRef}>

                {
                    props.skills.map((skill) => {
                        console.log(skill)

                        return (
                            <div className={styles.skill + ' skill'} ref={skillRef} key={skill.id}>
                                <h3>{skill.data.title}</h3>
                                <p>{skill.data.content[0].text}</p>
                            </div>
                        )
                        console.log(skill)
                    })
                }
                {/*<div className={styles.skill + ' skill'} ref={skillRef}>*/}
                {/*    <h3>Front-end development</h3>*/}
                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit ornare enim.*/}
                {/*        Pellentesque augue velit, ornare a tortor ut, venenatis rhoncus augue. Mauris lacinia in odio et*/}
                {/*        blandit. Duis nunc neque, ultricies vestibulum mattis nec, accumsan vel leo. Fusce tortor urna,*/}
                {/*        varius a mollis eu, finibus et ex. Donec nec ligula id massa sollicitudin luctus gravida eget*/}
                {/*        eros.</p>*/}
                {/*</div>*/}
                {/*<div className={styles.skill + ' skill'} ref={skillRef}>*/}
                {/*    <h3>Webdesign</h3>*/}
                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit ornare enim.*/}
                {/*        Pellentesque augue velit, ornare a tortor ut, venenatis rhoncus augue. Mauris lacinia in odio et*/}
                {/*        blandit. Duis nunc neque, ultricies vestibulum mattis nec, accumsan vel leo. Fusce tortor urna,*/}
                {/*        varius a mollis eu, finibus et ex. Donec nec ligula id massa sollicitudin luctus gravida eget*/}
                {/*        eros.</p>*/}
                {/*</div>*/}
                {/*<div className={styles.skill + ' skill'} ref={skillRef}>*/}
                {/*    <h3>Web writing</h3>*/}
                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit ornare enim.*/}
                {/*        Pellentesque augue velit, ornare a tortor ut, venenatis rhoncus augue. Mauris lacinia in odio et*/}
                {/*        blandit. Duis nunc neque, ultricies vestibulum mattis nec, accumsan vel leo. Fusce tortor urna,*/}
                {/*        varius a mollis eu, finibus et ex. Donec nec ligula id massa sollicitudin luctus gravida eget*/}
                {/*        eros.</p>*/}
                {/*</div>*/}
                {/*<div className={styles.skill + ' skill'} ref={skillRef}>*/}
                {/*    <h3>Graphic design</h3>*/}
                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit ornare enim.*/}
                {/*        Pellentesque augue velit, ornare a tortor ut, venenatis rhoncus augue. Mauris lacinia in odio et*/}
                {/*        blandit. Duis nunc neque, ultricies vestibulum mattis nec, accumsan vel leo. Fusce tortor urna,*/}
                {/*        varius a mollis eu, finibus et ex. Donec nec ligula id massa sollicitudin luctus gravida eget*/}
                {/*        eros.</p>*/}
                {/*</div>*/}
                <h3></h3>
                <p></p>
            </div>
        </div>
    )
}

export default Skills;