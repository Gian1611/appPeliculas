import {StyleSheet} from 'react-native';

const colors = {
  primary: '#3498DB', // Celeste intenso
  secondary: '#f5e7ae', // Crema
  backgroundLight: '#f5efd7', // Fondo claro (casi blanco)
  textDark: '#2C3E50', // Texto oscuro (azul grisáceo)
  button: '#5DADE2', // Botón celeste
  card: '#7dc2f0',
  buttonText: '#FFFFFF', // Texto en botones (blanco)
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: colors.backgroundLight,
  },
  input: {flex: 1, height: 45, padding: 10},
  button: {
    backgroundColor: colors.button,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: colors.buttonText,
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: colors.primary,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  textCenter: {
    textAlign: 'center',
    color: colors.textDark,
    marginBottom: 10,
    fontSize: 14,
  },
  titulo: {
    textAlign: 'center',
    color: colors.textDark,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    color: colors.textDark,
    marginBottom: 10,
    fontSize: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
    backgroundColor: colors.secondary,
    paddingLeft: 10,
  },
  icon: {
    marginRight: 10,
    color: colors.primary, // Icono con color celeste
  },
  containerPerfil: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  tituloPerfil: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 24,
  },
 
  label: {
    fontSize: 18,
    color: '#0056B3',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 17,
    color: '#212529',
    marginBottom: 16,
    marginLeft: 15,
  },
  image: {
    width: '100%',
    height: 240,
    resizeMode: 'cover',
  },
  largeImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  titulo2:{
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },

  titulo3:{
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 0,
  },
  image2:{
    flex: 1, // Ocupa todo el espacio disponible
    width: '100%',
    height: '100%',
    borderRadius: 10,
    marginBottom: 15,
  },
  container2: {
    flex: 1,
    backgroundColor: '#101010', 
    //justifyContent: 'center',
    padding: 20,
  },
  rating: {
    marginTop: 5, // Espaciado entre las estrellas y el título
  },
  description: {
    fontSize: 12,
    color: '#ccc',
    marginTop: 5,
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  card: {
   // backgroundColor: colors.card,
   backgroundColor: '#1c1c1c', // Fondo de la tarjeta en tono oscuro
   borderRadius: 20,
   padding: 15,
   alignItems: 'center',
   shadowColor: '#000',
   shadowOpacity: 0.8,
   shadowRadius: 10,
   elevation: 10,
  },
 card2:{
  width: '90%',
  backgroundColor: '#1c1c1c', // Fondo de la tarjeta en tono oscuro
  borderRadius: 20,
  padding: 15,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOpacity: 0.8,
  shadowRadius: 10,
  elevation: 10, // Sombra para dar un efecto de profundidad
  },
  peliCard: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.card,
    padding: 10,
    marginVertical: 5,
    margin: 8,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-start',
    borderColor: '#007BFF',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: colors.textDark,
  },
});

export default colors;
