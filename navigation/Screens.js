import React from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";


import ComponentsScreen from '../screens/Components';
import HomeScreen from '../screens/Home';
import OnboardingScreen from '../screens/Onboarding';
import ProfileScreen from '../screens/Profile';
import ProScreen from '../screens/Pro';
import SettingsScreen from '../screens/Settings';
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import HistorialScreen from '../screens/Historial';
import PuntosScreen from '../screens/Puntos';
import PruebaScreen from '../screens/Prueba';
import FAQScreen from '../screens/FAQ';
import TrackingOrdenesScreen from '../screens/TrackingOrdenes';
import ConfirmScreen from '../screens/Confirm';

import CustomDrawerContent from './Menu';
import { Icon, Header } from '../components';
import { Images, materialTheme } from "../constants/";

const { width } = Dimensions.get("screen");

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const profile = {
  avatar: Images.Profile,
  name: "Rachel Brown",
  type: "Seller",
  plan: "Pro",
  rating: 4.8
};

function ProfileStack(props) {
  return (
    <Stack.Navigator initialRouteName="Profile" mode="card" headerMode="screen">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              transparent
              title="Profile"
              scene={scene}
              navigation={navigation}
            />
          ),
          headerTransparent: false
        }}
      />
    </Stack.Navigator>
  );
}

function TrackingOrdenesStack(props) {
  return (
    <Stack.Navigator initialRouteName="TrackingOrdenes" mode="card" headerMode="screen">
      <Stack.Screen
        name="TrackingOrdenes"
        component={TrackingOrdenesScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              transparent
              title="Tracking de Órdenes"
              scene={scene}
              navigation={navigation}
            />
          ),
          headerTransparent: false
        }}
      />
    </Stack.Navigator>
  );
}
function PruebaStack(props) {
  return (
    <Stack.Navigator initialRouteName="Prueba" mode="card" headerMode="screen">
      <Stack.Screen
        name="Prueba"
        component={PruebaScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              transparent
              title="Prueba"
              scene={scene}
              navigation={navigation}
            />
          ),
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

function ConfirmStack(props) {
  return (
    <Stack.Navigator initialRouteName="Confirm" mode="card" headerMode="screen">
      <Stack.Screen
        name="Confirm"
        component={ConfirmScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Confirm"
              scene={scene}
              navigation={navigation}
            />
          ),
          headerTransparent: false
        }}
      />
    </Stack.Navigator>
  );
}
function FAQStack(props) {
  return (
    <Stack.Navigator initialRouteName="FAQ" mode="card" headerMode="screen">
      <Stack.Screen
        name="FAQ"
        component={FAQScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="FAQ"
              scene={scene}
              navigation={navigation}
            />
          ),
          headerTransparent: false
        }}
      />
    </Stack.Navigator>
  );
}

function SettingsStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      mode="card"
      headerMode="screen"
    >
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Settings" scene={scene} navigation={navigation} />
          )
        }}
      />
    </Stack.Navigator>
  );
}

function ComponentsStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen
        name="Components"
        component={ComponentsScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header title="Components" scene={scene} navigation={navigation} />
          )
        }}
      />
    </Stack.Navigator>
  );
}

export default function SignInStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        option={{
          headerTransparent: true
        }}
      />
      <Stack.Screen name="App" component={AppStack} />
      <Stack.Screen name="Sign Up" component={SignUpStack} />
    </Stack.Navigator>
  )
}


function SignUpStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        option={{
          headerTransparent: true
        }}
        />
        <Stack.Screen name="App" component={AppStack} />
        <Stack.Screen name="Sign In" component={SignInStack} />
    </Stack.Navigator>
  )
}

function HomeStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="screen">
      <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header 
              search
              tabs
              title="Home"
              navigation={navigation}
              scene={scene}
            />
          )
        }}
      />
      <Stack.Screen 
        name="Pro"
        component={ProScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header back white transparent title="" navigation={navigation} scene={scene} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={props => (
        <CustomDrawerContent {...props} profile={profile} />
      )}
      drawerStyle={{
        backgroundColor: "white",
        width: width * 0.8
      }}
      drawerContentOptions={{
        activeTintColor: "white",
        inactiveTintColor: "#000",
        activeBackgroundColor: materialTheme.COLORS.ACTIVE,
        inactiveBackgroundColor: "transparent",
        itemStyle: {
          width: width * 0.74,
          paddingHorizontal: 12,
          // paddingVertical: 4,
          justifyContent: "center",
          alignContent: "center",
          // alignItems: 'center',
          overflow: "hidden"
        },
        labelStyle: {
          fontSize: 18,
          fontWeight: "normal"
        }
      }}
      initialRouteName="Home"
    >
      <Drawer.Screen 
        name="Historial"
        component={HistorialStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon 
              size={16}
              name="md-book"
              family="ionicon"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
      <Drawer.Screen 
        name="Confirm"
        component={ConfirmStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon 
              size={16}
              name="md-book"
              family="ionicon"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
      <Drawer.Screen 
        name="Puntos"
        component={PuntosStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon 
              size={16}
              name="md-star"
              family="ionicon"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
      <Drawer.Screen 
        name="Tracking de Órdenes"
        component={TrackingOrdenesStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon 
              size={16}
              name="md-star"
              family="ionicon"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
      <Drawer.Screen 
        name="FAQ"
        component={FAQStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon 
              size={16}
              name="md-star"
              family="ionicon"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="shop"
              family="GalioExtra"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Woman"
        component={ProScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="md-woman"
              family="ionicon"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
              style={{ marginLeft: 4, marginRight: 4 }}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Man"
        component={ProScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="man"
              family="entypo"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Kids"
        component={ProScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="baby"
              family="GalioExtra"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
      <Drawer.Screen
        name="New Collection"
        component={ProScreen}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="grid-on"
              family="material"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="circle-10"
              family="GalioExtra"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Prueba"
        component={PruebaStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="circle-10"
              family="GalioExtra"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="gears"
              family="font-awesome"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
              style={{ marginRight: -3 }}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Components"
        component={ComponentsStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="md-switch"
              family="ionicon"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
              style={{ marginRight: 2, marginLeft: 2 }}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Sign In"
        component={SignInStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="ios-log-in"
              family="ionicon"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Sign Up"
        component={SignUpStack}
        options={{
          drawerIcon: ({ focused }) => (
            <Icon
              size={16}
              name="md-person-add"
              family="ionicon"
              color={focused ? "white" : materialTheme.COLORS.MUTED}
            />
          )
        }}
      />
    </Drawer.Navigator>
  );
}

function HistorialStack(props) {
  return (
    <Stack.Navigator initialRouteName="Historial" mode="card" headerMode="screen">
      <Stack.Screen
        name="Historial"
        component={HistorialScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              white
              title="Historial"
              scene={scene}
              navigation={navigation}
            />
          ),
          headerTransparent: false
        }}
      />
    </Stack.Navigator>
  )
}

function PuntosStack(props) {
  return (
    <Stack.Navigator initialRouteName="Puntos" mode="card" headerMode="screen">
      <Stack.Screen
        name="Puntos"
        component={PuntosScreen}
        options={{
          header: ({ navigation, scene }) => (
            <Header
              title="Puntos"
              scene={scene}
              navigation={navigation}
            />
          ),
          headerTransparent: false
        }}
      />
    </Stack.Navigator>
  )
}
