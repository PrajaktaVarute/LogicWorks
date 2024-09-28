import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

const WelcomeScreen = () => {
  const letters = ['F', 'a', 'b', 'u', 'l', 'a'];  // Define the letters of "Uber"
  const animatedValues = useRef(letters.map(() => new Animated.Value(0))).current; // Create Animated.Values for each letter

  useEffect(() => {
    // Create animation for each letter's opacity, staggered by 200ms
    const animations = animatedValues.map((animatedValue, index) => {
      return Animated.timing(animatedValue, {
        toValue: 1,
        duration: 10,  // Each letter takes 300ms to appear (faster)
        delay: index * 1, // Delay each letter by 200ms (faster)
        useNativeDriver: true,
      });
    });

    // Start all animations with stagger
    Animated.stagger(200, animations).start();
  }, [animatedValues]);

  return (
    <View style={styles.container}>
      <View style={styles.textRow}>
        {/* Render each letter with its corresponding animated opacity */}
        {letters.map((letter, index) => (
          <Animated.Text
            key={index}  // Use index as key (since we have only 4 letters)
            style={[styles.letter, { opacity: animatedValues[index] }]}
          >
            {letter}
          </Animated.Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Black background
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRow: {
    flexDirection: 'row',
  },
  letter: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#bb86fc', // White text
    marginHorizontal: 1, // Reduced space between letters
  },
});

export default WelcomeScreen;
