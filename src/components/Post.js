import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getData} from '../redux/actions/index';

export class Post extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getData("https://api.valentinog.com/api/link/");
  }

  render(){
    return(
      <ul>
        {this.props.user.map(el=> (
          <li key={el.id}> {el.title} </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.remoteUser.slice(0,10)
  };
}

export default connect(mapStateToProps,{getData})(Post);
