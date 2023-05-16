import Link from 'next/link'
import styles from '../styles/Projects.module.scss'
import githubLogo from '../public/icons/githubprojects.svg'
import Image from 'next/image'

const Projects = ({ allProjectsData }) => {
    return (
    <div className={styles.projects}>
      <h3 className={styles.projects_header}>My Work</h3>
      <div className={styles.projects_all}>
      {allProjectsData.map(({ id, title, image, github, techStack, liveUrl, details }) => (
        <div className={styles.projects_one} key={id}>
          <h4 className={styles.projects_title}>{title}</h4>
          <img
              src={image}
              className={styles.projects_image}
              alt={`Screenshot of ${title}`}
              />
          <div className={styles.projects_links}>
            <Link
              href={github}
              className={`${styles.projects_githublink} ${styles.projects_link}`}>
              <Image
                src={githubLogo}
                alt="Github link to code"
                className={styles.projects_github}
                />
              <p className={styles.projects_githubtext}>See the code!</p>
            </Link>
            {/* note: none of these are live except the portfolio */}
            {/* <Link
              href={liveUrl}
              className={styles.projects_link}>
              <p className={styles.projects_live}>Visit the Site!</p>
            </Link> */}
          </div>
          <div className={styles.projects_info}>
            <p className={styles.projects_description}>{details}</p>
            <p className={styles.projects_techtitle}>Tech Stack: <span className={styles.projects_stack}>{techStack}</span></p>
          </div>
        </div>
      ))}
      </div>

    </div>
    )
}

export default Projects