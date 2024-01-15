import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import WelcomeScreen from './screens/WelcomeScreen';
import UserScreen from './screens/UserScreen';

// const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#3c0a6b' },
          headerTintColor: '#fff',
          drawerActiveBackgroundColor: '#3c0a6b',
          drawerActiveTintColor: '#fff',
          // drawerStyle: { backgroundColor: '#ccc' },
        }}
      >
        <Drawer.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={{
            drawerLabel: 'Welcome Screen',
            drawerIcon: ({ color, size }) => {
              return <Ionicons name='home' size={size} color={color} />;
            },
          }}
        />
        <Drawer.Screen
          name='User'
          component={UserScreen}
          options={{
            drawerLabel: 'Welcome Screen',
            drawerIcon: ({ color, size }) => {
              return <Ionicons name='person' size={size} color={color} />;
            },
          }}
        />
      </Drawer.Navigator> */}
      <BottomTab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#3c0a6b' },
          headerTintColor: '#fff',
        }}
      >
        <BottomTab.Screen name='Welcome' component={WelcomeScreen} />
        <BottomTab.Screen name='User' component={UserScreen} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}
