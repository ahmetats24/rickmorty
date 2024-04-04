import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import axios from 'axios';
export default function App(props) {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState('');
  console.log('props', props.route.params.item.url);
  const url = props.route.params.item.url;

  const [list, setList] = useState();
  const [control, setControl] = useState(false);
  const [control1, setControl1] = useState(false);

  useEffect(() => {
    // Axios kullanarak GET isteği yapma
    console.log('first');
    axios
      .get(props.route.params.item.url)
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

  console.log('list', list);
  const renderSong = ({item}) => (
    <SongCard
      name={item.name}
      date={item.air_date}
      episode={item.episode}
      onPress={() => {
        navigation.navigate('Episode3', {item});
      }}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList data={list} renderItem={renderSong} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  todoItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  completed: {
    textDecorationLine: 'line-through',
  },
});
