import React from "react";
import { View, Text,Button } from "react-native";
import { Colors } from "../static/ColorComfig";

const Header = ({navigation}) => {
  return (
    <View
      style={{
        width: "100%",
        height:"100%",
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text >GroupBuy</Text>	
      <Button
          onPress={() => navigation.navigate('productForm')}
          title="פרסם מוצר חדש"
          color="black"
        />  
    </View>
  );
};

export default Header;