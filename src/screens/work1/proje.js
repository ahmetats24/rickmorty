import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import SongCard from '../../Components/SongCard';
import SearchBar from '../../Components/SearchBar';
import axios from 'axios';
const proje = ({navigation}) => {
  const [list, setList] = useState();
  const [control, setControl] = useState(false);
  const [control1, setControl1] = useState(false);

  useEffect(() => {
    // Axios kullanarak GET isteği yapma
    console.log('first');
    axios
      .get('https://rickandmortyapi.com/api/episode')
      .then(response => {
        console.log('Selam', response.data.results);
        setList(response.data.results);
        if (response.data) {
          setControl(true);
        }
        console.log('list', list);
      })
      .catch(error => {
        // Hata durumunda işlemler
        console.error('There was a problem with the axios operation:', error);
      });
    console.log('Finish');
    if (!control) {
      setTimeout(() => {
        setControl1(!control1);
      }, 1500);
    }
  }, [control1]);

  const renderSong = ({item}) => (
    <SongCard
      name={item.name}
      date={item.air_date}
      episode={item.episode}
      onPress={() => {
        navigation.navigate('Episode2', {item});
      }}
    />
  );

  const renderSeperator = () => <View style={styles.seperator} />;

  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searcedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searcedText) > -1;
    });
    setList(filteredList);
  };
  return (
    <View style={styles.contaier}>
      <SearchBar onSearch={handleSearch} />
      <View>
        <Text>Bölümler</Text>
      </View>
      <View style={styles.contaier}>
        <FlatList
          data={list}
          renderItem={renderSong}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </View>
  );
};

export default proje;

const styles = StyleSheet.create({
  contaier: {flex: 1},
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
