import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import CustomButton from '../../components/CustomButton/CustomButton';

const ObjectDetailsScreen = ({ route, navigation }) => {
  const { object } = route.params;

  const onEditPressed = () => {
    navigation.navigate('Edit Code', { object });
  };

  const onDeletePressed = async () => {
    try {
      const objectId = object._id;
      const response = await axios.delete(`http://193.2.231.235:5000/codes/code/${objectId}`);

      if (response.data.status === 'OK') {
        Alert.alert('Code Deleted', 'The code snippet has been deleted successfully', [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Search Code');
            },
          },
        ]);
      } else {
        Alert.alert('Error', 'Failed to delete the code snippet');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to delete the code snippet');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{object.name}</Text>
      <Text style={styles.code}>{object.code}</Text>

      <CustomButton text={'Edit Code'} onPress={onEditPressed} type="TERTIARY" />
      <CustomButton text={'Delete Code'} onPress={onDeletePressed} style={{ backgroundColor: '#007bff' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  language: {
    fontSize: 18,
    marginBottom: 10,
  },
  code: {
    fontSize: 16,
    fontFamily: 'monospace',
  },
});

export default ObjectDetailsScreen;
