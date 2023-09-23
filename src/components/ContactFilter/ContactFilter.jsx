import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './ContactFilter.styled';

export default function ContactFilter({ onChange, title, value }) {
  return (
    <FilterLabel htmlFor="filter">
      {title}
      <FilterInput
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
        required
      />
    </FilterLabel>
  );
}

ContactFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
