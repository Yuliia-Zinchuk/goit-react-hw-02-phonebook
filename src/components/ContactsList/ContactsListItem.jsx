import PropTypes from 'prop-types';
//import css from './ContactsList.module.css';

export const ContactsListItem = ({ contacts }) => {
  return contacts.map(({ id, name, number }) => (
    <li key={id}>
      <p>
        {name}: {number}
      </p>
    </li>
  ));
};
