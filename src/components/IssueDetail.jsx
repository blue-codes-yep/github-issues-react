import React from 'react';
import Container from 'react-bootstrap/Container'
import { Component } from 'react';
import './Issue.css';



class IssueDetail extends Component {
    state = {
        issueDetails: []
    };

    async componentDidMount() {
        const { issue_number } = this.props.match.params;
        fetch(`https://api.github.com/repos/snes9xgit/snes9x/issues/${issue_number}`)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    issueDetails: result
                });
                console.log(result);
            });
    }

    render() {
        const { issueDetails } = this.state;

        return (
            <li className="pcontainer" >
                <h3 className="cardTitle"><a href={issueDetails.html_url}>{issueDetails.title}</a></h3>
                <Container> <div className="scroll-box"><p>{issueDetails.body}</p></div></Container>

            </li>

        )
    }
}

export default IssueDetail;