import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function FoodItem({
  id,
  title,
  afforability,
  complexity,
  imageUrl,
  ingredients,
}) {
  const navigation = useNavigation();
  const infohandle = () => {
    navigation.navigate('Information', {FoodId: id});
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.pressable} onPress={infohandle}>
        <Image style={styles.image} source={{uri: imageUrl}} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{afforability}</Text>
        <Text style={styles.text}>{complexity}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressable: {
    borderWidth: 2,
    borderColor: '#6E98BA',
    margin: 10,
    width: 200,
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C5D7ED',
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontWeight: 'bold',
    color: '#334F70',
  },
  text: {
    color: '#6E98BA',
  },
});
