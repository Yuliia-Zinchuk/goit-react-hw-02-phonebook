import PropTypes from 'prop-types';
//import css from './Section.module.css';
// export const Section = ({ title, children }) => {
//   return (
//     <>
//       <section className={css.Section}>
//         <h1 className={css.title}>{title}</h1>
//         {children}
//       </section>
//     </>
//   );
// };

export const Filter = ({ handleChange }) => {
  return (
    <>
      <label>
        <span>Find</span>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          // value={this.state.filter}

          // value={name}
        />
      </label>
    </>
  );
};
//------код с фильтрацией
// export const Filter = ({ contacts, filter }) => {
//   return (
//     <>
//       <ul>
//         <ContactsListItem
//           contacts={contacts.filter(contact => contact.name.includes(filter))}
//         />
//       </ul>
//     </>
//   );
// };
