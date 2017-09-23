import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';

import styles from './Styles';
import Api from './Api';

export class PayScreen extends Component {
		static navigationOptions = {
    			title: 'Payment',
		};
		
		constructor(props){
			super(props);
		}
		
		goPay(){
			Api.getPaymentLink()
    			.then((response) => {
				this.props.navigation.navigate('PayWindow', {url: response["payment_request"]["longurl"]});
    			})
    			.catch((error) => {
        			console.error(error);
				throw error;
    			});
		}
		
		render() {
			return(
				<View>
					<TouchableOpacity 
						activeOpacity = {1}
						onPress={this.goPay.bind(this)}>
						<View style= {styles.oneclickbookbuttonview}>
							<Text style={styles.oneclickbookbuttontext}>PAY!</Text>
						</View>
					</TouchableOpacity>	
				</View>
			);
		}
	
}