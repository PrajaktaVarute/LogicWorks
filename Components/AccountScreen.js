import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useRoute } from '@react-navigation/native';

export default AccountScreen = (props) => {
  const route = useRoute();
  const name = route?.params?.name || 'Username'; // Use a default value if name is not provided
  const email = route?.params?.email || 'User Email'; // Use a default value if email is not provided

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}></View>
      <Image 
        style={styles.avatar}
        //source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }}
        source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png' }}
      />
      <View style={styles.body}>
        <View style={styles.bodyContent}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.info}>{email}</Text>

          <TouchableOpacity style={styles.buttonContainer} onPress={() => props.navigation.navigate("Home")}>
            <Icon name="home" size={22} color={'white'} />
            <Text style={styles.buttonText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton}>
            <Icon name="logout" size={22} color={'white'} />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdfeff',
  },
  header: {
    backgroundColor: '#057c8e',
    height: 180,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'white',
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 100,
  },
  body: {
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#fdfeff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  bodyContent: {
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  name: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 10,
  },
  info: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#057c8e',
    width: '80%',
    height: 50,
    borderRadius: 25,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '600',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#057c8e',
    width: '80%',
    height: 50,
    borderRadius: 25,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 8,
  },
  logoutText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '600',
  },
});
