import React, {Component} from "react";
import {connect} from "react-redux";
import {addUser} from "../redux/actions/index";

function mapDispatchToProps(dispatch){
  return{
    addUser: user => dispatch(addUser(user))
  };
}

class ConnectedForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange = (e) =>{
    this.setState({[e.target.id] : e.target.value});
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    const {name} = this.state;
    this.props.addUser({name});
    this.setState({name:""});
  }

  render(){
    const {name} = this.state;
    return(
      <form onSubmit = {this.handleSubmit} >
        <div>
          <label htmlFor ="name"> Name </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
