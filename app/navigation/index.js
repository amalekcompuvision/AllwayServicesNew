import { BaseColor, BaseSetting, useTheme } from "@config";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { Platform, StatusBar } from "react-native";


import { useSelector } from "react-redux";



const RootStack = createStackNavigator();

// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

const Navigator = (props) => {
  // const storeLanguage = useSelector((state) => state.application.language);
  // const { theme, colors } = useTheme();
  // const isDarkMode = useDarkMode();
  // const forFade = ({ current, closing }) => ({
  //   cardStyle: {
  //     opacity: current.progress,
  //   },
  // });

  useEffect(() => {
    // i18n.use(initReactI18next).init({
    //   resources: BaseSetting.resourcesLanguage,
    //   lng: storeLanguage ?? BaseSetting.defaultLanguage,
    //   fallbackLng: BaseSetting.defaultLanguage,
    // });
    // SplashScreen.hide();
    if (Platform.OS == "android") {
      StatusBar.setBackgroundColor("#2383c6", true);
    }
    // StatusBar.setBarStyle(isDarkMode ? "light-content" : "dark-content", true);
    StatusBar.setBarStyle("light-content", true);
  }, []);
  return (
    // <DarkModeProvider>
    <NavigationContainer
    // theme={theme}
    >
      <RootStack.Navigator
        mode="modal"
        headerMode="none"
        initialRouteName="Loading"
      >
        {/* <RootStack.Screen
            name="Loading"
            component={Loading}
            options={{ gestureEnabled: false }}
          />
          <RootStack.Screen name="Main" component={Main} />
          <RootStack.Screen name="Filter" component={Filter} />
          <RootStack.Screen name="EHome" component={EHome} />
          <RootStack.Screen name="SearchHistory" component={SearchHistory} />
          <RootStack.Screen
            name="PreviewImage"
            component={PreviewImage}
            options={{
              cardStyleInterpolator: ({ current: { progress } }) => ({
                cardStyle: {
                  opacity: progress.interpolate({
                    inputRange: [0, 0.5, 0.9, 1],
                    outputRange: [0, 0.25, 0.7, 1],
                  }),
                },
                overlayStyle: {
                  opacity: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 0.5],
                    extrapolate: "clamp",
                  }),
                },
              }),
            }}
          /> */}
        {/* <RootStack.Screen
            name="SelectDarkOption"
            component={SelectDarkOption}
            gestureEnabled={false}
            options={{
              cardStyleInterpolator: forFade,
              cardStyle: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
            }}
          /> */}
        {/* <RootStack.Screen
            name="SelectFontOption"
            component={SelectFontOption}
            gestureEnabled={false}
            options={{
              cardStyleInterpolator: forFade,
              cardStyle: {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
            }}
          /> */}
        {/* <RootStack.Screen name="SignIn" component={SignIn} /> */}
        {/** ECommerce */}
        {/* <RootStack.Screen name="EFilter" component={EFilter} />
          <RootStack.Screen name="ESearchHistory" component={ESearchHistory} />
          <RootStack.Screen name="ESearchBarcode" component={ESearchBarcode} /> */}
        {/* <RootStack.Screen name="ESearchBarcode" component={ESearchBarcode} /> */}
        {/* <RootStack.Screen name="EProduct" component={EProduct}  /> //import eproduct first*/}
      </RootStack.Navigator>
    </NavigationContainer>
    {/* </DarkModeProvider> */ }
  );
};

export default Navigator;
