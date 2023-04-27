import Head from 'next/head'
import styles from '@/styles/Home.module.scss'


export default function Home() {
  return (
    <>
      <Head>
        <title>Meredith Jonatan</title>
        <meta name="description" content="Welcome to my portfolio!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main}`}>
        <h1 className={styles.header}>FUCKING LATO!</h1>
      </main>
    </>
  )
}
