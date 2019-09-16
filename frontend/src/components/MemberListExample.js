import React from 'react';
import Card from '@material-ui/core/Card';
import API from '../API';

class MemberListExample extends React.Component {
    constructor() {
        super();

        this.state = { members: [] }
    }

    componentDidMount() {
        API.get(`/members`)
        .then(res => {
            const members = res.data;
            this.setState({ members });
        })
    };

    render() {
        return (
            <React.Fragment>
                { this.state.members.map(member => <Card>{member.name}</Card>) }
            </React.Fragment>
        )
    }
}

export default MemberListExample;