import React from "react";
import { TouchableWithoutFeedback, ScrollView, StyleSheet, Image } from "react-native";
import { Block, Text, theme } from "galio-framework";
import { useSafeArea } from "react-native-safe-area-context";

import { Icon, Drawer as DrawerCustomItem } from '../components/';
import { Images, materialTheme } from "../constants/";


function CustomDrawerContent({
  drawerPosition,
  navigation,
  profile,
  focused,
  state,
  ...rest
}) {
  const insets = useSafeArea();
  const screens = [
    "Profile",
    "Historial",
    "Puntos",
    "FAQ",
    "Home",
    "Tracking de Órdenes",
    "Confirm"
  ];
  return (
    <Block
      style={styles.container}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <Block flex={0.10} style={styles.header} />
      <Block flex style={{ paddingLeft: 7, paddingRight: 14 }}>
        <ScrollView
          contentContainerStyle={[
            {
              paddingTop: insets.top * 0.4,
              paddingLeft: drawerPosition === "left" ? insets.left : 0,
              paddingRight: drawerPosition === "right" ? insets.right : 0
            }
          ]}
          showsVerticalScrollIndicator={false}
        >
          <DrawerCustomItem
            title="Home"
            navigation={navigation}
          />
          <DrawerCustomItem
            title="Tracking de Órdenes"
            navigation={navigation}
          />
           
          {global.isLogged &&
             <>
            <DrawerCustomItem
              title="Historial"
              navigation={navigation}
            />
            <DrawerCustomItem
              title="Puntos"
              navigation={navigation}
            />
            <DrawerCustomItem
              title="Profile"
              navigation={navigation}
            />
            </>
          }
          <DrawerCustomItem
            title="FAQ"
            navigation={navigation}
          />
          
        </ScrollView>
      </Block>
      
      {!global.isLogged ? 
      <Block flex={0.3} style={{ paddingLeft: 7, paddingRight: 14 }}>
        <DrawerCustomItem
          title="Sign In"
          navigation={navigation}
        />
        <DrawerCustomItem
          title="Sign Up"
          navigation={navigation}
        />
      </Block> : 
      <Block />
      }
    </Block>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#4686c8',
  },
  footer: {
    paddingHorizontal: 28,
    justifyContent: 'flex-end'
  },
  profile: {
    marginBottom: theme.SIZES.BASE / 2,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginBottom: theme.SIZES.BASE,
  },
  
  seller: {
    marginRight: 16,
  }
});

export default CustomDrawerContent;
