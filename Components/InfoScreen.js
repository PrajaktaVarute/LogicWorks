import { useState } from 'react';

import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity,Modal, Button } from 'react-native';

import Video from 'react-native-video';

 InfoScreen = (props) => {
  
  const [visibleModal, setVisibleModal] = useState(null);

  const openModal = (modalId) => setVisibleModal(modalId);
  const closeModal = () => setVisibleModal(null);

  const creationData = [
    {
      title: 'Fiction',
      description:
        'Immerse in AI-crafted fiction from Storynest.ai. Create imaginative worlds, compelling characters, and thrilling plots.',
      imageUrl: 'https://i.pinimg.com/236x/e0/1b/36/e01b36c4c12a8d71e2eddf169c45080a.jpg', // Fiction image URL
    },
    {
      title: 'Non-Fiction',
      description:
        'Ignite curiosity with AI-crafted non-fiction from Storynest.ai. Dive into subjects, share opinions, or explore biographies for captivating narratives.',
      imageUrl: 'https://i.pinimg.com/474x/a9/7c/f1/a97cf1be667c19a0f904bb8e9679788f.jpg', // Non-fiction image URL
    },
    {
      title: 'Educational',
      description:
        'Enhance learning with AI-generated educational stories. Transform complex concepts into engaging narratives and interactive lessons.',
      imageUrl: 'https://i.pinimg.com/474x/2b/ba/d5/2bbad561958f2f02d13191bd4935cbe9.jpg', // Educational image URL
    },
    {
      title: 'Motivational',
      description:
        'Inspire and uplift with AI-crafted motivational stories. Create narratives that encourage, empower, and drive positive change.',
      imageUrl: 'https://i.pinimg.com/736x/a4/3f/82/a43f823c84ed5ddb729337c2bdbcf5a9.jpg', // Motivational image URL
    },
    {
      title: 'Comic',
      description:
        'Unleash creativity with AI-generated comic stories. Develop humorous and visually engaging narratives that entertain and amuse.',
      imageUrl: 'https://i.pinimg.com/474x/c5/86/2e/c5862e45f6dd9069427a5ad7bb57ff78.jpg', // Comic image URL
    },
    {
      title: 'Fantasy',
      description:
        'Explore genre of fiction that involves magical elements, fantastical creatures, and often a setting in an imaginary world.',
      imageUrl: 'https://th.bing.com/th/id/OIP.sZuxQ0eOou2gT_6MgNF8owHaE8?w=273&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7', // Comic image URL
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Section 1: About the App */}
      
      <View style={styles.section}>
        
        
        <View style={styles.section}>
        <Text style={styles.header}>Create Videos with <Text style={styles.highlight}>Text Prompt</Text></Text>
        <Text style={{fontSize:16, color:'black', textAlign:'center'}}>
          Unleash Your Creativity with SnapStory. Publish ready videos with zero creation skills</Text>
          </View>
        {/* Get Started Button */}
        <TouchableOpacity style={styles.getStartedButton} onPress={()=>props.navigation.navigate("Signup")}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
        <Video
          source={{ uri: 'https://cdn.pixabay.com/video/2020/09/15/49981-459802291_tiny.mp4' }} // Replace with your video URL
          style={styles.video}
          resizeMode="contain"
          shouldPlay
          isLooping
        />
        <Video
        source={{ uri: 'https://cdn.pixabay.com/video/2020/04/08/35427-407130886_large.mp4' }} // Use a valid URL
        style={styles.video}
        
        resizeMode="contain"
        shouldPlay
        isLooping
        
/>
      

      {/* Section 2: How to Use the App */}
      <View style={styles.section}>
        
      {/* Section 2: How to Use the App with Modals */}
      <View style={styles.section}>
        <Text style={styles.section2}>How to Create your own Stories</Text>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.gridItem} onPress={() => openModal(1)}>
            <Text style={styles.gridTitle}>1. Enter Story Details</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem} onPress={() => openModal(2)}>
            <Text style={styles.gridTitle}>2. Generate Video</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem} onPress={() => openModal(3)}>
            <Text style={styles.gridTitle}>3. Preview the Video</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem} onPress={() => openModal(4)}>
            <Text style={styles.gridTitle}>4. Share or Share Feedback</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Modals for each step */}
      <Modal visible={visibleModal === 1} transparent={true} animationType="slide">
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Enter Story Details</Text>
          <Text style={styles.modalText}>
            Story Input: Type or paste your narrative or plot into the input field. Optionally add character names, settings, or plot points.
          </Text>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal visible={visibleModal === 2} transparent={true} animationType="slide">
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Generate Video</Text>
          <Text style={styles.modalText}>
            Tap the button to create your video. The app will process your story and generate scenes with visuals, narration, and audio. Processing time depends on story complexity.
          </Text>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal visible={visibleModal === 3} transparent={true} animationType="slide">
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Preview the Video</Text>
          <Text style={styles.modalText}>
            View a preview of the generated video to check if it meets expectations. If the app allows, provide feedback or request adjustments to the video.
          </Text>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal visible={visibleModal === 4} transparent={true} animationType="slide">
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>Share or Share Feedback</Text>
          <Text style={styles.modalText}>
            Share the video with friends, family, or on social media. Optionally, provide feedback on the video or the app’s performance.
          </Text>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>

      {/* Section 3: What Can You Create */}
      <View style={styles.section}>
        <Text style={styles.header}>What Can You Create</Text>
        <View style={styles.grid}>
          {creationData.map((item, index) => (
            <View key={index} style={styles.gridItem}>
              <Image source={{ uri: item.imageUrl }} style={styles.image} />
              <Text style={styles.gridTitle}>{item.title}</Text>
              <Text style={styles.gridDescription}>{item.description}</Text>
            </View>
          ))}
        </View>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fdfeff',
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 35,
    color: '#000',
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  section2: {
    fontSize: 22,
    color: '#000',
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    backgroundColor: '#c1e3e7',//'#ec8afd', Light purple
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  gridTitle: {
    fontSize: 18,
    color: '#057c8e',
    fontWeight: 'bold',
  },
  description: {
    color: '#000',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'justify'
  },
  
  highlight: {
    color: '#057c8e', // Purple color for highlighted text
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 150, // Adjust height based on your layout preference
    marginBottom: 5,
    borderRadius: 5,
  },
  gridDescription: {
    color: '#000',
    fontSize: 14,
    marginTop: 5,
  },
  getStartedButton: {
    backgroundColor: '#057c8e', //'#8A2BE2', // Purple background color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalView: {
    backgroundColor:'#fdfeff',
    margin: 30,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#057c8e',
    marginBottom: 15,
  },
  modalText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'justify',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#057c8e',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  video: {
    width: '100%', // Set to full width
    height: 200, // Set height
    borderRadius: 10, // Rounded corners
    margin: 10, // Space around the video
    backgroundColor: '#fff',
  },
});
export default InfoScreen;