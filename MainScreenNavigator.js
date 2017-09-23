import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Linking, Alert } from 'react-native';
import { TabNavigator, NavigationActions } from 'react-navigation';

import styles from './Styles';
import Api from './Api';


export class HomeTripView extends Component{
	constructor(props){
		super(props);
	}
	
	onPressNavigation(){
		Api.getUserMap(this.props.fbid,this.props.tripid,this.props.city)
    			.then((response) => {
				if(response["status"]>=2){
					this.props.navigation.navigate('Map', {status: response["status"], routedata: response, tripdata: [this.props.tripid, this.props.fbid, this.props.city], deposit: response["deposit"]});
				}
				else if(response["status"]==1){
					this.props.navigation.navigate('Plan', {status: response["status"], locsdata: response["locsdata"], tripdata: [this.props.tripid, this.props.fbid, this.props.city], swiperstate: response["swiperstate"]});
				}
				else if(response["status"]==0){
					this.props.navigation.navigate('Acco', {status: response["status"], locsdata: response["locsdata"], tripdata: [this.props.tripid, this.props.fbid, this.props.city], homename: ""});
				}
    			})
    			.catch((error) => {
        			console.error(error);
				throw error;
    			});
	}
	
	deleteTrip(){
		var jsonObj = {
			"type": "DeleteTrip",
			"fbid": this.props.fbid,
			"city": this.props.city,
			"tripid": this.props.tripid
		};
		
		Api.postUserTrip(jsonObj)
    		.then((response) => {
			alert("Trip deleted!");
			this.props.navigation.dispatch(NavigationActions.reset({
                    		index: 0,
                    		actions: [
                      			NavigationActions.navigate({ routeName: 'Home'})
                    		]
                  	}));

    		})
    		.catch((error) => {
        		console.error(error);
			throw error;
    		});
		
	}
	
	editTrip(){
		var jsonObj = {
			"type": "GetHomeForEdit",
			"fbid": this.props.fbid,
			"city": this.props.city,
			"tripid": this.props.tripid
		};
		
		Api.postUserTrip(jsonObj)
    		.then((response) => {
			this.props.navigation.navigate('Acco', {locsdata: response["locsdata"], tripdata: [this.props.tripid, this.props.fbid, this.props.city], homename: "", swiperstate: response["swiperstate"], homedata: response["homedata"]});
    		})
    		.catch((error) => {
        		console.error(error);
			throw error;
    		});
	}


	confirmDeletion(){
		Alert.alert(
  			'Delete Trip',
  			'Are you sure you want to delete this trip?',
  			[
    				{text: 'Yes', onPress: this.deleteTrip.bind(this)},
				{text: 'No', onPress: () => {}},
  			]
		);
	}

	render(){
		return(
			<View style={styles.hometripcontainer}>
					<View style={styles.hometripview}>
						<View style={styles.fourimageview}>
							<View style={styles.twoimageview}>
								<Image 
									style={styles.hometripimage1}
									source={{uri: this.props.image1}}
								/>
								<Image 
									style={styles.hometripimage2}
									source={{uri: this.props.image2}}
								/>
							</View>
							<View style={styles.twoimageview}>
								<Image 
									style={styles.hometripimage3}
									source={{uri: this.props.image3}}
								/>
								<Image 
									style={styles.hometripimage4}
									source={{uri: this.props.image4}}
								/>
							</View>
						</View>
						<View style={styles.hometripdetails}>
							<TouchableOpacity
								activeOpacity = {1}
          							onPress={this.onPressNavigation.bind(this)}>
								<Text style={styles.hometripcity}>{this.props.city}</Text>
								<Text style={styles.hometripdates}>{this.props.date1} - {this.props.date2}</Text>
							</TouchableOpacity>
							<View style={styles.deleteiconcontainer}>
								<View style={styles.fillerview}></View>
								<View style={styles.fillerview}></View>
								<View style={styles.deleteiconview}>
									<TouchableOpacity
										activeOpacity = {1}
          									onPress={this.editTrip.bind(this)}>
										<Image 
											style={styles.edittripbutton}
											source={require('./Icons/edit.png')}
										/>
									</TouchableOpacity>
								</View>
								<View style={styles.deleteiconview}>
									<TouchableOpacity
										activeOpacity = {1}
          									onPress={this.confirmDeletion.bind(this)}>
										<Image 
											style={styles.deletetripbutton}
											source={require('./Icons/delete.png')}
										/>
									</TouchableOpacity>
								</View>
							</View>
						</View>
					</View>	
			</View>
		);
	}
}

