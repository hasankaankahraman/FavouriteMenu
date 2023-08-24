import {StyleSheet} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {FOODS, CATEGORIES} from '../Data/fooddata';
import FoodList from '../Components/FoodList';

export default function DetailScreen({route, navigation}) {
  const CategoryID = route.params.kategoriid;
  const displayfoods = FOODS.filter(fooditem => {
    return fooditem.categoryIds.indexOf(CategoryID) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      category => category.id === CategoryID,
    ).title;
    navigation.setOptions({
      title: categoryTitle,
    });
  }, [navigation, CategoryID]);

  return <FoodList items={displayfoods} />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#334F70',
    flex: 1,
  },
});
