import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {globalStyles} from '../theme/GlobalStyles';
import {Pelicula} from '../../Domain/entities/Pelicula';
import Icon from '@react-native-vector-icons/fontawesome6';

interface Props {
  pelicula: Pelicula;
  onPress: () => void;
}

export const PeliCard = ({pelicula, onPress}: Props) => {
  return (
    <TouchableOpacity style={globalStyles.peliCard} onPress={onPress}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`,
        }}
        style={globalStyles.image}
      />
      <View style={globalStyles.cardvaloration}>
        <Icon name="star" size={13} color="#d68b13" iconStyle="solid" />
        <Text style={globalStyles.textvalo}>
          {' '}
          {pelicula.vote_average ? pelicula.vote_average.toFixed(1) : 'N/A'}
        </Text>
      </View>
      <Text style={globalStyles.cardTitle}>
        {pelicula.title.length > 33
          ? `${pelicula.title.slice(0, 33)}...`
          : pelicula.title}
      </Text>
    </TouchableOpacity>
  );
};
