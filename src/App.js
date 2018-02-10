import React, { Component } from 'react';
import { Radio, Checkbox, ControlLabel, FormControl, Button } from 'react-bootstrap'
import './vendor/css/bootstrap.css'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      name: '',
      answers: {
        q1: '',
        q2: '',
        q3: '',
        q4: ''
      },
      submitted: false
    }
    this.handleQuestionChange = this.handleQuestionChange.bind(this)
  }

  handleNameSubmit(event) {
    event.preventDefault()
    this.setState({ name: this.input.value })
  }

  handleQuestionSubmit(event) {
    console.log('active')
  }

  handleQuestionChange(event) {
    var answers = this.state.answers;
    if (event.target.name === 'q1') {
      answers.q1 = event.target.value
    } else if (event.target.name === 'q2') {
      answers.q2 = event.target.value
    } else if ((event.target.name === 'q3')) {
      answers.q3 = event.target.value
    } else {
      answers.q4 = event.target.value
    }
    this.setState({ answers })
    console.log(this.state.answers)
  }

  render() {
    var user, questions
    if (this.state.name && !this.state.submitted) {

      user = <h4>WELCOME {this.state.name}</h4>

      questions = (<span>
        <h3>?</h3>
        <form onSubmit={this.handleQuestionSubmit.bind(this)}>
          <div className="main">
            <ControlLabel>What is your favorite operating system?</ControlLabel>
            <Radio type='radio' name="q1" value="Windows" onChange={this.handleQuestionChange}>Windows</Radio>
            <Radio type='radio' name="q1" value="Linux" onChange={this.handleQuestionChange}>Linux</Radio>
            <Radio type='radio' name="q1" value="OSX" onChange={this.handleQuestionChange}>OSX</Radio>
            <Radio type='radio' name="q1" value="Solaris" onChange={this.handleQuestionChange}>Solaris</Radio>
            <Radio type='radio' name="q1" value="Others" onChange={this.handleQuestionChange}>Others</Radio>
          </div>
          <div className="main">
            <ControlLabel>What is your favorite brand of TV?</ControlLabel>
            <Radio type='radio' name="q2" value="Sony" onChange={this.handleQuestionChange}>Sony</Radio>
            <Radio type='radio' name="q2" value="Samsung" onChange={this.handleQuestionChange}>Samsung</Radio>
            <Radio type='radio' name="q2" value="Panassonic" onChange={this.handleQuestionChange}>Panassonic</Radio>
            <Radio type='radio' name="q2" value="Vizio" onChange={this.handleQuestionChange}>Vizio</Radio>
            <Radio type='radio' name="q2" value="Others" onChange={this.handleQuestionChange}>Others</Radio>
          </div>
          <div className="main">
            <ControlLabel>What is your favorite Smartphone Brand?</ControlLabel>
            <Radio type='radio' name="q3" value="Apple" onChange={this.handleQuestionChange}>Windows</Radio>
            <Radio type='radio' name="q3" value="Samsung" onChange={this.handleQuestionChange}>Samsung</Radio>
            <Radio type='radio' name="q3" value="LG" onChange={this.handleQuestionChange}>LG</Radio>
            <Radio type='radio' name="q3" value="HTC" onChange={this.handleQuestionChange}>HTC</Radio>
            <Radio type='radio' name="q3" value="Sony" onChange={this.handleQuestionChange}>Sony</Radio>
            <Radio type='radio' name="q3" value="Others" onChange={this.handleQuestionChange}>Others</Radio>
          </div>
          <div className="main">
            <ControlLabel>What is your favorite CPU brand?</ControlLabel>
            <Radio type='radio' name="q4" value="Intel" onChange={this.handleQuestionChange}>Intel</Radio>
            <Radio type='radio' name="q4" value="AMD" onChange={this.handleQuestionChange}>AMD</Radio>
            <Radio type='radio' name="q4" value="Nvidia" onChange={this.handleQuestionChange}>Nvidia</Radio>
            <Radio type='radio' name="q4" value="ARM" onChange={this.handleQuestionChange}>ARM</Radio>
            <Radio type='radio' name="q4" value="Others" onChange={this.handleQuestionChange}>Others</Radio>
          </div>
        </form>
      </span>)
    }
    else if (!this.state.name && !this.state.submitted) {

      user = (<span>
        <h4>Plz Enter Your Name to Begin the survey</h4>
        <form onSubmit={this.handleNameSubmit.bind(this)}>
          <FormControl
            type="text"
            placeholder="Enter Your Name"
            inputRef={(ref) => { this.input = ref }}
          />
        </form>
      </span>)

      questions = ''

    }
    else if (this.state.submitted) { }
    return (
      <div className="App">
        <div className="App-header text-center">
          <h1 className="App-title">Simple Servey</h1>
        </div>
        <div className="">{user}</div>
        <div className="">{questions}</div>
      </div>
    );
  }
}

export default App;
