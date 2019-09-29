import React from 'react';
import CardWrapper from './CardWrapper';
import Form from './Form';

class GitHub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: []
    }
  }
  newProfile = (newProfileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, newProfileData]
    }))
  }
  render() {
    const {
      profiles
    } = this.state;

    return (
      <>
        <h1 className="github-app__primary-title">The GitHub Card App</h1>
        <Form onSumit={this.newProfile} />
        <CardWrapper profiles={profiles} />
      </>
    );
  }
}

export default GitHub;