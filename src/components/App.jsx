import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactsListItem } from './ContactsList/ContactsListItem';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
  };

  onAddTaco = data => {
    // data - це об'єкт taco'
    // const d = data.name;
    // console.log(d);
    // const err = this.state.contacts.filter(contact => contact.name === { d });
    if (this.state.contacts.find(contact => contact.name === `${data.name}`)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    // console.log(data.name);
    // console.log(err);
    // console.log(this.state.contacts);
    const contact = {
      id: nanoid(),
      ...data,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  handleChange = e => {
    const { name, value } = e.target;
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.value);
    // this.setState({
    //   [e.target.name]: e.target.value,
    // });
    this.setState({
      filter: value,
      //[name]: value,
    });
  };

  // onDelete = data => {
  //   console.log(data);

  //   // handleNameChange = e => {
  //   //   this.setState({ name: e.target.value });
  // };
  onDeleteTaco = tacoId => {
    // console.log(id);
    // this.setState({
    this.setState(prevState => {
      // console.log('prevState: ', prevState.contacts); // [{id: 1}, {id: 2}, {id: 3}]
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== tacoId), // tacoId = 2 [{id: 1}, {id: 2}, {id: 3}] -> [{id: 1}, {id: 3}]
      };
    });
  };

  render() {
    const { contacts } = this.state;
    console.log(this.state.contacts[0]);

    return (
      <>
        <Section title="Phonebook">
          <ContactsForm onSubmit={this.onAddTaco} />
        </Section>

        <Section title="Contacts">
          {<Filter handleChange={this.handleChange} />}
          {contacts && (
            <ContactsList
              contacts={contacts}
              filter={this.state.filter}
              onDeleteContact={this.onDeleteTaco}
            />
          )}
        </Section>
        {/* <ContactsListItem onDeleteContact={this.onDeleteTaco} /> */}
        {/* <button
          onClick={e => {
            this.onDeleteTaco('id-2');
          }}
          type="button"
        >
          Delete
        </button> */}
        {/* <Section title="Filter"></Section> */}
      </>
    );
  }
}

//export { App };
