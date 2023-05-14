import styles from '../styles/Projects.module.scss'

const Projects = ({ allProjectsData }) => {
    return (
    <div className={styles.projects}>
      <h3 className={styles.projects_header}>My Work</h3>
      <div className={styles.projects_all}>
      {allProjectsData.map(({ id, title, github }) => (
        <div className={styles.projects_one} key={id} >
          <p className={styles.project_title}>{title}</p>
          <p className={styles.project_title}>{github}</p>
        </div>
      ))}
      </div>

    </div>
    )
}

export default Projects