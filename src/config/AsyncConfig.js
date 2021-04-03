import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (val, key) => {
  try {
    const jsonValue = JSON.stringify(val);
    await AsyncStorage.setItem(key, jsonValue);
    return 'Setting data successful...';
  } catch (e) {
    return 'Something went wrong...';
  }
};

// /////////////////

export const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    return 'Something went wrong while gettting data from local storage...';
  }
};
