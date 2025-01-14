import React, {useEffect, useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
//import {RootStackParams} from '../../navigation/AppNavigator';
import {GetPopularPeliculasUseCase} from '../../../Domain/useCases/getPeliculas';
import {PeliCard} from '../../components/PeliculaCard';
import {globalStyles} from '../../theme/GlobalStyles';
import {Pelicula} from '../../../Domain/entities/Pelicula';
import {RootStackParams} from '../../navigation/pruebanavigator';

export const PeliculasListScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const [populares, setPopulares] = useState<Pelicula[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPeliculasPopulares();
  }, []);

  const getPeliculasPopulares = async () => {
    const data = await GetPopularPeliculasUseCase();
    setPopulares(data);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <View style={globalStyles.container}>
        <ActivityIndicator size="large" color="#d68b13" />
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titulo}>Las peliculas mas populares</Text>
      <FlatList
        data={populares}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({item}) => (
          <PeliCard
            pelicula={item}
            onPress={() =>
              navigation.navigate('PeliculaDetail', {
                id: item.id,
              })
            }
          />
        )}
        contentContainerStyle={{paddingBottom: 60}} // Ajusta según la altura del BottomTabs
      />
    </View>
  );
};
