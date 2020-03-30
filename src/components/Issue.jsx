import React from 'react';
// import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
// import CardBody from 'react-bootstrap/Card'
// import CardColumns from 'react-bootstrap/CardColumns'
import './Issue.css';



const Issue = (props) => {

    console.log(props)
    return (
        <li className="pcontainer">
            <h3 className="cardTitle"><a href={props.issue.html_url}>{props.issue.title}</a></h3>
            <Container> <div className="scroll-box"><p>{props.issue.body}</p></div></Container>

        </li>

    )

}

export default Issue;