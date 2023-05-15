import { View, Image, StyleSheet, ScrollView, useWindowDimensions} from 'react-native';
import React, {useContext} from 'react';
import Logo from '../../../assets/images/logo2.png';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../components/Authentication/AuthContext';

const HomeScreen = () => {

    const {height} = useWindowDimensions();
    const {logout} = useContext(AuthContext);

    const navigation = useNavigation();

    const onShareCodePressed = () => {
        navigation.navigate('Post Code');
    }
    
    const onSearchCodePressed = () => {
        navigation.navigate('Search Code');
    }

    const onEditProfilePressed = () => {
        navigation.navigate('Edit Profile');
    }

    const onLogoutPressed = () => {
        logout();
        navigation.navigate('Sing In');
    }

    return (

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image 
                source={Logo} 
                style={[styles.logo, {height: height * 0.5}]}
                resizeMode='contain'
                />

                <CustomButton 
                text={'Share Code'} 
                onPress={onShareCodePressed}
                bgColor='#E7EAF4'
                fgColor='#4765A9'
                />
                <CustomButton 
                text={'Seach Code'} 
                onPress={onSearchCodePressed}
                bgColor='#FAE9E4'
                fgColor='#DD4D44'
                />
                <CustomButton 
                text={'Edit Profile'} 
                onPress={onEditProfilePressed}
                bgColor='#FAE9E4'
                fgColor='#DD4D44'
                />
                <CustomButton 
                text={'Logout'} 
                onPress={onLogoutPressed}
                bgColor='#E7EAF4'
                fgColor='#4765A9'
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 20,
    },
    logo: {
      marginBottom: 150,
      marginTop: 50,
      maxWidth: 300,
      maxHeight: 200,
    }
  })

export default HomeScreen