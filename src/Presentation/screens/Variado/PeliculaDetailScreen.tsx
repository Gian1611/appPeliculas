import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/AppNavigator';
import {DetailPelicula} from '../../../Domain/entities/DetailPelicula';
import {GetDetailPeliculaUseCase} from '../../../Domain/useCases/getPeliculas';
import {detalleStyles} from '../../theme/DetalleStyles';
import {globalStyles} from '../../theme/GlobalStyles';
import Icon from '@react-native-vector-icons/fontawesome6';
import {ScrollView} from 'react-native-gesture-handler';

type Props = {
  route: RouteProp<RootStackParams, 'PeliculaDetail'>;
};

export const PeliculaDetailScreen = ({route}: Props) => {
  const {id} = route.params;

  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const [detail, setDetail] = useState<DetailPelicula>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getDetailPelicula();
  });

  const getDetailPelicula = async () => {
    const data = await GetDetailPeliculaUseCase(id);
    setDetail(data);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <ScrollView style={detalleStyles.container}>
      <View style={{position: 'relative', overflow: 'hidden'}}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${detail?.poster_path}`,
          }}
          style={detalleStyles.image2}
        />

        {/* Boton para ir atras*/}
        <TouchableOpacity
          style={detalleStyles.botonback}
          onPress={() => navigation.goBack()}>
          <Icon name="backward" size={20} color="#f5e7ae" iconStyle="solid" />
        </TouchableOpacity>
      </View>

      <View style={detalleStyles.container2}>
        <Text style={detalleStyles.titulo3}>{detail?.title}</Text>

        {/* Fecha de salida y duracion */}
        <Text style={detalleStyles.titulo2}>
          {detail?.release_date.split('-')[0]} • {detail?.runtime} min
        </Text>

        <Text style={detalleStyles.titulo2}>
          Valoración{' '}
          <Icon name="star" size={20} color="#56a0d1" iconStyle="solid" /> :{' '}
          {detail?.vote_average.toFixed(1)} / 10
        </Text>

        {/* Generos */}
        <Text style={detalleStyles.titulo2}>
          {detail?.generos
            ? detail.generos.join(' • ')
            : 'Géneros no disponibles'}
        </Text>

        {/* Descripcion */}
        <Text style={detalleStyles.overview}>{detail?.overview}</Text>
      </View>
    </ScrollView>
  );
};
