import { Component } from 'react';
import { SearchbarHeader } from './Searchbar.styled';
import { SearchForm } from './Searchbar.styled';
import { SearchFormButton } from './Searchbar.styled';
import { SearchFormButtonLabel } from './Searchbar.styled';
import { SearchFormInput } from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';

class SearchBar extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.searchValue.value;
    this.props.onSubmit(value);
  };
  render() {
    return (
      <SearchbarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <FcSearch />
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            name="searchValue"
          />
        </SearchForm>
      </SearchbarHeader>
    );
  }
}

export default SearchBar;
