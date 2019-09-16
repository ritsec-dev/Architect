import React from 'react';
import UserExpandable from './UserExpandable';
import RosterDivider from './RosterDivider';
import { withStyles } from '@material-ui/styles';

const styles = theme => ({
  nothing: {
    color: "black",
  }
})

class RosterModule extends React.Component {

  render() {
    const userData = {
      users: [
        {
          name: "Chris Vantine",
          team: "Black Team",
          email: "cav9225@rit.edu",
        },
        {
          name: "Sean Newman",
          team: "White Team",
          email: "something@rit.edu",
        },
        {
          name: "Jack McKenna",
          team: "Black Team",
          email: "someoneelse@rit.edu",
        }
      ]
    };

    const users = userData.users;
    const teams = [...new Set(users.map(u => u.team))];

    const { classes } = this.props;

    return (
      <React.Fragment>

        {teams.map((team, index) => (
          <React.Fragment>
            <RosterDivider team={team} />
            {users.map(user => {
              return user.team === team ?
                <UserExpandable name={user.name} email={user.email} team={user.team} />
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