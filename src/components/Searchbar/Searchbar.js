import { SearchbarHeader } from './Searchbar.styled';
import { SearchForm } from './Searchbar.styled';
import { SearchFormButton } from './Searchbar.styled';
import { SearchFormButtonLabel } from './Searchbar.styled';
import { SearchFormInput } from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.searchValue.value;
    onSubmit(value);
  };

  return (
    <SearchbarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <FcSearch />
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          name="searchValue"
        />
      </SearchForm>
    </SearchbarHeader>
  );
};

export default SearchBar;
