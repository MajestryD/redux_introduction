import React from 'react';
import List from './List';
import Form from './components/Form';
import Post from './components/Post';

function App() {
  return (
    <div className="App">

      <div>
        <h2>Users</h2>
        <List />
      </div>
      <div>
        <h2>Add a new article</h2>
        <Form />
      </div>
      <Post />
    </div>
  );
}

export default App;
