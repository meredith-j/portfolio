import Link from 'next/link'
import styles from '../styles/Projects.module.scss'
import githubLogo from '../public/icons/github.svg'

const Projects = ({ allProjectsData }) => {
    return (
    <div className={styles.projects}>
      <h3 className={styles.projects_header}>My Work</h3>
      <div className={styles.projects_all}>
      {allProjectsData.map(({ id, title, image, github, techStack, liveUrl, details }) => (
        <div className={styles.projects_one} key={id}>
          <h4 className={styles.project_title}>{title}</h4>
          <img
              src={image}
              className={styles.projects_image}
              alt={`Screenshot of ${title}`}
              />
          <div className={styles.projects_links}>
            <Link
              href={github}>
              <img
                src={githubLogo}
                className={styles.projects_github}
                />
            </Link>
            <Link
              href={liveUrl}>
              <p className={styles.projects_live}>Visit the Site!</p>
            </Link>
          </div>
          <div className={styles.projects_info}>
            <p className={styles.projects_stack}>{techStack}</p>
            <p className={styles.projects_description}>{details}</p>
          </div>
        </div>
      ))}
      </div>

    </div>
    )
}

export default Projects