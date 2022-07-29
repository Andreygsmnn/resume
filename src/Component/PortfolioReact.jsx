import React from 'react';
import PortfolioReactPost from './PortfolioReactPost';
import PortfolioComponent from './PortfolioComponent';


function PortfolioReact({projects}) {
    let contentReact = projects.map((e) => <PortfolioReactPost title={e.title}
                                                               description={e.description}
                                                               reference={e.reference}
                                                               key={e.id} />)

    return (
        <div>
            
            <div>
                {contentReact}
            </div>
        </div>
    )
}
export default PortfolioReact;