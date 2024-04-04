import {View, Text, TextInput} from 'react-native';
import React from 'react';
import styles from './SearchBar.styles';
const SearchBar = props => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Ara..." onChangeText={props.onSearch} />
    </View>
  );
};

export default SearchBar;
