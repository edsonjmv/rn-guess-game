import { StyleSheet, Text, View } from 'react-native';

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Opponent Guess</Text>
      <View>
        <Text>Higher or lower?</Text>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  }
});

export default GameScreen;
