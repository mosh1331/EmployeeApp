import * as React from "react";
import { Text, View, Image, StyleSheet, Easing } from "react-native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";



import EmployeeList from "../screens/EmployeeList";
import EmployeeDetails from "../screens/EmployeeDetails";


const Stack = createStackNavigator();




function Routes() {
  return (
    <Stack.Navigator
      initialRouteName={"EmployeeList"}
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        gestureDirection: "horizontal",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        
      }}
    >
      <Stack.Screen name="EmployeeList" component={EmployeeList} />
      <Stack.Screen name="EmployeeDetails" component={EmployeeDetails} />
    </Stack.Navigator>
  );
}

export default Routes;

const styles = StyleSheet.create({

});