import { Text, StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';

function GuessLogItem({ guess, roundNumber }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{roundNumber}</Text>
      <Text style={styles.text}>Opponent Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3
  },
  text: {
    fontFamily: 'open-sans'
  }
});

export default GuessLogItem;
