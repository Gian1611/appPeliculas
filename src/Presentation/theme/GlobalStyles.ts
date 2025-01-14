import {StyleSheet} from 'react-native';

const colors = {
  buttonText: '#FFFFFF', // Texto en botones (blanco)

  primary: '#22254b', // Morado oscurp
  secondary: '#d68b13', // Naranja claro
  backgroundLight: '#22254b', // Morado oscuro
  moradoclaro: '#3b4080', // Morado claro
  button: '#d68b13', // Naranja claro
  textLight: '#d9d9d9', // gris claro
  textDark: '#b0acac', // Texto oscuro (gris oscuro)
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: colors.backgroundLight,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 5,
    backgroundColor: colors.moradoclaro,
    paddingLeft: 10,
  },
  icon: {
    marginRight: 10,
    color: colors.textDark,
  },
  input: {flex: 1, height: 45, padding: 8, color: 'white'},
  button: {
    backgroundColor: colors.button,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: colors.secondary,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  textCenter: {
    textAlign: 'center',
    color: colors.textDark,
    marginBottom: 10,
    fontSize: 14,
  },
  tituloleft: {
    textAlign: 'left',
    color: 'white',
    marginBottom: 15,
    marginLeft: 5,
    fontSize: 23,
    fontWeight: 'bold',
  },
  titulo: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 10,
    fontSize: 23,
    fontWeight: 'bold',
  },
  text: {
    color: colors.textDark,
    marginBottom: 10,
    fontSize: 15,
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
    color: 'white',
    marginBottom: 24,
  },
  label: {
    fontSize: 18,
    color: colors.secondary,
    marginBottom: 4,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 17,
    color: colors.textLight,
    marginBottom: 16,
    marginLeft: 17,
  },
  image: {
    width: '100%',
    //borderRadius: 10,
    borderTopLeftRadius: 10, // Redondea la esquina superior izquierda
    borderTopRightRadius: 10, // Redondea la esquina superior derecha
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
    backgroundColor: colors.moradoclaro,
    padding: 5,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  peliCard: {
    flex: 1,
    backgroundColor: colors.moradoclaro,
    padding: 1,
    marginVertical: 5,
    margin: 8,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  cardvaloration: {
    flexDirection: 'row',
    alignItems: 'center', // Alinea verticalmente al centro
    marginTop: 10,
    marginLeft: 8,
    textAlign: 'left',
  },
  textvalo: {
    color: colors.textDark,
    fontSize: 15,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 8,
    marginRight: 8,
    textAlign: 'left',
    marginVertical: 10,
    color: colors.textLight,
  },
});

export default colors;
