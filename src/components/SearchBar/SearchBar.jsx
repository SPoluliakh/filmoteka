import { Box } from 'Utils/Box';
import * as SC from './SearchBar.styled';
import { BsXLg, BsSearch } from 'react-icons/bs';

export const SearchBar = ({ onSubmit, value, onChange, clearInput }) => {
  return (
    <Box
      as="form"
      width="1098px"
      pt={6}
      pl={5}
      mb={3}
      display="flex"
      position="relative"
      onSubmit={evt => {
        evt.preventDefault();
        onSubmit(value);
      }}
      autocomplete="on"
    >
      <SC.FormButton type="submit">
        <BsSearch size="20" />
      </SC.FormButton>
      <SC.FormInput
        value={value}
        type="text"
        onChange={evt => onChange(evt.target.value)}
        placeholder="Enter movie`s name"
      />

      <SC.FormButton type="button" onClick={() => clearInput()}>
        <BsXLg size="18" />
      </SC.FormButton>
    </Box>
  );
};
