import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {TextLoader, DotsLoader} from 'react-native-indicator';
import {connect} from 'react-redux';
// import {storeObj, getObj} from '../config/AsyncConfig';
import {initilizeTodos} from '../redux/action';
import {MMKV} from 'react-native-mmkv';

const SplashScreen = ({navigation, initilizeTodos}) => {
  // const [todosArrState, settodosArrState] = useState('default');
  // useEffect(() => {
  //   todosArrData();
  // }, []);
  setTimeout(() => {
    todosArrData();
  }, 1000);

  const getObj = (key) => {
    const jsonData = MMKV.getString(key);
    if (jsonData != undefined) {
      return JSON.parse(jsonData);
    } else {
      return [];
    }
  };

  const todosArrData = async () => {
    const data = await getObj('todosArr');
    console.log('data=====..>>>', data);
    if (data !== '' || data != undefined || data != null) {
      await initilizeTodos(data);
      navigation.replace('AppDrawer');
    } else {
      await initilizeTodos([]);
      navigation.replace('AppDrawer');
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Image source={require('../Assets/hado.jpg')} style={styles.logo} />
        {/* <Text style={styles.text}>RAEES MARKETING SERVICES</Text> */}
        {/* <LogoHeader /> */}
        <DotsLoader color="#0f0f0f" />
        {/* <TextLoader text="Loading" /> */}
      </View>
    </>
  );
};

// const mapStateToProps = (state) => ({
// });
const mapDispatchToProps = (dispatch) => ({
  initilizeTodos: (data) => dispatch(initilizeTodos(data)),
});
export default connect(null, mapDispatchToProps)(SplashScreen);
// export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 100,
    backgroundColor: '#fff',
  },
  logo: {
    height: 150,
    width: '95%',
    resizeMode: 'contain',
  },
  // text: {
  //   fontFamily: 'Kufam-SemiBoldItalic',
  //   fontSize: 28,
  //   marginBottom: 10,
  //   color: '#051d5f',
  // },
  // hr: {
  //   borderWidth: 1,
  //   borderColor: '#e8e8e8',
  //   width: '100%',
  //   marginVertical: 5,
  // },
});
