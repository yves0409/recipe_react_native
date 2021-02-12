import React from "react";
import {
  Button,
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        tilecolor={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "CategoryMeals",
            params: { categoryId: itemData.item.id }, //forwarding the categoryid as a param,give it any name you like
          });
        }}
      />
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
