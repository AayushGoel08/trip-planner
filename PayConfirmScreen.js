import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';

import styles from './Styles';
import Api from './Api';

export class PayConfirmScreen extends Component {
		static navigationOptions = {
    			title: 'Confirm Payment',
		};
		
		constructor(props){
			super(props);
			this.deposit = parseInt(this.props.navigation.state.params.deposit);
			this.commission = Math.max(1,this.deposit*0.02);
			this.totalpay = this.deposit+this.commission;
		}
		
		goPay(){
			Api.getPayULink(""+this.totalpay, this.props.navigation.state.params.tripdata)
    			.then((response) => {
				this.props.navigation.navigate('PayWindow', {url: response["url"], routedata: this.props.navigation.state.params.routedata, tripdata: this.props.navigation.state.params.tripdata, deposit: this.props.navigation.state.params.deposit});
    			})
    			.catch((error) => {
        			console.error(error);
				throw error;
    			});
		}
		
		render() {
			return(
				<View style={styles.payconfirmscreen}>
					<Text>For each person in your group, the cost is:</Text>
					<Text style={styles.paymargin}>ACTIVITY BOOKING: {"\u20ac"+this.props.navigation.state.params.deposit}</Text>
					<Text>COMMISSION: {"\u20ac"+1}</Text>
					<Text>TOTAL: {"\u20ac"+this.totalpay}</Text>
					<View style={styles.paybuttonstyle}>
					<TouchableOpacity 
						activeOpacity = {1}
						onPress={this.goPay.bind(this)}>
						<View style= {styles.oneclickbookbuttonview}>
							<Text style={styles.oneclickbookbuttontext}>PAY!</Text>
						</View>
					</TouchableOpacity>
					</View>	
				</View>
			);
		}
	
}