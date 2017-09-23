import React, { Component } from 'react';
import { Text, View, Button, TextInput, Image, TouchableOpacity, Linking } from 'react-native';
import { NavigationActions} from 'react-navigation';

import styles from './Styles';
import Api from './Api';

export class AccoScreen extends Component {
		static navigationOptions = ({navigation}) => ({
  		title: "Accomodation",
		headerLeft: <TouchableOpacity activeOpacity={1} onPress={() => {navigation.dispatch(NavigationActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Home'})
                    ]
                  }))}}>
			<View style={styles.backiconcontainer}><Image source={require('./Icons/back.png')} style={styles.backicon} /></View>
		</TouchableOpacity>
});
		
		constructor(props){
			super(props);
			this.state = {
				homeaddress: "",
				accolineone: "",
				accolinetwo: "",
				lat: 0,
				lng: 0,
				searchstate: 0
			};
			
		}

		componentDidMount(){
			if(this.props.navigation.state.params.homename!=""){
				var homeData = this.props.navigation.state.params.homedata;
				this.setState({searchstate: 2, accolineone: homeData[0], accolinetwo: homeData[1], lat: homeData[2], lng: homeData[3], homeaddress: homeData[4]}); 
			}
		}
		
		searchAcco(){
			this.setState({searchstate: 1});
			Api.getAccoSearch(this.props.navigation.state.params.tripdata[2],this.state.homeaddress)
    			.then((response) => {
				this.setState({searchstate: 2, accolineone: response["data"][0], accolinetwo: response["data"][1], lat: response["data"][2], lng: response["data"][3]}); 
    			})
    			.catch((error) => {
        			alert(error);
				throw error;
    			});
		}

		saveHomeLocation(){
			Api.saveAccoDetails(this.state.homeaddress + " "+ this.props.navigation.state.params.tripdata[2], this.state.lat, this.state.lng, this.props.navigation.state.params.tripdata);
			alert("Your home location has been saved");
			this.props.navigation.navigate('Plan',{locsdata: this.props.navigation.state.params.locsdata, tripdata: this.props.navigation.state.params.tripdata, swiperstate: this.props.navigation.state.params.swiperstate});
		}
	
		goLaterBook(){
			Api.saveDefaultAccoDetails(this.props.navigation.state.params.tripdata);
			this.props.navigation.navigate('Plan',{locsdata: this.props.navigation.state.params.locsdata, tripdata: this.props.navigation.state.params.tripdata, swiperstate: this.props.navigation.state.params.swiperstate});
		}

		goBook(){
			Api.getBookingLink(this.props.navigation.state.params.tripdata[0], this.props.navigation.state.params.tripdata[1], this.props.navigation.state.params.tripdata[2])
    			.then((response) => {
				this.props.navigation.navigate('AccoBook',{url: response["url"], locsdata: this.props.navigation.state.params.locsdata, tripdata: this.props.navigation.state.params.tripdata, swiperstate: this.props.navigation.state.params.swiperstate});
    			})
    			.catch((error) => {
        			console.error(error);
				throw error;
    			});
		}
		
		render() {
			var str = <View style={styles.heightcontainer}></View>;
			var textbox = <TextInput
					ref={component => this._homeInput = component}
        				style={styles.accoinput}
        				placeholder="Search already booked home"
					underlineColorAndroid={'transparent'}
					onChangeText={(text) => {this.setState({homeaddress: text});}}
      					/>;
			if(this.props.navigation.state.params.homename!=""){
				textbox = <TextInput
					ref={component => this._homeInput = component}
        				style={styles.accoinput}
        				value={this.props.navigation.state.params.homedata[4]}
					underlineColorAndroid={'transparent'}
					onChangeText={(text) => {this.setState({homeaddress: text});}}
      				/>;
			}
			if(this.state.searchstate==1){
				str = <View style={styles.searchloadingcontainer}>
						<Text style={styles.searchloadingtext}>Searching...</Text>
					</View>;
			}
			else if(this.state.searchstate==2){
				str = <View><View style={styles.searchresultscontainer}>
						<Text style={styles.searchresultstext}>ADDRESS FOUND</Text>
					</View>
					<View style = {styles.accoviewcontainer}>
						<View style={styles.accodetailscontainer}>
							<Text style={styles.accolineonetext}>{this.state.accolineone}</Text>
							<Text style={styles.accolinetwotext}>{this.state.accolinetwo}</Text>
				  		</View>
						<View style={styles.accocheckbuttoncontainer}>
							<TouchableOpacity
								activeOpacity = {1}
          							onPress={() => {Linking.openURL("https://www.google.co.in/maps?q="+this.state.homeaddress+" "+this.city).catch(err => alert(err));}}>
								<View style= {styles.accocheckbuttonview}>
									<Text style={styles.accocheckbuttontext}>CHECK IN MAPS</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
					<View style={styles.homesavebuttoncontainer}>
						<TouchableOpacity
							activeOpacity = {1}
          						onPress={this.saveHomeLocation.bind(this)}>
							<View style= {styles.oneclickbookbuttonview}>
								<Text style={styles.oneclickbookbuttontext}>SAVE HOME LOCATION</Text>
							</View>
						</TouchableOpacity>
					</View>
					</View>;
			}			
			return(
				<View style={styles.cityview}>
					<View style={styles.citysearchview}>
						{textbox}
						<TouchableOpacity
							activeOpacity = {1}
          						onPress={this.searchAcco.bind(this)}>
							<View style={styles.accoimagecontainer}>
								<Image 
									style={styles.calendaricon}
									source={require('./Icons/search.png')}
								/>
							</View>
						</TouchableOpacity>
					</View>	
					{str}
					<View style={styles.lineplusor}>
						<View style={{flex:0.05}}></View>
						<View style={styles.buttongreyline}></View>
						<View style={{flex:0.05}}></View>
						<View style={styles.orview}>
							<Text style={styles.ortext}>OR</Text>
						</View>
						<View style={{flex:0.05}}></View>
						<View style={styles.buttongreyline}></View>
						<View style={{flex:0.05}}></View>
					</View>
					<View style={styles.homesavebuttoncontainer}>
						<TouchableOpacity
							activeOpacity = {1}
          						onPress={this.goBook.bind(this)}>
							<View style= {styles.oneclickbookbuttonview}>
								<Text style={styles.oneclickbookbuttontext}>BOOK VIA BOOKING.COM</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.lineplusor}>
						<View style={{flex:0.05}}></View>
						<View style={styles.buttongreyline}></View>
						<View style={{flex:0.05}}></View>
						<View style={styles.orview}>
							<Text style={styles.ortext}>OR</Text>
						</View>
						<View style={{flex:0.05}}></View>
						<View style={styles.buttongreyline}></View>
						<View style={{flex:0.05}}></View>
					</View>
					<View style={styles.homesavebuttoncontainer}>
						<TouchableOpacity
							activeOpacity = {1}
          						onPress={this.goLaterBook.bind(this)}>
							<View style= {styles.oneclickbookbuttonview}>
								<Text style={styles.oneclickbookbuttontext}>SAVE HOME LATER</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			);
		}
	
}