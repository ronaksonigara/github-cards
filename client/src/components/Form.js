import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
    }
  }
  handleInputChange = (event) => {
    this.setState({
      userName: event.currentTarget.value
    })
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSumit(res.data);
    // console.log(res.data)
    this.setState({
      userName: ''
    });
  }
  render() {
    return (
      <form className="github-app__form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="GitHub username" value={this.state.userName} onChange={this.handleInputChange} />
        <button>Add card</button>
      </form>
    )
  }
}

export default Form;