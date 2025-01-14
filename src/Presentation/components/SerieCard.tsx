import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Serie} from '../../Domain/entities/Series';
import {globalStyles} from '../theme/GlobalStyles';
import Icon from '@react-native-vector-icons/fontawesome6';

interface Props {
  serie: Serie;
  onPress: () => void;
}

export const SerieCard = ({serie, onPress}: Props) => {
  return (
    <TouchableOpacity style={globalStyles.peliCard} onPress={onPress}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${serie.poster_path}`,
        }}
        style={globalStyles.image}
      />
      <View style={globalStyles.cardvaloration}>
        <Icon name="star" size={13} color="#d68b13" iconStyle="solid" />
        <Text style={globalStyles.textvalo}>
          {' '}
          {serie.vote_average ? serie.vote_average.toFixed(1) : 'N/A'}
        </Text>
      </View>
      <Text style={globalStyles.cardTitle}>
        {serie.name.length > 33 ? `${serie.name.slice(0, 33)}...` : serie.name}
      </Text>
    </TouchableOpacity>
  );
};
