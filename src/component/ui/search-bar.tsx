"use client";

const SearchBar = (props: any) => {
  const { searchValue, setSearchValue } = props;
  return (
    <input
      placeholder="Search blog posts..."
      value={searchValue}
      onChange={(e) => {
        setSearchValue(e.target.value);
      }}
    />
  );
};

export default SearchBar;
