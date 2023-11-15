import { ContactItem } from './ContactsList.styled';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </ContactItem>
        );
      })}
    </ul>
  );
};

export default Contacts;
