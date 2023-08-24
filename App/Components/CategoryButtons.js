import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function CategoryButtons({title, color, detailbutton}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={detailbutton}
        style={[styles.categoryButton, {backgroundColor: color}]}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryButton: {
    height: 180,
    width: 180,
    borderWidth: 1,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
});
