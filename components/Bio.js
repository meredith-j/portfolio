import styles from '../styles/Bio.module.scss'
import Image from 'next/image'
import profileImg from '../public/images/meredith-photo.jpg'
import Link from 'next/link'
import githubBlue from '../public/icons/github-contact.svg'
import linkedin from '../public/icons/linkedin-contact.svg'
import email from '../public/icons/email-contact.svg'

const Bio = () => {

    return (
        <div className={styles.bio}>
            <div className={styles.bio_article}>
                <div className={styles.bio_sources}>
                    <div className={styles.bio_photoContainer}>
                        <Image
                        priority
                        src={profileImg}
                        className={styles.bio_photo}
                        alt="Meredith has curly, shoulder-length hair and bangs framing their face as they look at the camera smiling"
                        />
                    </div>
                    <div className={styles.bio_links_tablet}>
                        <Link href="https://www.linkedin.com/in/meredithjonatan/" className={styles.bio_linkedin}>
                            <Image
                                priority
                                src={linkedin}
                                className={styles.bio_link}
                                alt="Link to my Linked profile"
                            />
                        </Link>
                        <Link href="https://github.com/meredith-j" className={styles.bio_github}>
                            <Image
                                priority
                                src={githubBlue}
                                className={styles.bio_link}
                                alt="Link to my Github profile"
                            />
                        </Link>
                        <a href = "mailto: mjonatan@me.com">
                            <Image
                                priority
                                src={email}
                                className={styles.bio_link}
                                alt="Send me an email"
                            />
                        </a>
                    </div>
                </div>
                <div className={styles.bio_content}>
                    <p className={styles.bio_paragraph}>As a recent graduate from a web development boot camp, I'm thrilled to embark on my new journey as a web developer. After spending a decade in retail and office management, I rediscovered my love for coding in 2020, a hobby I first discovered when tinkering with HTML and CSS on Neopets as a kid.</p>

                    <p className={styles.bio_paragraph}>For me, coding is a beautiful mix of logic and creative problem-solving, and I find great satisfaction in building tangible products that people can use. I'm excited to make a difference in the digital world and contribute to the development of beautiful and functional websites.</p>

                    <p className={styles.bio_paragraph}>When I'm not coding, I love exploring the great outdoors, practicing yoga, and experimenting with new recipes in the kitchen. I believe that a healthy work-life balance is essential to success and happiness, and I always strive to maintain that balance.</p>
                </div>
                <div className={styles.bio_links_mobile}>
                        <Link href="https://www.linkedin.com/in/meredithjonatan/" className={styles.bio_linkedin}>
                            <Image
                                priority
                                src={linkedin}
                                className={styles.bio_link}
                                alt="Link to my Linked profile"
                            />
                        </Link>
                        <Link href="https://github.com/meredith-j" className={styles.bio_github}>
                            <Image
                                priority
                                src={githubBlue}
                                className={styles.bio_link}
                                alt="Link to my Github profile"
                            />
                        </Link>
                        <a href = "mailto: mjonatan@me.com">
                            <Image
                                priority
                                src={email}
                                className={styles.bio_link}
                                alt="Send me an email"
                            />
                        </a>
                </div>
            </div>
        </div>
    )
}

export default Bio