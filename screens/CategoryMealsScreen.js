import React from "react";
import MealList from "../components/MealList";
import { CATEGORIES } from "../data/dummy-data";
import { useSelector } from "react-redux";

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam("categoryId"); //substracting the id from the params that we gave the item in the ctegoriesScreen

  //Accessing the state with redux and the useSelector hook( meals and filterdeMeals are the identifier i gave in the mealsreducer)
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  //const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;
