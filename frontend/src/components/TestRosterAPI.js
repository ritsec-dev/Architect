import React from 'react';
import Card from '@material-ui/core/Card'
import API from '../utils/API'

class TestRosterAPI extends React.Component {
    async componentDidMount() {
      try {
        let helloData = await API.get("/hello");
        this.setState({hello: helloData});
      } catch (e) {
        console.log(`Axios request failed: ${e}`)
      }
    }

    render() {
      const {hello} = this.state || {};

      return (
        <div>
          <Card><p>Sup Nerds {hello}</p></Card>
        </div>
      );
    }
  }
  
  export default TestRosterAPI;