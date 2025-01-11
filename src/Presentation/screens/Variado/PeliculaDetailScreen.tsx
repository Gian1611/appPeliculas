import React, { useEffect, useState } from 'react';
import {ActivityIndicator, Image, Text, TouchableOpacity, View} from 'react-native';
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/AppNavigator';
import { globalStyles } from '../../theme/GlobalStyles';
import { DetailPelicula } from '../../../Domain/entities/DetailPelicula';
import { GetDetailPeliculaUseCase } from '../../../Domain/useCases/getPeliculas';

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
   }, []);
 
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
<View style={globalStyles.container2}>
<Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${detail?.poster_path}`,
        }}
        style={globalStyles.image2}
      />
<Text style={globalStyles.titulo3}>{detail?.title}</Text>
<Text style={globalStyles.titulo2}>{detail?.overview}</Text>
<Text style={globalStyles.titulo2}>Valoración :{detail?.vote_average}</Text>
</View>
  );
};