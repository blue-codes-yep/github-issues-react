import React, { Component } from 'react';

class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: [],
        };
    }

    componentDidMount() {
        fetch("https://api.github.com/repos/facebook/create-react-app/issues")
            .then(res => res.json())
            .then((result) => {
                console.log(result[0])
                this.setState({
                    issues: result
                });
                console.log(this.state);
            });

    }
    render() {
        const { issues } = this.state;
        return (
            <div>
                <ul>

                    {issues.length > 0 ? (
                        issues.map(issue => (
                            <li key={issue.id}>
                                <Issue title={title} />
                            </li>
                        ))
                    ) : (
                            <li>No Data</li>
                        )
                    }
                </ul>
            </div>
        )
    }
}



export default IssueList;