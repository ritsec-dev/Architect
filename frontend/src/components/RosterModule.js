import React from 'react';
import UserExpandable from './UserExpandable';
import RosterDivider from './RosterDivider';
import CreateMemberButton from './CreateMemberButton';
import { withStyles } from '@material-ui/styles';

import API from '../API';

const styles = theme => ({
  createMemberButton: {
    aignItems: "flex-end",
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
    const { classes } = this.props;

    return (
      <React.Fragment>
      <CreateMemberButton />

        {teams.map((team, index) => (
          <React.Fragment key={team + '1'}>
            <RosterDivider team={team} key={team} />
            {this.state.users.map(user => {
              return user.team === team ?
                <UserExpandable name={user.name} email={user.email} team={user.team} role={user.role} phone={user.phone} key={user.team + index + user.name} />
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
