//import { FriendListItem } from './FriendListItem';
//import css from './FriendList.module.css';
// const contactsArray = [
//   { id: 'id-1', name: 'Rosie Simpson' },
//   { id: 'id-2', name: 'Hermione Kline' },
//   { id: 'id-3', name: 'Eden Clements' },
// ];

import { ContactsListItem } from './ContactsListItem';
import css from './ContactsList.module.css';
export const ContactsList = ({ contacts }) => {
  return (
    <>
      <ul className={css.contacts_list}>
        <ContactsListItem contacts={contacts} />
      </ul>
    </>
  );
};

// export const ContactsList = ({ contacts }) => {
//   return contacts.map(contact => {
//     <span>

//       {/* key={contact.id} */}
//       {contact.name}
//       {contact.number}
//     </span>;
//   });
// };
