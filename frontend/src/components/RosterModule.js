import React from 'react';
import UserExpandable from './UserExpandable';
import RosterDivider from './RosterDivider';
import CreateMember from './CreateMember';
import CreateTeam from './CreateTeam';
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

    this.state = { users: [] }
  }

  componentDidMount() {
    API.get(`/user/all`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  };

  render() {
    const teams = [...new Set(this.state.users.map(u => u.team))];

    return (
      <React.Fragment>
      <row>
            <CreateTeam/>
            <CreateMember/>
      </row>

        {teams.map((team, index) => (
          <React.Fragment key={team + '1'}>
            <RosterDivider team={team} key={team} />
            {this.state.users.map(user => {
              return user.team_name === team ?
                <UserExpandable name={user.name} email={user.email} team={user.team_name} key={user.team_name + index + user.name} />
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