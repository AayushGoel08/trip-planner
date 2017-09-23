import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, Image } from 'react-native';

import styles from './Styles';
import Api from './Api';

export class ActivityDetailScreen extends Component {
		static navigationOptions = {
    			title: 'Activity Details',
		};
		
		constructor(props){
			super(props);
		}

		render() {
			return(
				<View style={{flex:1}}>
					<View style={{flex:0.6}}>
						<Image 
							source={{uri: this.props.navigation.state.params.image}}
							style={{flex:1}}>
						</Image>
					</View>
					<View style={{flex:0.4, backgroundColor: '#FAFAFA'}}>
						<Text style={styles.detailtitle}>{this.props.navigation.state.params.activity}
						</Text>
						<Text style={styles.detaildescription}>{this.props.navigation.state.params.description}
						</Text>
					</View>
					<View style={{flex: 0.008, backgroundColor: '#EEEEEE'}}></View>
					<View style={{flex:0.37, backgroundColor: '#FAFAFA'}}>
						<View style={styles.icontextdetailscontainer}>
							<Image 
								source={require('./Icons/marker.png')}
								style={styles.detailicon}>
							</Image>
							<Text style={styles.detailtext}>{this.props.navigation.state.params.address}</Text>
						</View>
						<View style={styles.icontextdetailscontainer}>
							<Image 
								source={require('./Icons/cur.png')}
								style={styles.detailicon}>
							</Image>
							<Text style={styles.detailtext}>{this.props.navigation.state.params.price}</Text>
						</View>
						<View style={styles.icontextdetailscontainer}>
							<Image 
								source={require('./Icons/minutes.png')}
								style={styles.detailicon}>
							</Image>
							<Text style={styles.detailtext}>{this.props.navigation.state.params.time + " min"}</Text>
						</View>
					</View>
				</View>
			);
		}
	
}