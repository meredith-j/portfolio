import styles from '../styles/Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
    return (
    <div className={styles.footer}>
        <p className={styles.text}>Meredith Jonatan © 2023</p>
        <p className={styles.text}>Hire me! Learn more about my career <Link href='https://www.linkedin.com/in/meredithjonatan/'className={styles.link}>here</Link>.</p>
    </div>
    )
}

export default Footer