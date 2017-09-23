import React, { Component } from 'react';
import { AppRegistry, Image, Text, View, Button, TouchableOpacity } from 'react-native';
import { TabNavigator, StackNavigator, NavigationActions } from 'react-navigation';
import { AccessToken } from 'react-native-fbsdk';

import { CardScreen, TourScreen } from './CardScreen'
import { AddTripScreen } from './AddTripScreen'
import { HomeScreen } from './HomeScreen'
import { MapScreen } from './MapScreen'
import { AccoBookScreen } from './AccoBookScreen'
import { AccoScreen } from './AccoScreen'
import { PayScreen } from './PayScreen'
import { PayConfirmScreen } from './PayConfirmScreen'
import { PayWindowScreen } from './PayWindowScreen'
import { BookRequestScreen } from './BookRequestScreen'
import { ActivityDetailScreen } from './ActivityDetailScreen'

const MainScreenNavigator = TabNavigator({
  		Catalogue: { screen: CardScreen },
  		Selection: { screen: TourScreen },
	},
	{
		swipeEnabled: false,
		lazy: true,
	}	
);


MainScreenNavigator.navigationOptions = ({navigation}) => ({
  		title: "Activities",
		headerLeft: <TouchableOpacity activeOpacity={1} onPress={() => {navigation.dispatch(NavigationActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Home'})
                    ]
                  }))}}>
			<View style={{height:50,width:50, alignItems: 'center', justifyContent: 'center'}}><Image source={require('./Icons/back.png')} style={{height:20,width:20}} /></View>
		</TouchableOpacity>
});

const TripPlanner = StackNavigator({
		Home: {screen: HomeScreen},
  		AddTrip: {screen: AddTripScreen },
		Acco: {screen: AccoScreen},
		AccoBook: {screen: AccoBookScreen},
  		Plan: {screen: MainScreenNavigator},
		ActivityDetail: {screen: ActivityDetailScreen},
		Map: {screen: MapScreen},
		BookRequest: {screen: BookRequestScreen},
		Pay: {screen: PayConfirmScreen},
		PayWindow: {screen: PayWindowScreen},
});

AppRegistry.registerComponent('TripPlanner', () => TripPlanner);

