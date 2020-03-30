import React from 'react';
import Card from 'react-bootstrap/Card';
// import CardBody from 'react-bootstrap/Card'
// import CardColumns from 'react-bootstrap/CardColumns'
import './Issue.css';



const Issue = (props) => {

    console.log(props)
    return (
        <li className="pcontainer">
            <Card><h3 className="cardTitle"><a href={props.issue.html_url}>{props.issue.title}</a></h3>
                <Container-small> <div className="scroll-box"><p>{props.issue.body}</p></div></Container-small>
            </Card>
        </li>

    )

}

export default Issue;