import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import MainHero from '@/components/MainHero'


export default function Home() {
  return (
    <>
      <Head>
        <title>Meredith Jonatan</title>
        <meta name="description" content="Welcome to my portfolio!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <MainHero />
      </div>
    </>
  )
}