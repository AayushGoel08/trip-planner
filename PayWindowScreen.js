import React, { Component } from 'react';
import { Text, View, Button, WebView, TouchableOpacity } from 'react-native';

import styles from './Styles';
import Api from './Api';

export class PayWindowScreen extends Component {
		static navigationOptions = {
    			title: 'Payment Window',
		};
		
		constructor(props){
			super(props);
		}

		_onNavigationStateChange(webViewState){
			if(webViewState.loading==false){
				if(webViewState.url == "https://trip-plan-router.herokuapp.com/"){
					var jsonObj = {
						"type": "UpdatePaidStatus",
						"tripid": this.props.navigation.state.params.tripdata[0],
						"fbid": this.props.navigation.state.params.tripdata[1],
						"city": this.props.navigation.state.params.tripdata[2],
					};
					Api.postUserTrip(jsonObj);
					alert("Payment Successful! Navigating back to your trip!");
					this.props.navigation.navigate('Map', {status: 5, routedata: this.props.navigation.state.params.routedata, tripdata: this.props.navigation.state.params.tripdata, deposit: this.props.navigation.state.params.deposit});
				}
			}
		}

		render() {
			return(
				<View style={styles.paywindowscreen}>
					<WebView
						style={styles.accowebview}
						ref={component => this._webViewRef = component}
        					source={{uri: this.props.navigation.state.params.url}}
						javaScriptEnabledAndroid={true}
						onNavigationStateChange={this._onNavigationStateChange.bind(this)}
      					/>
				</View>
			);
		}
	
}