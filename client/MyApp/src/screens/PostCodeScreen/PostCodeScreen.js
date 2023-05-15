import { View, Text, StyleSheet, ScrollView,} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const PostCodeScreen = () => {
  const [codeName, setCodeName] = useState('');
  const [programmingLanguage, setProgrammingLanguage] = useState('');
  const [code, setCode] = useState('');

  const navigation = useNavigation();

  const onPostPressed = async () => {
    try {
      if (!codeName || !programmingLanguage || !code) {
        console.warn('Please fill in all fields');
        return;
      }

      const newCode = {
        name: codeName,
        language: programmingLanguage,
        code: code,
      };

      await axios.post('http://193.2.231.235:5000/codes', newCode);

      console.warn('Code Posted');
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
    }
  };

  const onChangedMindPressed = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Post your code</Text>

        <CustomInput
          placeholder="Code Name"
          value={codeName}
          setValue={setCodeName}
          secureTextEntry={false}
        />

        <Picker
          selectedValue={programmingLanguage}
          onValueChange={(value) => setProgrammingLanguage(value)}
          style={styles.picker}
        >
          <Picker.Item label="Select Programming Language" value="" />
          <Picker.Item label="JavaScript" value="JavaScript" />
          <Picker.Item label="Python" value="Python" />
          <Picker.Item label="Java" value="Java" />
          <Picker.Item label="C++" value="C++" />
        </Picker>

        <CustomInput
          placeholder="Code"
          value={code}
          setValue={setCode}
          secureTextEntry={false}
          multiline={true}
        />

        <CustomButton text={'Post'} onPress={onPostPressed} />
        <CustomButton
          text={'I changed my mind'}
          onPress={onChangedMindPressed}
          type="TERTIARY"
        />
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
  picker: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
  },
});

export default PostCodeScreen;