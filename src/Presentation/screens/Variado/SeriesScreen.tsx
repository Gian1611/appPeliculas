import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {globalStyles} from '../../theme/GlobalStyles';
import {useEffect, useState} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
//import {RootStackParams} from '../../navigation/AppNavigator';
import {Serie} from '../../../Domain/entities/Series';
import {GetPopularSeriesUseCase} from '../../../Domain/useCases/getSeries';
import {SerieCard} from '../../components/SerieCard';
//import { RootStackParams } from '../../navigation/pruebanavigator';

export const SeriesListScreen = () => {
  //const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const [populares, setPopulares] = useState<Serie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSeriesPopulares();
  }, []);

  const getSeriesPopulares = async () => {
    const data = await GetPopularSeriesUseCase();
    setPopulares(data);
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
    <View style={globalStyles.container}>
      <Text style={globalStyles.titulo}>Las series de la semana</Text>
      <FlatList
        data={populares}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        renderItem={({item}) => <SerieCard serie={item} onPress={() => []} />}
      />
    </View>
  );
};
