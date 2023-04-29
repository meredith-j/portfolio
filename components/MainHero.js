import styles from '../styles/MainHero.module.scss'

const MainHero = () => {
    return (
    <div className={styles.hero}>
        <h1 className={`${styles.hero_header} ${styles.hero_gradient}`}>hello,</h1>
        <h1 className={`${styles.hero_header} ${styles.hero_gradient}`}>i'm meredith</h1>
        <p className={`${styles.hero_subheader} ${styles.hero_gradient}`}>i'm a full stack software engineer</p>
    </div>
    )
}

export default MainHero