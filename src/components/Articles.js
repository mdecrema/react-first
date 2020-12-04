import React from 'react';

function Articles(props) {
    return(
        <div className="post">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default Articles;