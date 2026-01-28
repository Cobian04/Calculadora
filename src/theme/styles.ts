import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000000',
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  mainResult: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
    fontWeight: '300',
  },
  subResult: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  button: {
    height: 75,
    width: 75,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 25,
    color: 'white',
    fontWeight: '400',
  },
});