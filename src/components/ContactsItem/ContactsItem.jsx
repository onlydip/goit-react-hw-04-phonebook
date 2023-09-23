import PropTypes from 'prop-types';
import { MdPhone } from 'react-icons/md';


import {
  ListItem,
  ItemName,
  ItemNumber,
  DeleteButton,
} from './ContactsItem.styled';

export default function ContactsItem({ filteredContacts, onContactDelete }) {
  return filteredContacts.map(({ id, name, number }) => {
    return (
      <ListItem key={id}>
        <ItemName>
          <MdPhone size="20" />
          {name}:
        </ItemName>
        <ItemNumber>{number}</ItemNumber>
        <DeleteButton
          id={id}
          onClick={() => {
            onContactDelete(id);
          }}
        >
          Delete
        </DeleteButton>
      </ListItem>
    );
  });
}

ContactsItem.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.object.isRequired),
  onContactDelete: PropTypes.func.isRequired,
};
