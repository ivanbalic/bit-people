import React, { Fragment } from "react";
import './NoResult.css';

const NoResult = () => {
    return (
        <Fragment>
            <div className='noresult'>
                <i className="material-icons large">sentiment_very_dissatisfied</i>
            </div>
            <p className='resultMessage'>We couldn't find any people matching your search</p>
        </Fragment>
    )
}

export { NoResult };