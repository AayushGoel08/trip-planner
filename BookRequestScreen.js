import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, TextInput } from 'react-native';

import styles from './Styles';
import Api from './Api';

export class BookRequestScreen extends Component {
		static navigationOptions = {
    			title: 'Booking Request',
		};
		
		constructor(props){
			super(props);
			this.state = {requested: 0, email: "", phone:""};
		}
		

		giveBookingRequest(){
			var bookings = [];
			var i,j;
			for(i=0;i<this.props.navigation.state.params.data.length;i++){
				for(j=0;j<this.props.navigation.state.params.data[i].length;j++){
					if(this.props.navigation.state.params.data[i][j][3]==1){
						bookings.push(parseInt(this.props.navigation.state.params.data[i][j][4]));
					}
				}
			}
		
			var jsonObj = {
				"type": "BookingRequest",
				"tripid": this.props.navigation.state.params.tripdata[0],
				"fbid": this.props.navigation.state.params.tripdata[1],
				"city": this.props.navigation.state.params.tripdata[2],
				"locs": bookings,
				"email": this.state.email,
				"phone": this.state.phone
			};
			console.log(jsonObj);
			Api.makeBookingRequest(jsonObj)
    			.then((response) => {
				if(response["message"]=="Already booked"){
					this.setState({requested: 2});
				}
				else {
					this.setState({requested: 1});
				}
    			})
    			.catch((error) => {
        			console.error(error);
				throw error;
    			});
		}

		render() {
			if(this.props.navigation.state.params.status==3 || this.state.requested==2){
				return (
					<Text>Your booking request has already been made. A customer agent will contact you shortly to confirm your booking.</Text>
				);
			}
			else if(this.state.requested==1){
				return (
					<Text>Your booking request has been sent to our servers. A customer agent will contact you shortly to confirm your booking.</Text>
				);		
			}
			else{
			return (
				<View>
					<Text>To contact you regarding your booking, please enter your details: </Text>
					<View style={styles.citysearchview}>
						<TextInput
							ref={component => this._emailInput = component}
        						style={styles.emailinput}
        						placeholder="Enter E-mail Address"
							underlineColorAndroid={'transparent'}
							onChangeText={(text) => {this.setState({email: text})}}
   						/>
					</View>
					<View style={styles.citysearchview}>
						<TextInput
							ref={component => this._phoneInput = component}
        						style={styles.emailinput}
        						placeholder="Enter Phone Number"
							underlineColorAndroid={'transparent'}
							onChangeText={(text) => {this.setState({phone: text})}}
   						/>
					</View>
					<View style={styles.startplanbuttonview}>
        					<Button
          						onPress={this.giveBookingRequest.bind(this)}
          						title="Make Booking Request!"
        					/>
					</View>
				</View>
			);
			}
		}
	
}