import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="page-wrapper">
        <div className="container">
          <SearchBar />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
