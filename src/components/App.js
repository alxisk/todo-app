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
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    event.persist();
    const entryText = event.target.entry.value;
    event.target.entry.value = '';
    if (!entryText.trim()) return;
    const entries = this.state.entries;
    const newEntryId = entries.length ? entries[entries.length - 1].id + 1 : 1;
    this.setState(prevState =>
      prevState.entries.push({ id: newEntryId, text: entryText })
    );
  }

  handleRemove(event) {
    event.preventDefault();
    let id = event.target.getAttribute('data-id')
    this.setState(prevState => {
      return {entries: prevState.entries.filter((item) => item.id != id)};
    });
  }

  render() {
    return (
      <div className="app">
        <div className="center-wrap app__center-wrap">
          <AppTitle title={'Simple todo app'} />
          <InputForm onsubmit={this.handleSubmit} />
          <TodoList entries={this.state.entries}
            handleRemove={this.handleRemove} taskCount={this.state.entries.length} />
        </div>
      </div>
    );
  }
}

export default App;
