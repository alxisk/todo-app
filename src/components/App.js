import React from 'react';
import { arrayMove } from 'react-sortable-hoc';
import AppTitle from './AppTitle';
import InputForm from './InputForm';
import TodoList from './TodoList';
import { getId, getMsgContainer, getEntryIdx,
        makeEditable, makeUneditable } from '../utils';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: [{
        id: 0,
        text: "Call someone to tell them you can't talk right now"
      },
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque sequi totam culpa! Consequatur excepturi pariatur, eaque labore velit odio rem.'
      },
      {
        id: 2,
        text: 'Tip: You can sort list items by dragging them'
      }],
      lastId: 2,
      lastEditable: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleApplyEdit = this.handleApplyEdit.bind(this);
    this.handleSortEnd = this.handleSortEnd.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    event.persist();
    const entryText = event.target.entry.value;
    event.target.entry.value = '';
    if (!entryText.trim()) return;
    const newEntryId = this.state.lastId + 1;
    this.setState(prevState =>
      prevState.entries.push({ id: newEntryId, text: entryText })
    );
    this.setState({ lastId: newEntryId });
  }

  handleRemove(event) {
    event.preventDefault();
    const id = getId(event.target);
    const newEntries = this.state.entries.filter(item => item.id !== +id);
    this.setState({ entries: newEntries });
  }

  handleEdit(event) {
    event.preventDefault();
    makeEditable(event.target);

    if (this.state.lastEditable &&
        this.state.lastEditable !== event.target.previousElementSibling) {
      this.applyEdit(event.target.previousElementSibling);
      makeUneditable(this.state.lastEditable);
    }

    this.setState({ lastEditable: event.target.previousElementSibling });
  }

  handleApplyEdit(event) {
    event.preventDefault();
    this.applyEdit(event.target);
    makeUneditable(event.target);
  }

  handleSortEnd({ oldIndex, newIndex }) {
    this.setState({
      entries: arrayMove(this.state.entries, oldIndex, newIndex)
    });
  }

  applyEdit(target) {
    const msgContainer = getMsgContainer(target);
    const entryIdx = getEntryIdx(this.state.entries, getId(target));
    this.setState((prevState) => {
      prevState.entries[entryIdx].text = msgContainer.textContent;
    });
  }

  render() {
    return (
      <div className="app">
        <div className="center-wrap app__center-wrap">
          <AppTitle title={'Simple todo app'} />
          <InputForm onsubmit={this.handleSubmit} />
          <TodoList
            entries={this.state.entries}
            handleRemove={this.handleRemove}
            handleEdit={this.handleEdit}
            handleApplyEdit={this.handleApplyEdit}
            onSortEnd={this.handleSortEnd}
            distance="5"
            taskCount={this.state.entries.length}
          />
        </div>
      </div>
    );
  }
}

export default App;
