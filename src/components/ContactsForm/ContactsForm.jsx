import PropTypes from 'prop-types';
import React, { Component } from 'react';
import css from './ContactsForm.module.css';

// const INITIAL_FORM_DATA = {
//     name: '',
//     number: '',
//   //   discount: false,
// };

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
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
      [name]: value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.inputForm}>
          <span>Name</span>
          <input
            className={css.input}
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            // value={name}
          />
        </label>

        <label className={css.inputForm}>
          <span>Number</span>
          <input
            className={css.input}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
          />
        </label>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

// TacoForm.propTypes = {
//   onAddTaco: PropTypes.func.isRequired,
// };
