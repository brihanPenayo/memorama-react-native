import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Cards from './Cards';
import { useState, useEffect } from 'react';
const emojis = [
  "🐶",
  "👀",
  "😻",
  // "🤖",
  "👻",
  "🙉",
  "💩",
  // "😄",
]

export default function App() {
  const [board, setBoard] = useState(() => shuffleArray([...emojis, ...emojis]))
  const [selected, setSelected] = useState([])
  const [matched, setMatched] = useState([])
  const [movement, setMovement] = useState(0)

  const winner = () => matched.length === board.length;
  useEffect(() => {
    if (selected.length < 2) return;
    if (board[selected[0]] === board[selected[1]]) {
      setMatched([...matched, ...selected])
      setSelected([]);
    } else {
      const timeOut = setTimeout(() => setSelected([]), 1000)
      return () => clearTimeout(timeOut);
    }
  }, [selected])

  const handlePress = (index) => {
    if (selected.length >= 2 || selected.includes(index)) return;
    setSelected([...selected, index]);
    setMovement(movement + 1)
  }

  const reset = () => {
    setMatched([]);
    setMovement(0);
    setSelected([]);
    setBoard(shuffleArray([...emojis, ...emojis]))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{winner() ? 'Has Ganado!' : 'Memorama'}</Text>
      <Text style={styles.movement}>Movimientos: {movement}</Text>
      <View style={styles.viewSt}>
        {board.map((card, index) => {
          const turnedOver = selected.includes(index) || matched.includes(index)
          return (
            <Cards
              key={index}
              onPress={() => handlePress(index)}
              turnedOver={turnedOver}>
              {card}
            </Cards>
          )
        })}
      </View>
      <StatusBar style="light" />
      <Pressable style={styles.btn} onPress={reset}>
        <Text style={styles.btnText}>Reiniciar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26402d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: 800
  },
  btnText: {
    fontWeight: 600,
    color: 'white',
    fontSize: 16
  },
  btn: {
    backgroundColor: 'gray',
    padding: 20,
    borderRadius: 20,
    width: 120,
    alignItems: 'center'
  },
  viewSt: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 40,
    gap: 10,
    justifyContent: 'center'
  },
  movement: {
    fontSize: 20,
    color: 'white',
    marginTop: 20
  }
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
  }
  return array;
}