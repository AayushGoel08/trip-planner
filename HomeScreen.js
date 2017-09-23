import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity,Image} from 'react-native';
import { LoginManager } from 'react-native-fbsdk';
import { AccessToken } from 'react-native-fbsdk';
import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

import { HomeTripView } from './MainScreenNavigator';
import styles from './Styles';
import Api from './Api';

export class HomeScreen extends Component {
		static navigationOptions = {
    			title: 'Tripofy',
			headerRight: <TouchableOpacity
					activeOpacity = {1}
          				onPress={() => {alert("Contact Aayush Goel at - \nEmail: axgoel8@gmail.com  \nWhatsApp:  +91-9910513133");}}>
					<Image 
						style={styles.infoicon}
						source={require('./Icons/info.png')}/>
				     </TouchableOpacity>
		};
		
		constructor(props){
			super(props);
			this.state = {loading: false, loggedIn: false, records: []};
			this.fbid = "";
			this.email = "";
			this.dispmonth = {
				1: "Jan",
				2: "Feb",
				3: "Mar",
				4: "Apr",
				5: "May",
				6: "Jun",
				7: "Jul",
				8: "Aug",
				9: "Sep",
				10: "Oct",
				11: "Nov",
				12: "Dec"
			};
		}
		
		componentDidMount(){
			AccessToken.getCurrentAccessToken()
			.then((response) => {
				response.accessToken.toString();
				this.initFacebookRequest();
    			})
    			.catch((error) => {
				this.setState({loading: true, loggedIn: false});
    			});
		}
		
		sanitizeRecords(data){
			var i = 0;
			for(i=0;i<data.length;i++){
				this.state.records.push([]);
				this.state.records[i].push(this.fbid);
				this.state.records[i].push(data[i][0]);
				this.state.records[i].push(data[i][4]);
				var temp = data[i][1].split("T")[0].split("-");
				this.state.records[i].push(temp[2]+" "+this.dispmonth[parseInt(temp[1])]+" "+parseInt(temp[0]));
				temp = data[i][2].split("T")[0].split("-");
				this.state.records[i].push(temp[2]+" "+this.dispmonth[parseInt(temp[1])]+" "+parseInt(temp[0]));
			}
		}
		
		_responseInfoCallback(error: ?Object, result: ?Object) {
  			if (error) {
    				alert('Error fetching data: ' + error.toString());
  			} else {
				this.fbid = result.id;
				this.email = result.email;
				Api.getUserTrips(this.fbid)
    				.then((response) => {
					this.sanitizeRecords(response["data"]["records"]);
					this.setState({loading: true, loggedIn: true}); 
    				})
    				.catch((error) => {
        				console.error(error);
					throw error;
    				});
  			}
  		}

		initFacebookRequest(){
			const infoRequest = new GraphRequest(
  				'/me?fields=id,email',
  				null,
  				this._responseInfoCallback.bind(this),
			);
      
			new GraphRequestManager().addRequest(infoRequest).start();
  		}

		loginFacebook(){
			var this_1 = this;
			LoginManager.logInWithReadPermissions(["public_profile"]).then(
				function(result) {
    					if (result.isCancelled) {
      						alert('Login was cancelled');
    					} 	else {
						this_1.initFacebookRequest();
    					}
  					},
  					function(error) {
    						alert('Login failed with error: ' + error);
  					}
			);
		}

		render() {
			const { navigate } = this.props.navigation;
			
			var str = <Text>Loading...</Text>;
			
			if(this.state.loading && this.state.loggedIn){
				str = <View><View style={styles.hometripsview}>{this.state.records.map((value,i) => {
         				return (
						<HomeTripView 
							image1='http://imgs.abduzeedo.com/files/articles/skydiving/160479414_ea07a5ad9d.jpg'
							image2='http://imgs.abduzeedo.com/files/articles/skydiving/160479414_ea07a5ad9d.jpg'
							image3='http://imgs.abduzeedo.com/files/articles/skydiving/160479414_ea07a5ad9d.jpg'
							image4='http://imgs.abduzeedo.com/files/articles/skydiving/160479414_ea07a5ad9d.jpg'
							city={this.state.records[i][1]}
							fbid={this.state.records[i][0]}
							tripid={this.state.records[i][2]}
							navigation={this.props.navigation}
							key = {i}
							date1={this.state.records[i][3]}
							date2={this.state.records[i][4]}
						/>
         				);
      			    		}
					)
					}</View>
					<View style={styles.addbuttoncontainer}>
						<TouchableOpacity
							activeOpacity = {1}
          						onPress={() => {navigate('AddTrip')}}>
							<View style={styles.addbutton}>
								<Text style={styles.addbuttonplus}>+</Text>
							</View>
						</TouchableOpacity>
					</View>
					</View>
    			}
    			else if(this.state.loading){
				str = <View style={styles.facebookcontainer}>
						<Button	width={100}
							onPress={this.loginFacebook.bind(this)} 
						title="Login with Facebook" color="#2962FF" />
					</View>
    			}
			
			return(
				<View>{str}</View>
			);
		}
	
}