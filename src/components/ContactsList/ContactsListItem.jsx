import PropTypes from 'prop-types';
//import css from './ContactsList.module.css';

// export const ContactsListItem = ({ contacts, onDeleteContact }) => {
//   return contacts.map(({ id, name, number }) => (
//     <li key={id}>
//       <p>
//         {name}: {number}
//       </p>
//       <button onClick={() => onDeleteContact()}>Delete</button>
//     </li>
//   ));
// };

export const ContactsListItem = ({ contacts, onDeleteContact }) => {
  return contacts.map(contact => (
    <li key={contact.id}>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button
        onClick={e => {
          onDeleteContact(contact.id);
        }}
        type="button"
      >
        Delete
      </button>
      ;
      {/* <button
        onClick={e => {
          onDeleteContact(id);
        }}
        type="button"
      >
        Delete
      </button> */}
    </li>
  ));
};
