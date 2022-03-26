import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute  } from '@react-navigation/native';

import routes from '../routes';
import Profile from "../../screens/Profile";
import styles from "../../constants/styles";
import Family from '../../screens/Family';

const ProfileStack = createNativeStackNavigator();

export default function FamilyNavigator({ navigation, route }: Props) {
  const routeName = getFocusedRouteNameFromRoute (route) || '';
  const tabShouldNotVisible = [routes.FAMILY]

  React.useLayoutEffect(() => {
    if (tabShouldNotVisible.includes(routeName)){
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    } else {
      navigation.setOptions({tabBarStyle: {...styles.tabBarStyle, display: 'flex'}});
    }
  }, [navigation, route]);

  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}} initialRouteName={routes.PROFILE_SCREEN}>
      <ProfileStack.Screen name={routes.FAMILY} component={Family} />
      <ProfileStack.Screen name={routes.PROFILE_SCREEN} component={Profile} />
    </ProfileStack.Navigator>
  );
}

interface Props {
  navigation: any, 
  route: any
}