export class ShortlistView extends Component{
	render(){
		str = "";
		if(this.props.deposit!="Free"){
			str = " ("+this.props.deposit+")";
		}
		return(
			<View style = {styles.selectcontainer}>
				<View style={styles.detailscontainer}>
					<View style={styles.iconcontainer}>
						<View style={styles.numbercontainer}>
							<Text style={styles.numbertext}>{this.props.number}</Text>
						</View>
					</View>
					<View style={styles.textcontainer}>
						<Text style={styles.activitytext}>{this.props.activity}</Text>
						<Text style={styles.providertext}>{this.props.provider}</Text>
					</View>
					<View style={styles.pricecontainer}>
						<Text style={styles.pricetext}>{this.props.price+str}</Text>
					</View>
					<View style={styles.buttoncontainer}>
						<TouchableOpacity
							activeOpacity = {1}
          						onPress={this.props.deleteAct.bind(this,this.props.nav,this.props.index,this.props.pos)}>
							<Image 
								style={styles.shortlistbuttonicon}
								source={require('./Icons/cross.png')}
							/>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.linecontainer}>
					<View style={styles.greyline}>
					</View>
				</View>
			</View>
		)
	}
}  

export class ActivityCard extends Component {
	constructor(props){
		super(props);
	}
	
	showDescription(){
		this.props.navigator.navigate('ActivityDetail',	{activity: this.props.activity, price: this.props.price, time: this.props.time, image: this.props.img, description: this.props.description, address: this.props.address});
	}

	render(){
		var str = <View style={{flex:0.5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
								<Image 
									style={styles.cardicon}
									source={require('./Icons/minutes.png')}
								/>
								<Text style={styles.cardicontext}>{this.props.time+" min"}</Text>
						</View>;
		if(this.props.rating!=""){
			str = <View style={{flex:0.5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
								<Image 
									style={styles.cardicon}
									source={require('./Icons/rating.png')}
								/>
								<Text style={styles.cardicontext}>{this.props.rating}</Text>
						</View>;
		}
		return(
			<TouchableOpacity
				activeOpacity = {1}
          			onPress={this.showDescription.bind(this)}>
			
			<View style = {styles.cardbackstruct}>
				<View style={{flex:0.75}}>
					<Image 
						style={styles.cardimage}
						source={{uri: this.props.img}}>
						<View style={styles.cardmaintextcontainer}>
						<Text style={styles.cardmaintext}>{this.props.activity}</Text>
						</View>
					</Image>
				</View>
				<View style={{flex:0.15, flexDirection: 'row', justifyContent: 'center', alignItems:'center'}}>
					
						<View style={{flex:0.5, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
								<Image 
									style={styles.cardicon}
									source={require('./Icons/cur.png')}
								/>
								<Text style={styles.cardicontext}>{this.props.price}</Text>
						</View>
						{str}
					
				</View>
					
			</View>
			</TouchableOpacity>
		)
	}
}


export class PlaceView extends Component {
	constructor(props){
		super(props);
	}

	openGMaps(){
		var url = "https://www.google.com/maps/dir/?api=1&destination="+this.props.address;
		if(this.props.place=="Home"){
			url = "https://www.google.com/maps/dir/?api=1&destination="+this.props.lathome+","+this.props.lat;
		}
		Linking.openURL(url).catch(err => alert(err));
	}

	render() {
		book = 	<TouchableOpacity
					activeOpacity = {1}
          				onPress={this.openGMaps.bind(this)}>
					<View style= {styles.prebookbuttonview}>
						<Text style={styles.prebookbuttontext}>NAVIGATE</Text>
					</View>
				</TouchableOpacity>;
		var image = <Image 
				style={styles.placeicon}
				source={require('./Icons/place.png')}
			    >
				<Text style={styles.placeicontext}>{this.props.position}</Text>
			    </Image>;
		var details = <View style={styles.placedetailsreducedcontainer}>
					<Text style={styles.placeactivitytext}>{this.props.place}</Text>
			      </View>; 
		var styleapplied = styles.placeviewreducedcontainer;
		
		if(this.props.prebook==1){
			details = <View style={styles.placedetailscontainer}>
					<Text style={styles.placeactivitytext}>{this.props.place}</Text>
					<Text style={styles.placetimetext}>{this.props.time}</Text>
					<Text style={styles.placeprebooktext}>Pre-booking required</Text>
				  </View>;
			styleapplied = styles.placeviewcontainer;
		}
		else if(this.props.time!=""){
			details = <View style={styles.placedetailscontainer}>
					<Text style={styles.placeactivitytext}>{this.props.place}</Text>
					<Text style={styles.placetimetext}>{this.props.time}</Text>
				  </View>;
			styleapplied = styles.placeviewcontainer;
		}
		if(this.props.place=="Home"){
			var image = <Image 
				style={styles.placeicon}
				source={require('./Icons/home.png')}
			    >
				<Text style={styles.placehomeicontext}>{this.props.position}</Text>
			    </Image>;
		}

    		return (
			<View style = {styleapplied}>
				<View style={styles.placeiconcontainer}>
					{image}
				</View>
				{details}
				<View style={styles.placebookbuttoncontainer}>
					{book}	
				</View>
			</View>		
		)
  	}
}



