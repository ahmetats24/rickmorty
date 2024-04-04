import {View, Text, Image, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../SongCard/SongCard.styles';
import PropTypes from 'prop-types';
const SongCard = props => {
  const {image, name, episode, date, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.inner_container}>
        <Text style={styles.title}> {name} </Text>
        <View style={styles.content_container}>
          <View style={styles.info_container}>
            <Text> {episode} </Text>
            <Text style={styles.year}> {date} </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

SongCard.prototype = {
  image: PropTypes.object,
  name: PropTypes.string,
  episode: PropTypes.string,
  date: PropTypes.string,
  onPress: PropTypes.func,
};
SongCard.defaultProps = {
  image: require('../../Assets/rick.jpg'),
  name: 'name',
  episode: 'episode',
  date: 'date',
};

export default SongCard;
