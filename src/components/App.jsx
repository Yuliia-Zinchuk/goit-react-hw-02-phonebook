import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    // number: '',
  };

  onAddTaco = data => {
    // data - це об'єкт taco
    console.log(data);
    const contact = {
      id: nanoid(),
      ...data,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  // handleNameChange = e => {
  //   this.setState({ name: e.target.value });
  // };

  render() {
    const { contacts } = this.state;
    console.log(this.state.contacts[0]);

    return (
      <>
        <ContactsForm onSubmit={this.onAddTaco} />
        {/* <ContactsList */}
        {/* {contacts.map(contact => {
          return (
            <span>
              key={contact.id}
              {contact.name}
              {contact.number}
            </span>
          );
        })} */}
        <ul>
          <ContactsList contacts={contacts} />
        </ul>
      </>
    );
  }
}

//export { App };
