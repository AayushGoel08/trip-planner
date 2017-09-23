import React, { Component } from 'react';
import { Text, View, Button, WebView, TouchableOpacity } from 'react-native';

import styles from './Styles';
import Api from './Api';

export class AccoBookScreen extends Component {
		static navigationOptions = {
    			title: 'Booking Accomodation',
		};
		
		constructor(props){
			super(props);
			this.state = {
				canGoBack: false
			};	
		}
		
		_onNavigationStateChange(webViewState){
			this.setState({
				canGoBack: webViewState.canGoBack
			});
			if(webViewState.loading==false){
				if(webViewState.url.indexOf("secure.booking.com/confirmation") !== -1){
					Api.getAccoName(webViewState.url)
    					.then((response) => {
						alert("Your home location has been booked and saved: "+ response["data"] + " "+this.props.navigation.state.params.tripdata[2]);
						Api.sendAccoName(response["data"] + " "+this.props.navigation.state.params.tripdata[2], this.props.navigation.state.params.tripdata);
						this.props.navigation.navigate('Plan',{locsdata: this.props.navigation.state.params.locsdata, tripdata: this.props.navigation.state.params.tripdata, swiperstate: this.props.navigation.state.params.swiperstate});
    					})
    					.catch((error) => {
        					alert(error);
						throw error;
    					});
				}
			}
		}
		
		onBack() {
 	 		this._webViewRef.goBack();
		}

		render() {
			return(
				<View style={styles.paywindowscreen}>
					<View style={{flex: 0.001, backgroundColor: 'gray'}}></View>
					<View style={styles.webviewtopbar}>
						<View style={{flex:0.75}}></View>
						<View style={{flex:0.25, alignItems: 'center', justifyContent: 'center'}}>
  							<TouchableOpacity
    								disabled={!this.state.canGoBack}
    								onPress={this.onBack.bind(this)}>
    									<Text style={styles.webviewtopbartext}>GO BACK</Text>
  							</TouchableOpacity>
							</View>
						</View>
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