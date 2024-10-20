import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

 const  WelcomeScreen = () => {
  const letters = ['S', 'n', 'a', 'p','S', 't','o','r','y'];  // Define the letters of "Uber"
  const animatedValues = useRef(letters.map(() => new Animated.Value(0))).current; // Create Animated.Values for each letter
  const taglineOpacity = useRef(new Animated.Value(0)).current; // Animated value for tagline opacity

  useEffect(() => {
    // Create animation for each letter's opacity and scale, staggered by 300ms
    const animations = animatedValues.map((animatedValue, index) => {
      return Animated.timing(animatedValue, {
        toValue: 1,
        duration: 50,  // Each letter takes 600ms to appear
        delay: index * 50, // Delay each letter by 300ms
        useNativeDriver: true,
      });
    });

    // Start the tagline animation after all the letters have been animated
    Animated.sequence([
      Animated.stagger(50, animations),
      // Fade in the tagline after a slight delay
      Animated.timing(taglineOpacity, {
        toValue: 1,
        duration: 50,
        delay: 50, // Slight delay after the last letter
        useNativeDriver: true,
      }),
    ]).start();
  }, [animatedValues, taglineOpacity]);

  return (
    <View style={styles.container}>
      <View style={styles.textRow}>
        {/* Render each letter with its corresponding animated opacity and scale */}
        {letters.map((letter, index) => {
          const scale = animatedValues[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.5, 1], // Scale from 0.5 to 1
          });

          return (
            <Animated.Text
              key={index}
              style={[
                styles.letter,
                { opacity: animatedValues[index], transform: [{ scale }] },
              ]}
            >
              {letter}
            </Animated.Text>
          );
        })}
      </View>
      
      {/* Tagline */}
      <Animated.Text style={[styles.tagline, { opacity: taglineOpacity }]}>
        Create Your Own Story
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Dark gray background for elegance
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRow: {
    flexDirection: 'row',
    marginBottom: 5, // Space between letters and tagline
  },
  letter: {
    fontSize: 55, // Larger font for more impact
    fontWeight: 'bold',
    color: '#f8f8f8', // Softer white for a modern look
    marginHorizontal: 5,
  },
  tagline: {
    fontSize: 25, // Smaller font for the tagline
    color: '#a29bfe', // Light purple for contrast
    marginTop: 10,
    fontWeight: '300',
    
  },
});
export default WelcomeScreen;

