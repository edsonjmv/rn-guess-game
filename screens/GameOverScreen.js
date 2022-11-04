import { StyleSheet, View } from 'react-native';
import Title from '../components/ui/Title';

function GameOverScreen() {
  return (
    <View style={styles.screen}>
      <Title>Game over</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  }
});

export default GameOverScreen;
