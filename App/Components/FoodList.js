import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import FoodItem from './FoodItem';

export default function FoodList({items}) {
  // eslint-disable-next-line react/no-unstable-nested-components
  const RenderFoods = data => {
    const Itemprops = {
      id: data.item.id,
      title: data.item.title,
      afforability: data.item.afforability,
      complexity: data.item.complexity,
      imageUrl: data.item.imageUrl,
      ingredients: data.item.ingredients,
    };
    return <FoodItem {...Itemprops} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={RenderFoods}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
