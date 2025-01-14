import {StyleSheet} from 'react-native';

const colors = {
  primary: '#22254b', // Morado oscurp
  secondary: '#d68b13', // Naranja claro
  backgroundDark: '#22254b', // Morado oscuro
  moradoclaro: '#3b4080', // Morado claro
  button: '#d68b13', // Naranja claro
  textLight: '#d9d9d9', // gris claro
  textDark: '#b0acac', // Texto oscuro (gris oscuro)
};

export const detalleStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container2: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primary,
  },
  botonback: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: colors.moradoclaro,
    padding: 5,
    borderRadius: 10, // Hace que el fondo sea circular
    alignItems: 'center', // Centra el ícono horizontalmente
    justifyContent: 'center', // Centra el ícono verticalmente
    width: 40, // Tamaño fijo para que sea pequeño
    height: 40, // Tamaño fijo para mantener proporción
  },
  image2: {
    width: '100%',
    height: 430,
    resizeMode: 'cover',
  },
  titulo2: {
    fontSize: 15,
    color: colors.textLight,
    marginBottom: 10,
    textAlign: 'center',
  },
  titulo3: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  overview: {
    fontSize: 16,
    lineHeight: 22,
    color: colors.textLight,
    textAlign: 'justify',
    marginVertical: 10,
  },
  card: {
    backgroundColor: colors.moradoclaro,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginVertical: 8,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  gradient: {
    position: 'absolute',
    bottom: 0, // Ubicado en la parte inferior de la imagen
    height: 140, // Altura del degradado
    width: '100%', // Ancho completo de la imagen
  },
});
