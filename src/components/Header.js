import React from "react";
import { View, Text } from "react-native";
import { Colors } from "../static/ColorComfig";

const Header = () => {
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
    </View>
  );
};

export default Header;