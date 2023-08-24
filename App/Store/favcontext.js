import {createContext, useState} from 'react';
export const FavContext = createContext({
  ids: [],
  addFav: id => {},
  removeFav: id => {},
});
const FavContextProvider = ({children}) => {
  const [favFoodId, setFavFoodId] = useState([]);

  function addFav(id) {
    setFavFoodId(current => [...current, id]);
  }

  function removeFav(id) {
    setFavFoodId(current => current.filter(Foodid => Foodid !== id));
  }

  const value = {
    ids: favFoodId,
    addFav: addFav,
    removeFav: removeFav,
  };
  return <FavContext.Provider value={value}>{children}</FavContext.Provider>;
};

export default FavContextProvider;
