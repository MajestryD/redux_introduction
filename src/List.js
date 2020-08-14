import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {user: state.user};
};

const connectList = ({ user }) => (
  <ul>
    {user.map(el => (
      <li key = {el.id}> {el.name} </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(connectList);

export default List;
