import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FoodIngredients({data}) {
  return data.map(dataIng => (
    <View key={dataIng} style={styles.row}>
      <Text style={styles.text}>{dataIng}</Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  row: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#6E98BA',
    height: 30,
    width: 300,
    justifyContent: 'center',
    margin: 5,
    paddingLeft: 20,
  },
  text: {
    fontWeight: 'bold',
  },
});
