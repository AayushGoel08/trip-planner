import React, { Component } from 'react';
import { Text, View, Linking, ListView, Picker, TouchableOpacity, Image, Button } from 'react-native';
import MapView from 'react-native-maps';
import { NavigationActions } from 'react-navigation';

import { PlaceView } from './MainScreenNavigator';

import styles from './Styles';
import Api from './Api';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export class MapScreen extends Component {
	
    	static navigationOptions = ({navigation}) => ({
  		title: "Itinerary",
		headerLeft: <TouchableOpacity activeOpacity={1} onPress={() => {navigation.dispatch(NavigationActions.reset({
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Home'})
                    ]
                  }))}}>
			<View style={styles.backiconcontainer}><Image source={require('./Icons/back.png')} style={styles.backicon} /></View>
		</TouchableOpacity>
});
 
	
		
	componentDidMount(){
		for(i=0;i<this.routedata["routes"].length;i++){
			this.data.push([]);
			this.markers.push([]);
			this.mapcentrelat.push(0);
			this.mapcentrelng.push(0);
			this.maplatext.push(0);
			this.maplngext.push(0);
			this.numlocs.push(1);
			var k = 0;
			if(this.routedata["routes"][i]!="Home-Home"){
				var routeIndices = this.routedata["routes"][i].split("-");
				var dispTimes = this.routedata["disptimes"][i].split("-");
				var closeTimes = this.routedata["closetime"][i].split("-");
				this.numlocs[i] = routeIndices.length-1;
				for(j=0;j<routeIndices.length;j++){
					if(routeIndices[j]=="Home"){
						var latlng = this.routedata["locsdata"]["Home"][0].split(" - ");
						var lat = parseFloat(latlng[0]);
						var lng = parseFloat(latlng[1]);
						this.data[i].push(['H','Home','',0,lat,lng,]);
						if(j!=routeIndices.length-1){
							this.markers[i].push([lat,lng]);
							this.mapcentrelat[i] = this.mapcentrelat[i] + lat;
							this.mapcentrelng[i] = this.mapcentrelng[i] + lng;
						}						
					}
					else{
						var locdata = this.routedata["locsdata"][parseInt(routeIndices[j])];
						var prebook = 0;
						if(locdata[1]=="Yes"){
							prebook = 1;
						}
						k = k + 1;
						var latlng = locdata[2].split(" - ");
						var lat = parseFloat(latlng[0]);
						var lng = parseFloat(latlng[1]);
						if(this.status>=4 && prebook==1){
							this.data[i].push([""+k,locdata[0],"Starts at "+dispTimes[j],prebook,parseInt(routeIndices[j]),lat,lng,locdata[3]]);
						}
						else if(closeTimes[j]!="N/A"){
							this.data[i].push([""+k,locdata[0],"Closes at "+closeTimes[j],prebook,parseInt(routeIndices[j]),lat,lng,locdata[3]]);
						}
						
						else{
							this.data[i].push([""+k,locdata[0],"",prebook,parseInt(routeIndices[j]),lat,lng,locdata[3]]);
						}
						this.markers[i].push([lat,lng]);
						this.mapcentrelat[i] = this.mapcentrelat[i] + lat;
						this.mapcentrelng[i] = this.mapcentrelng[i] + lng;
					}

				}
			}
		}
		
		for(i=0;i<this.mapcentrelat.length;i++){
			this.mapcentrelat[i] = this.mapcentrelat[i]/this.numlocs[i];
			this.mapcentrelng[i] = this.mapcentrelng[i]/this.numlocs[i];
		}
		
		/*for(i=0;i<this.mapcentrelat.length;i++){
			for(j=0;j<this.markers[i].length;i++){
				var templat = Math.abs(this.markers[i][j][0]-this.mapcentrelat[i]);
				var templng = Math.abs(this.markers[i][j][1]-this.mapcentrelng[i]);
				if(templat>this.maplatext[i]){
					this.maplatext[i] = templat;
				}
				if(templng>this.maplngext[i]){
					this.maplngext[i] = templng;
				}
			}
	
			this.maplatext[i] = this.maplatext[i]+0.0200;
			this.maplngext[i] = this.maplngext[i]+0.0200;
		}*/
		
		this.setState({numdays: this.routedata["routes"].length, loading: true, mapData: [this.markers[0], this.mapcentrelat[0], this.mapcentrelng[0], this.maplatext[0],this.maplngext[0]], dataSource: ds.cloneWithRows(this.data[0])}); 	
	
	}

	constructor(props){
		super(props);
		this.status = this.props.navigation.state.params.status;
		//this.status = 4;
		this.deposit = this.props.navigation.state.params.deposit;
		this.routedata = this.props.navigation.state.params.routedata;
		this.data = [];
		this.markers = [];
		this.mapcentrelat = [];
		this.mapcentrelng = [];
		this.numlocs = [];
		this.maplatext = [];
		this.maplngext = [];
		
		this.state = { numdays: 1, dayselect: "1", loading: false, mapData: [], dataSource: ds.cloneWithRows([[['H','Home','',0]]]) }; 
	}

	renderRow(rowData){
		return(
			<PlaceView position={rowData[0]} place={rowData[1]} time={rowData[2]} prebook={rowData[3]} lathome = {rowData[4]} lat={rowData[5]} lng={rowData[6]} address={rowData[7]} />
		);
  	}
	
	paymentRequest(){
		this.props.navigation.navigate('Pay', {routedata: this.routedata, tripdata: this.props.navigation.state.params.tripdata, deposit: this.props.navigation.state.params.deposit});
	}
	
	giveBookingRequest(){
		this.props.navigation.navigate('BookRequest',{data: this.data, tripdata:this.props.navigation.state.params.tripdata, status: this.status});
	}

	openGMaps(e){
		var url = "https://www.google.com/maps/dir/?api=1&destination="+e.nativeEvent.coordinate.latitude+","+e.nativeEvent.coordinate.longitude;
		Linking.openURL(url).catch(err => alert(err));
	}
	
	render() {
		var paybutton = <View style={styles.oneclickbookbuttoncontainer}>
					<TouchableOpacity
						activeOpacity = {1}
          					onPress={this.giveBookingRequest.bind(this)}>
						<View style= {styles.oneclickbookbuttonview}>
							<Text style={styles.oneclickbookbuttontext}>REQUEST TO BOOK</Text>
						</View>
					</TouchableOpacity>
				</View>;
		if(this.status==4){
			paybutton = <View style={styles.oneclickbookbuttoncontainer}>
					<TouchableOpacity
						activeOpacity = {1}
          					onPress={this.paymentRequest.bind(this)}>
						<View style= {styles.oneclickbookbuttonview}>
							<Text style={styles.oneclickbookbuttontext}>CONFIRM PAYMENT</Text>
						</View>
					</TouchableOpacity>
				</View>;
		}
		else if(this.status==5){
			paybutton = <View>
				</View>;
		}

		str = <Text>Loading Map...</Text>;
		pickerItems = <Picker.Item label="Day 1" value="1" />;

		if(this.state.loading){
		var temp = new Array(this.state.numdays).fill(0);
		var pickerItems = temp.map((value,i) => {
						
         				return (
						<Picker.Item key={i} label={"Day "+(i+1)} value={""+(i+1)} />
         				);
      			    	}
			)
		var str = <MapView
				style={styles.placemap}
    				initialRegion={{
      					latitude: this.state.mapData[1],
      					longitude: this.state.mapData[2],
      					latitudeDelta: 0.0100,
      					longitudeDelta: 0.0100,
    				}}
  			>
			{this.state.mapData[0].map((value,i) => {
					var label = "H";
					var img = <View><Image 
								style={styles.placeicon}
								source={require('./Icons/home.png')}
								key={"Image"+i}
			    			   >
							<Text key={"Text"+i} style={styles.placehomeicontext}>{label}</Text>
						   </Image></View>;
					if(i!=0){
						label = ""+i;
						img = <View><Image 
								style={styles.placeicon}
								source={require('./Icons/place.png')}
								key={"Image"+i}
			    			   >
							<Text key={"Text"+i} style={styles.placeicontext}>{label}</Text>
						   </Image></View>;
					}
		
         				return (
						<MapView.Marker 
							coordinate={{latitude: value[0],longitude: value[1]}}
							key={"Marker"+i}
							onPress={(e) => {this.openGMaps(e)}}
						>
							{img}
						</MapView.Marker>
         				);
      			    	}
			)}
			</MapView>;
		
    		}

		return (
			<View>
				<View style={styles.daypickerview}>
					<Picker
						style={styles.daypicker}
						selectedValue = {this.state.daySelect}
  						onValueChange={(itemValue, itemIndex) => {
							var daynum = parseInt(itemValue);
							this.setState({daySelect: itemValue, loading: true, mapData: [this.markers[daynum-1], this.mapcentrelat[daynum-1], this.mapcentrelng[daynum-1], this.maplatext[daynum-1],this.maplngext[daynum-1]], dataSource: ds.cloneWithRows(this.data[daynum-1])}); 	
						}}
						mode="dropdown">
  						{pickerItems}
					</Picker>
				</View>
				{str}
				<View style={styles.placelistview}>
					<ListView 
						dataSource = {this.state.dataSource}
						renderRow = {this.renderRow.bind(this)}
						showsVerticalScrollIndicator={false}
			      		/>
				</View>
				{paybutton}
			</View>
		)
  	}
}