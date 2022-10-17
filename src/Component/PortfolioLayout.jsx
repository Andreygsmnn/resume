import React from 'react';
import styles from '../StyleModules/PortfolioLayout.module.css';
import PortfolioLayoutPost from './PortfolioLayoutPost';


function PortfolioLayout({ layouts }) {
    let contentLayout = layouts.map((e) => <PortfolioLayoutPost title={e.title}
        description={e.description}
        reference={e.reference}
        key={e.id} />)

    return (
        <div className={styles.container_layout_portfolio}>
            <h1>Верстка по макетам</h1>
            <div className={styles.content_block}>{contentLayout}</div>
        </div>
    )
}
export default PortfolioLayout;