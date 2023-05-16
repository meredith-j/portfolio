import Head from 'next/head'
import MainHero from '@/components/MainHero'
import Bio from '/components/bio'
import Stack from '@/components/Stack'
import Projects from '@/components/Projects'
import { getSortedProjectsData } from '@/lib/projects'

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}



export default function Home({ allProjectsData }) {
  return (
    <>
      <Head>
        <title>Meredith Jonatan | Software Engineer</title>
        <meta name="description" content="Welcome to my portfolio!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/meredith-photo.jpg" />
      </Head>
        <div className='center'>
          <div className='max-width'>
          <MainHero />
          <Bio />
          <Projects allProjectsData={allProjectsData} />
          <Stack />
          </div>
        </div>
    </>
  )
}