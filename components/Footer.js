import styles from '../styles/Footer.module.scss';

const Footer = () => {
    return (
    <div className={styles.footer}>
        <p className={styles.text}>Hire me! <a href='https://www.linkedin.com/in/meredithjonatan/'className={styles.link}>Learn more</a> about my career. See the code for <a href='https://github.com/meredith-j/portfolio'className={styles.link}>this website</a>.</p>
        <p className={styles.text}>Meredith Jonatan © 2024</p>
    </div>
    )
}

export default Footer