import React from 'react';


const Issue = (props) => {

    console.log(props)
    return (
        <li>
            <h3><a href={props.issue.html_url}>{props.issue.title}</a></h3>
            <p>{props.issue.body}</p>

        </li>

    )

}

export default Issue;