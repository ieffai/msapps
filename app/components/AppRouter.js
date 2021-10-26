import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Logo} from '.';
import {publicRoutes} from '../routes/publicRoutes';
import {NavigationContainer} from '@react-navigation/native';
import Colors from '../utils/Colors';

const AuthStack = createStackNavigator();

const AppRouter = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        {publicRoutes.map(({name, Component}) => (
          <AuthStack.Screen
            key={name}
            name={name}
            component={Component}
            options={{
              headerRight: () => <Logo />,
              headerTintColor: Colors.gray,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        ))}
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
