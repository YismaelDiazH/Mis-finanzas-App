import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/base";
import ProfileStack from "../stack/ProfileStack";
import AboutStack from "../stack/AboutStack";

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // propiedades
        initialRouteName="profile"
        screenOptions={({ route }) => ({//se generan los botones del menu
          tabBarIcon: ({ color }) => screenOptions(route, color),
          tabBarActiveTintColor: "tomato", //Color del icono activo
          tabInactiveTintColor: "gray", //Color para estado inactivo
          headerShown: false
        })}
      >
        <Tab.Screen
        name ="profile"
        options={{title: 'Perfil'}}
        component={ProfileStack}
        />
        <Tab.Screen
        name ="about"
        options={{title: 'Conócenos'}}
        component={AboutStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const screenOptions = (route, color) => {
  let iconName;
  switch (route.name) {
    case "profile":
      iconName = "account-tie";

      break;
    case "about":
      iconName = "information";
      break;
    
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
};
