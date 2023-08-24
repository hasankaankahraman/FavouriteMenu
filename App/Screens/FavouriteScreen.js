import {StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import {FavContext} from '../Store/favcontext';
import {FOODS} from '../Data/fooddata';
import FoodList from '../Components/FoodList';
import {View, Text} from 'react-native';
export default function FavouriteScreen() {
  const favFoodContext = useContext(FavContext);

  const favfoods = FOODS.filter(food => favFoodContext.ids.includes(food.id));
  if (favfoods.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Favoriye bir ürün eklemediniz.</Text>
      </View>
    );
  }

  return <FoodList items={favfoods} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
