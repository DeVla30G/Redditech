import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
    style={styles.container}
      placeholder="Search Subreddits"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        marginBottom: 40,
    },
  });