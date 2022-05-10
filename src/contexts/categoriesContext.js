import { createContext, useState, useEffect } from "react";
//import SHOP_DATA from "../data/shopData";
//import { addCollectionAndDocuments } from "../firebase/firebase.utils";
import { getCategoriesAndDocuments } from "../firebase/firebase.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // });

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  console.log(categoriesMap);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
