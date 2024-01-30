import styles from '../styles/Footer.module.scss';

const Footer = () => {
    return (
    <div className={styles.footer}>
        <p className={styles.text}>Meredith Jonatan © 2023</p>
        <p className={styles.text}>Hire me! <a href='https://www.linkedin.com/in/meredithjonatan/'className={styles.link}>Learn more</a> about my career.</p>
    </div>
    )
}

export default Footer