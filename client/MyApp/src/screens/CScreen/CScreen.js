import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const JavaScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://193.2.231.235:5000/codes/C++');
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onObjectPress = (object) => {
    navigation.navigate('Object Details', { object });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>C++ Code Scripts</Text>

        {data && data.length > 0 ? (
          data.map((item, index) => (
            <TouchableOpacity key={index} style={styles.item} onPress={() => onObjectPress(item)}>
              <Text style={styles.itemTitle}>{item.name}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={styles.itemTitle}>No data available</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#051C50',
    margin: 10,
    marginBottom: 50,
  },
  item: {
    marginBottom: 20,
  },
  itemTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 16,
  },
});

export default JavaScreen;
