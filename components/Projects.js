import Link from 'next/link'
import styles from '../styles/Projects.module.scss'
import githubLogo from '../public/icons/githubprojects.svg'
import websiteUrl from '../public/icons/websiteurl.svg'
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
          { github === "" ? "" : (
                  <Link
                  href={github}
                  className={`${github} === "" ? ${styles.projects_link} : ${styles.projects_link}`}>
                  <Image
                    priority
                    src={githubLogo}
                    alt="Github link to code"
                    className={styles.projects_link_image}
                    />
                  <p className={styles.projects_link_text}>Code Base</p>
                </Link>
                )}
          { liveUrl === "" ? "" : (
                  <Link
                  href={liveUrl}
                  className={styles.projects_link}>
                    <Image
                    priority
                    src={websiteUrl}
                    alt={`Link to ${title}`}
                    className={styles.projects_link_image}
                    />
                    <p className={styles.projects_link_text}>Live Site</p>
                </Link>
                )}
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