import React from 'react';
import PostList from './components/PostList';
import './style/App.css'

class App extends React.Component {
  

  render() {
    return(
      <div className="ui container">
          <PostList/>
        </div>

    )
    
}
}




export default App;
