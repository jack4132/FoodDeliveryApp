import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

import {OrderDelivery,Restaurant,Home} from "./screens";
import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}
        initialRouteName={"Home"}
      >
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
      </Stack.Navigator>
    </NavigationContainer>
    // <OrderDelivery/>
  )
}

export default App;
