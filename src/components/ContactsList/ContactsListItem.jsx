import PropTypes from 'prop-types';
//import css from './FriendList.module.css';

export const ContactsListItem = ({ contacts }) => {
  return contacts.map(({ id, name, number }) => (
    <li key={id}>
      <p>
        {name} {number}
      </p>

      {/* <p>{number}</p> */}
    </li>
  ));
};
