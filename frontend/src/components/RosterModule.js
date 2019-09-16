import React from 'react';
import UserExpandable from './UserExpandable';
import RosterDivider from './RosterDivider';
import { withStyles } from '@material-ui/styles';
import API from '../API';

const styles = theme => ({
  nothing: {
    color: "black",
  }
})

class RosterModule extends React.Component {
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
    const teams = [...new Set(this.state.members.map(u => u.team))];

    return (
      <React.Fragment>

        {teams.map((team, index) => (
          <React.Fragment>
            <RosterDivider team={team} />
            {this.state.members.map(member => {
              return member.team === team ?
                <UserExpandable name={member.name} email={member.email} team={member.team} />
              :
                ""
            })}
          </React.Fragment>
        ))}

      </React.Fragment>
    );
  }
}

export default withStyles(styles)(RosterModule);