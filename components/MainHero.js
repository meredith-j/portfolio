import styles from '../styles/MainHero.module.scss';
import linkedin from '../public/icons/linkedin-contact.png';
import githubBlue from '../public/icons/github-contact.png';
import email from '../public/icons/email-contact.png';
import Link from 'next/link';
import Image from 'next/image';

const MainHero = () => {
    return (
    <div className={styles.hero}>
        <div className={styles.hero_links}>
            <Link href="https://www.linkedin.com/in/meredithjonatan/" className={styles.hero_linkedin}>
                <Image
                    priority
                    src={linkedin}
                    className={styles.hero_link}
                    alt="Link to my LinkedIn profile"
                />
            </Link>
            <Link href="https://github.com/meredith-j" className={styles.hero_github}>
                <Image
                    priority
                    src={githubBlue}
                    className={styles.hero_link}
                    alt="Link to my Github profile"
                />
            </Link>
            <a href = "mailto: mjonatan@me.com">
                <Image
                    priority
                    src={email}
                    className={styles.hero_link}
                    alt="Send me an email"
                />
            </a>
        </div>
        <div className={styles.hero_text}>
            <h1 className={`${styles.hero_header} ${styles.hero_gradient}`}>hello,</h1>
            <h1 className={`${styles.hero_header} ${styles.hero_gradient}`}>i'm meredith</h1>
            <p className={`${styles.hero_subheader} ${styles.hero_gradient}`}>i'm a full stack software engineer</p>
        </div>
    </div>
    
    )
}

export default MainHero