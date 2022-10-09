import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
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
    name: '',
    number: '',
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

  onFilter = data => {
    console.log(data);

    // handleNameChange = e => {
    //   this.setState({ name: e.target.value });
  };

  render() {
    const { contacts } = this.state;
    console.log(this.state.contacts[0]);

    return (
      <>
        <Section title="Phonebook">
          <ContactsForm onSubmit={this.onAddTaco} />
        </Section>
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
        <Section title="Contacts">
          {contacts && (
            <ContactsList contacts={contacts} filter={this.state.filter} />
          )}
        </Section>

        {/* <label>
          <span>Find</span>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
           
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
           
          />
        </label> */}

        <Section title="Filter">
          {
            <Filter
              handleChange={this.handleChange}
              // contacts={this.state.contacts}
              // filter={this.state.filter}
            />
          }
        </Section>
      </>
    );
  }
}

//export { App };
