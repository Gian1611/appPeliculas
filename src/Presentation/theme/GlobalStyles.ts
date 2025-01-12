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
    paddingTop: 15,
    paddingHorizontal: 15,
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
    fontSize: 23,
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
    borderRadius: 10,
    height: 240,
    resizeMode: 'cover',
  },
  largeImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  description: {
    fontSize: 12,
    color: '#ccc',
    marginTop: 5,
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  card: {
    backgroundColor: colors.card,
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
    borderColor: '#007BFF',
    borderWidth: 1,
  },
  peliCard: {
    flex: 1,
    //alignItems: 'center',
    backgroundColor: colors.card,
    padding: 3,
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
  cardvaloration: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 5,
    textAlign: 'left',
  },
  textvalo: {
    color: colors.textDark,
    fontSize: 15,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: colors.textDark,
  },
});

export default colors;
