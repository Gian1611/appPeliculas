import {StyleSheet} from 'react-native';

export const detalleStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5efd7',
  },
  container2: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5efd7',
  },
  botonback: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#56a0d1',
    padding: 5,
    borderRadius: 10, // Hace que el fondo sea circular
    alignItems: 'center', // Centra el ícono horizontalmente
    justifyContent: 'center', // Centra el ícono verticalmente
    width: 40, // Tamaño fijo para que sea pequeño
    height: 40, // Tamaño fijo para mantener proporción
  },
  image2: {
    width: '100%',
    height: 390,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  titulo2: {
    fontSize: 16,
    color: '#292828',
    marginBottom: 10,
    textAlign: 'center',
  },
  titulo3: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#292828',
    marginBottom: 10,
    textAlign: 'center',
  },
  overview: {
    fontSize: 16,
    lineHeight: 22,
    color: '#292828',
    textAlign: 'justify',
    marginVertical: 10,
  },
});
