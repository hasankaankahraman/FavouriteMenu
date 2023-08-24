import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CATEGORIES} from '../Data/fooddata';
import CategoryButtons from '../Components/CategoryButtons';

export default function CategoriesScreen({navigation}) {
  const renderCategoryItem = data => {
    const detailhandler = () => {
      navigation.navigate('Details', {kategoriid: data.item.id});
    };
    // console.log(data.item);
    return (
      <CategoryButtons
        title={data.item.title}
        color={data.item.color}
        detailbutton={detailhandler}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#334F70',
  },
});
