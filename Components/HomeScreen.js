import React, { useState } from 'react';
import { View, ActivityIndicator, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import Video from 'react-native-video';

const PEXELS_API_KEY = 'HMfO1xrbhfZeQcNvTsUiy8FKyTF01TmWEpDfNZcs64p3CXPGrhOjiez7';  // Replace with your actual Pexels API Key

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [videoURL, setVideoURL] = useState(null);
  const [error, setError] = useState(null); // State to hold error messages

  // Function to generate a random page number
  const getRandomPageNumber = () => {
    return Math.floor(Math.random() * 100) + 1; // Random page between 1 and 100
  };

  const fetchAndPlayVideo = async () => {
    setLoading(true);
    setVideoURL(null); // Reset video URL before fetching a new video
    setError(null); // Reset error before fetching
    const randomPage = getRandomPageNumber(); // Generate random page

    try {
      const response = await fetch(https://api.pexels.com/videos/search?query=nature&per_page=1&page=${randomPage}, {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const videoFile = data.videos[0]?.video_files[0]?.link; // Get the first video URL

      if (videoFile) {
        setVideoURL(videoFile);
      } else {
        setError('No video found for this query.'); // Set error if no video is found
      }
    } catch (error) {
      console.error('Error fetching video:', error);
      setError('Failed to fetch video.'); // Update state with error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your prompts"
        placeholderTextColor="#888"
      />

      <TouchableOpacity style={styles.button} onPress={fetchAndPlayVideo}>
        <Text style={styles.buttonText}>Generate video</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
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
    backgroundColor: '#121212',
    padding: 20,
    justifyContent: 'center',
  },
  videoPlayer: {
    width: '100%',
    height: 200,
    marginTop: 20,
  },
  input: {
    height: 100,
    backgroundColor: '#1e1e1e',
    color: '#ffffff',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  button: {
    height: 50,
    backgroundColor: '#bb86fc', // Dark theme button color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff', // Button text color
    fontSize: 18,
  },
  errorText: {
    color: 'red', // Error message color
    marginTop: 10,
  },
});

export default HomeScreen;