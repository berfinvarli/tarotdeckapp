import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import ThreeCardsTarotScreen from './screens/ThreeCardsTarotScreen';
import YesNoTarotScreen from './screens/YesNoTarotScreen';


const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#222',
          tabBarLabelStyle: { fontSize: 14 },
          tabBarStyle: { height: 60, paddingBottom: 5 },
        }}
      >
        <Tab.Screen
          name="ThreeCard"
          component={ThreeCardsTarotScreen}
          options={{ tabBarLabel: '3 Card Tarot' }}
        />
        <Tab.Screen
          name="YesNo"
          component={YesNoTarotScreen}
          options={{ tabBarLabel: 'Yes/No Tarot' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
