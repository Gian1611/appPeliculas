import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {globalStyles} from '../theme/GlobalStyles';
import {Pelicula} from '../../Domain/entities/Pelicula';

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
      <Text style={globalStyles.cardTitle}>{pelicula.title}</Text>
    </TouchableOpacity>
  );
};
