import React from 'react';
import PortfolioLayoutPost from './PortfolioLayoutPost';
import PortfolioComponent from './PortfolioComponent';


function PortfolioLayout({layouts}) {
    let contentLayout = layouts.map((e) => <PortfolioLayoutPost title={e.title}
                                                           description={e.description}
                                                           reference={e.reference}
                                                           key={e.id} />)

    return (
        <div>
            
            <div>{contentLayout}</div>
        </div>
    )
}
export default PortfolioLayout;