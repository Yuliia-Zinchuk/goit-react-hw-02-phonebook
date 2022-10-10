//import { FriendListItem } from './FriendListItem';
//import css from './FriendList.module.css';
// const contactsArray = [
//   { id: 'id-1', name: 'Rosie Simpson' },
//   { id: 'id-2', name: 'Hermione Kline' },
//   { id: 'id-3', name: 'Eden Clements' },
// ];

import { ContactsListItem } from './ContactsListItem';
import css from './ContactsList.module.css';
export const ContactsList = ({ contacts, filter }) => {
  return (
    <>
      <ul className={css.contacts_list}>
        <ContactsListItem
          contacts={contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
          )}
        />
      </ul>
    </>
  );
};

//---------------было до фильтрации

// import { ContactsListItem } from './ContactsListItem';
// import css from './ContactsList.module.css';
// export const ContactsList = ({ contacts }) => {
//   return (
//     <>
//       <ul className={css.contacts_list}>
//         <ContactsListItem contacts={contacts} />
//       </ul>
//     </>
//   );
// };
