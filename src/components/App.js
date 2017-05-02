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
        text: "Call someone to tell them you can't talk right now"
      },
      {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. \
          Doloremque sequi totam culpa! Consequatur excepturi pariatur, \
          eaque labore velit odio rem."
      }]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleApplyEdit = this.handleApplyEdit.bind(this);
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
    const id = event.target.parentNode.getAttribute('data-id')
    this.setState(prevState => {
      return {entries: prevState.entries.filter((item) => item.id != id)};
    });
  }

  handleEdit(event) {
    event.preventDefault();
    const msgContainer = event.target.parentNode.parentNode.firstElementChild;
    msgContainer.contentEditable = 'true';
    msgContainer.focus();
    event.target.parentNode.firstElementChild.classList.remove('btn--hidden');
    event.target.classList.add('btn--hidden');
  }

  handleApplyEdit(event) {
    event.preventDefault();
    const id = event.target.parentNode.getAttribute('data-id');
    const msgContainer = event.target.parentNode.parentNode.firstElementChild;
    const entryIdx = this.state.entries.findIndex(item => item.id == id);
    this.setState(prevState => {
      prevState.entries[entryIdx].text = msgContainer.textContent;
    });
    msgContainer.contentEditable = 'false';
    event.target.classList.add('btn--hidden');
    event.target.parentNode.children[1].classList.remove('btn--hidden');
  }

  render() {
    return (
      <div className="app">
        <div className="center-wrap app__center-wrap">
          <AppTitle title={'Simple todo app'} />
          <InputForm onsubmit={this.handleSubmit} />
          <TodoList entries={this.state.entries}
            handleRemove={this.handleRemove}
            handleEdit={this.handleEdit}
            handleApplyEdit={this.handleApplyEdit}
            taskCount={this.state.entries.length} />
        </div>
      </div>
    );
  }
}

export default App;
