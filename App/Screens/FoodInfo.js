import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useLayoutEffect, useContext} from 'react'; // Note the corrected import statement
import {FOODS} from '../Data/fooddata';
import FoodIngredients from '../Components/FoodIngredients';
import EmptyStar from '../Icon/star.png';
import FullStar from '../Icon/fstar.png';
import {FavContext} from '../Store/favcontext'; // Note the corrected import statement

export default function FoodInfo({route, navigation}) {
  const favFoodContext = useContext(FavContext); // Use FavContext instead of FavContextProvider
  const Foodid = route.params.FoodId;
  const selectedFood = FOODS.find(food => food.id === Foodid);
  console.log(selectedFood);

  const isfav = favFoodContext.ids.includes(Foodid);

  const changeFavourite = () => {
    if (isfav) {
      console.log('**********SİLİNDİ**********');
      favFoodContext.removeFav(Foodid);
    } else {
      console.log('**********EKLENDİ**********');
      favFoodContext.addFav(Foodid);
    }
  };

  useLayoutEffect(() => {
    const FoodTitle = FOODS.find(title => title.id === Foodid).title;
    navigation.setOptions({
      title: FoodTitle,
      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => {
        return (
          <TouchableOpacity onPress={changeFavourite}>
            <Image
              source={isfav ? FullStar : EmptyStar} // Corrected source paths
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
        );
      },
    });
  }, [navigation, changeFavourite]);
  return (
    <View style={styles.container}>
      <View style={styles.blok}>
        <Image style={styles.image} source={{uri: selectedFood.imageUrl}} />
        <Text style={styles.title}>{selectedFood.title}</Text>
        <View style={styles.row}>
          <View style={styles.tag}>
            <Text style={styles.afforability}>{selectedFood.afforability}</Text>
          </View>
          <View style={styles.tag}>
            <Text style={styles.complexity}>{selectedFood.complexity}</Text>
          </View>
        </View>
        <View style={styles.scroll}>
          <FoodIngredients data={selectedFood.ingredients} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#334F70',
  },
  blok: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C5D7ED',
    borderRadius: 20,
  },
  image: {
    height: 300,
    width: 400,
    borderRadius: 20,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    color: '#334F70',
  },
  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 350,
    borderWidth: 2,
    borderColor: '#6E98BA',
    borderRadius: 20,
    marginBottom: 50,
  },
  text: {
    fontSize: 15,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 230,
    height: 30,
    marginBottom: 20,
  },
  tag: {
    backgroundColor: '#C5D7ED',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: 100,
    borderWidth: 2,
    borderColor: '#6E98BA',
  },
  afforability: {fontSize: 10, fontWeight: 'bold'},
  complexity: {fontSize: 10, fontWeight: 'bold'},
  ingredients: {},
});
