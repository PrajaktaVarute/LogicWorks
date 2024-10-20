import React, { useState } from 'react';
import { View, ActivityIndicator, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import Video from 'react-native-video';

const HomeScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [videoURL, setVideoURL] = useState(null);
  const [error, setError] = useState(null);
  const [userPrompt, setUserPrompt] = useState(''); // State to store user input
  const [time, setDuration] = useState('1');
  const fetchAndPlayVideo = async () => {
    setLoading(true);
    setVideoURL(null); // Reset video URL before fetching a new video
    setError(null); // Reset error before fetching

    try {
      const response = await fetch(`http://10.40.4.57:3000/generate`, {
        method: 'POST', // POST method
        headers: {
          'Content-Type': 'application/json', // Specify JSON data
        },
        body: JSON.stringify({
          prompt: userPrompt, // Send user prompt to the server
          duration : time,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const videoFile = data.videoUrl; // Adjust according to your API's response structure

      if (videoFile) {
        setVideoURL(videoFile); // Set the video URL if found
      } else {
        setError('No video found for this prompt.'); // Set error if no video is found
      }
    } catch (error) {
      console.error('Error fetching video:', error);
      setError('Failed to fetch video.'); // Update state with error message
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your prompts"
        placeholderTextColor="#888"
        onChangeText={setUserPrompt} // Capture user input
        value={userPrompt}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Duration"
        placeholderTextColor="#888"
        onChangeText={setDuration} // Capture user input
        value={time}
      />
      <TouchableOpacity style={styles.button} onPress={fetchAndPlayVideo}>
        <Text style={styles.buttonText}>Generate video</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#057c8e" />}
      {error && <Text style={styles.errorText}>{error}</Text>}
      {videoURL && (
        <Video
          source={{ uri: videoURL }}
          style={styles.videoPlayer}
          useNativeControls
          resizeMode="contain"
          isLooping
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfeff;',
    padding: 20,
    justifyContent: 'center',
  },
  videoPlayer: {
    width: '100%',
    height: 200,
    marginTop: 20,
  },
  input: {
    height: 60,
    backgroundColor: '#fdfeff',
    color: '#000',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  button: {
    height: 50,
    backgroundColor: '#057c8e',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default HomeScreen;
