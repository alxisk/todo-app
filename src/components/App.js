import React from 'react';
import AppTitle from './AppTitle';
import InputForm from './InputForm';
import TodoList from './TodoList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: [{
        id: 1,
        text: 'blablabla'
      }]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    event.persist();
    let entries = this.state.entries;
    let newEntryId = entries.length ? entries[entries.length - 1].id + 1 : 1;
    let entryText = event.target.entry.value;
    this.setState(prevState =>
      prevState.entries.push( {id: newEntryId, text: entryText} )
    );
    event.target.entry.value = '';
  }

  render() {
    return (
      <div>
        <AppTitle title={`Simple todo app (${this.state.entries.length})`} />
        <InputForm onsubmit={this.handleSubmit} />
        <TodoList entries={this.state.entries} />
      </div>
    );
  }
}

export default App;
