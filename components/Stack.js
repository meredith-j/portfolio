import styles from '../styles/Stack.module.scss'
import Image from 'next/image'
import htmlLogo from '../public/icons/html.svg'
import cssLogo from '../public/icons/css.svg'
import mysqlLogo from '../public/icons/mysql.svg'
import nextLogo from '../public/icons/next.svg'
import nodeLogo from '../public/icons/node.svg'
import reactLogo from '../public/icons/react.svg'
import sassLogo from '../public/icons/sass.svg'
import vercelLogo from '../public/icons/vercel.svg'
import typescriptLogo from '../public/icons/typescript.svg'
import javascriptLogo from '../public/icons/javascript.svg'
import figmaLogo from '../public/icons/figma.svg'
import expressLogo from '../public/icons/express.svg'
import gitLogo from '../public/icons/git.svg'
import githubLogo from '../public/icons/github.svg'
import jiraLogo from '../public/icons/jira.svg'
import knexLogo from '../public/icons/knex.svg'
import vscodeLogo from '../public/icons/vscode.svg'

const Stack = () => {
    return (
    <div className={styles.stack}>
        <div className={styles.stack_copy}>
            <h3 className={styles.stack_header}>My Stack</h3>
        </div> 
        <div className={styles.stack_logos}>
            <Image
                priority
                src={reactLogo}
                className={styles.stack_logo}
                alt="React logo"
                />
            <Image
                priority
                src={nodeLogo}
                className={styles.stack_logo}
                alt="Node logo"
                />
            <Image
                priority
                src={expressLogo}
                className={styles.stack_logo}
                alt="Express logo"
                />
            <Image
                priority
                src={knexLogo}
                className={styles.stack_logo}
                alt="Knex logo"
                />
            <Image
                priority
                src={mysqlLogo}
                className={styles.stack_logo}
                alt="MySQL logo"
                />
            <Image
                priority
                src={javascriptLogo}
                className={styles.stack_logo}
                alt="JavaScript logo"
                />
            <Image
                priority
                src={typescriptLogo}
                className={styles.stack_logo}
                alt="Typescript logo"
                />
            <Image
                priority
                src={sassLogo}
                className={styles.stack_logo}
                alt="Sass logo"
                />
            <Image
                priority
                src={htmlLogo}
                className={styles.stack_logo}
                alt="HTML logo"
                />            
            <Image
                priority
                src={cssLogo}
                className={styles.stack_logo}
                alt="CSS logo"
                />
            <Image
                priority
                src={githubLogo}
                className={styles.stack_logo}
                alt="Github logo"
                />
            <Image
                priority
                src={gitLogo}
                className={styles.stack_logo}
                alt="Git logo"
                /> 
            <Image
                priority
                src={jiraLogo}
                className={styles.stack_logo}
                alt="Jira logo"
                />    
            <Image
                priority
                src={figmaLogo}
                className={styles.stack_logo}
                alt="Figma logo"
                />
            <Image
                priority
                src={vscodeLogo}
                className={styles.stack_logo}
                alt="VS Code logo"
                />
            <Image
                priority
                src={nextLogo}
                className={styles.stack_logo}
                alt="Next logo"
                />
            <Image
                priority
                src={vercelLogo}
                className={styles.stack_logo}
                alt="Vercel logo"
                />
        </div>
    </div>
    )
}

export default Stack