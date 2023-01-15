import { Box } from 'Utils/Box';
import * as SC from './SearchBar.styled';
import { BsXLg, BsSearch } from 'react-icons/bs';
import PropTypes from 'prop-types';
import { useRef } from 'react';

export const SearchBar = ({ onSubmit, value, onChange, clearInput }) => {
  const inputRef = useRef();
  const onInputFocus = () => {
    clearInput();
    inputRef.current.focus();
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(value);
  };

  const handleChange = evt => {
    onChange(evt.target.value);
  };

  return (
    <Box
      as="form"
      width="1098px"
      pt="86px"
      pl={5}
      mb={3}
      display="flex"
      position="relative"
      onSubmit={handleSubmit}
      autocomplete="on"
    >
      <SC.FormButton type="submit">
        <BsSearch size="20" />
      </SC.FormButton>
      <SC.FormInput
        value={value}
        type="text"
        onChange={handleChange}
        placeholder="Enter movie`s name"
        ref={inputRef}
      />

      <SC.FormButton type="button" onClick={onInputFocus}>
        <BsXLg size="18" />
      </SC.FormButton>
    </Box>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
  clearInput: PropTypes.func,
};
