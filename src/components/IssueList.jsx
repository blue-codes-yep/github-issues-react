import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Issue from './IssueDetail'


class IssueList extends Component {
    state = {
        issues: []
    }

    componentDidMount() {
        fetch("https://api.github.com/repos/facebook/create-react-app/issues")
            .then(res => res.json())
            .then((result) => {

                this.setState({
                    issues: result
                });

            });

    }
    render() {
        const { issues } = this.state;
        return (
            <div>
                <ul>
                    {issues.length > 0 ? (
                        issues.map(issue => (

                            <Issue issue={issue} key={issue.id} />
                        ))

                    ) : (
                            <li>No Data</li>
                        )

                    }
                    <Link Link to={`/issue/${issues.number}`}>View Issue</Link>
                </ul>
            </div>

        )

    }
}



export default IssueList;