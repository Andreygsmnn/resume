import React from 'react';
import styles from '../StyleModules/PortfolioReact.module.css';
import PortfolioReactPost from './PortfolioReactPost';


function PortfolioReact({ projects }) {
    let contentReact = projects.map((e) => <PortfolioReactPost title={e.title}
        description={e.description}
        reference={e.reference}
        key={e.id} />)

    return (

        <div className={styles.container_react_portfolio}>
            <h1>Приложения сделанные на библиотеке React</h1>
            <div className={styles.content_block}>{contentReact}</div>
        </div>
    )
}
export default PortfolioReact;