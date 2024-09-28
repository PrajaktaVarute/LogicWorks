import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

 InfoScreen = (props) => {
  

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
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Section 1: About the App */}
      <View style={styles.section}>
        <Text style={styles.header}>
          Unleash Your Creativity with <Text style={styles.highlight}>Uber</Text>
        </Text>
        <Text style={styles.description}>
          Our app is a generative storytelling app that takes input from users and creates video stories. Follow these steps to create your own video:
        </Text>

        {/* Get Started Button */}
        <TouchableOpacity style={styles.getStartedButton} onPress={()=>props.navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      {/* Section 2: How to Use the App */}
      <View style={styles.section}>
        <Text style={styles.section2}>Learn how to transform your story input into an immersive video in just a few steps.</Text>
        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <Text style={styles.gridTitle}>1. Enter Story Details</Text>
            <Text style={styles.gridText}>
              Story Input: Type or paste your narrative or plot into the input field.
              Optionally add character names, settings, or plot points.
            </Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.gridTitle}>2. Generate Video</Text>
            <Text style={styles.gridText}>
              Tap the button to create your video. The app will process your story and generate scenes with visuals, narration, and audio. Processing time depends on story complexity.
            </Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.gridTitle}>3. Preview the Video</Text>
            <Text style={styles.gridText}>
              View a preview of the generated video to check if it meets expectations. If the app allows, provide feedback or request adjustments to the video.
            </Text>
          </View>
          <View style={styles.gridItem}>
            <Text style={styles.gridTitle}>4. Share or Share Feedback</Text>
            <Text style={styles.gridText}>
              Share the video with friends, family, or on social media. Optionally, provide feedback on the video or the app’s performance.
            </Text>
          </View>
        </View>
      </View>

      {/* Section 3: What Can You Create */}
      <View style={styles.section}>
        <Text style={styles.header}>What Can You Create</Text>
        <View style={styles.singleColumnGrid}>
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
    backgroundColor: '#121212',
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 35,
    color: '#fff',
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  section2:{
    fontSize: 25,
    color: '#fff',
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'justify',
  },
  section3:{
    fontSize: 25,
    color: '#fff',
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'justify'
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  singleColumnGrid: {
    flexDirection: 'column',
  },
  gridItem: {
    width: '100%',
    backgroundColor: '#ec8afd', // Light shade of purple
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  gridTitle: {
    fontSize: 20,
    color: '#6a0dad',
    fontWeight: 'bold',
    marginBottom: 5,
    
  },
  gridText: {
    color: '#000',
    fontSize: 16,
    lineHeight: 20,
    textAlign: 'justify'
  },
  highlight: {
    color: '#bb86fc', // Purple color for highlighted text
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 400, // Adjust height based on your layout preference
    marginBottom: 5,
    borderRadius: 5,
  },
  gridDescription: {
    color: '#000',
    fontSize: 14,
    marginTop: 5,
  },
  getStartedButton: {
    backgroundColor: '#bb86fc',//'#8A2BE2', // Purple background color
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
});
export default InfoScreen;