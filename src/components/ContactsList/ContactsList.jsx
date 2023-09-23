import PropTypes from 'prop-types';
import ContactsItem from 'components/ContactsItem';
import { List } from './ContactsList.styled';

export default function Contacts({ filteredContacts, onContactDelete }) {
  return (
    <>
      <List>
        <ContactsItem
          filteredContacts={filteredContacts}
          onContactDelete={onContactDelete}
        />
      </List>
    </>
  );
}

Contacts.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  onContactDelete: PropTypes.func.isRequired,
};
