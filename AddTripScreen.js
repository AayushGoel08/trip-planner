import React, { Component } from 'react';
import { Text, View, Image, Button, DatePickerAndroid, TimePickerAndroid, Picker, TextInput, TouchableOpacity, ListView} from 'react-native';
import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

import styles from './Styles';
import Api from './Api';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export class AddTripScreen extends Component {
  static navigationOptions = {
    title: 'Add Trip',
  };
 
  constructor(props){
	super(props);
	this.constcities = [];
	this.dispcities = [];
	this.dispmonth = {
		0: "Jan",
		1: "Feb",
		2: "Mar",
		3: "Apr",
		4: "May",
		5: "Jun",
		6: "Jul",
		7: "Aug",
		8: "Sep",
		9: "Oct",
		10: "Nov",
		11: "Dec"
	};
	this.convertmonth = {
		"Jan": "01",
		"Feb": "02",
		"Mar": "03",
		"Apr": "04",
		"May": "05",
		"Jun": "06",
		"Jul": "07",
		"Aug": "08",
		"Sep": "09",
		"Oct": "10",
		"Nov": "11",
		"Dec": "12"
	}
	this.state = {
		startdate: "Select Start Date",
		starttime: "Select Start Time",
		enddate: "Select End Date",
		endtime: "Select End Time",
		startdatestyle: {},
		starttimestyle: {},
		enddatestyle: {},
		endtimestyle: {},
		dataSource: ds.cloneWithRows(this.dispcities),
		city: "",
		groupnum: "1",
		buttonDisable: false
	};
	this.fbid = "";
	this.email = "";
  }
  

  openStartCalendar(){
	try {
  		DatePickerAndroid.open({
    			date: new Date(2017, 8, 1),
			mode: 'spinner'
  		})
		.then((response) => {
			if (response.action !== DatePickerAndroid.dismissedAction) {
				this.setState({startdate: response.day+"-"+this.dispmonth[response.month]+"-"+response.year, startdatestyle: {color: 'black'}});				
  			}
			else{
			}
    		})
	} catch ({code, message}) {
  		alert(message);
	}
  }

  openStartTimePicker(){
	try {
  		TimePickerAndroid.open({
    			hour: 9,
			minute: 0,
			is24Hour: true
  		})
		.then((response) => {
			if (response.action !== TimePickerAndroid.dismissedAction) {
				var disphour = response.hour
				var dispmin = response.minute
				if(response.hour<10){
					disphour = "0"+response.hour
				}
				if(response.minute<10){
					dispmin = "0"+response.minute
				}
    				this.setState({starttime: disphour+":"+dispmin, starttimestyle: {color: 'black'}});				
  			}
			else{	
			}
    		})
	} catch ({code, message}) {
  		alert(message);
	}
  }
  
  openEndCalendar(){
	try {
  		DatePickerAndroid.open({
    			date: new Date(2017, 8, 2),
			mode: 'spinner'
  		})
		.then((response) => {
			if (response.action !== DatePickerAndroid.dismissedAction) {
				this.setState({enddate: response.day+"-"+this.dispmonth[response.month]+"-"+response.year, enddatestyle: {color: 'black'}});				
  			}
			else{
			}
    		})
	} catch ({code, message}) {
  		alert(message);
	}
  }

  openEndTimePicker(){
	try {
  		TimePickerAndroid.open({
    			hour: 16,
			minute: 0,
			is24Hour: true
  		})
		.then((response) => {
			if (response.action !== TimePickerAndroid.dismissedAction) {
				var disphour = response.hour
				var dispmin = response.minute
				if(response.hour<10){
					disphour = "0"+response.hour
				}
				if(response.minute<10){
					dispmin = "0"+response.minute
				}
    				this.setState({endtime: disphour+":"+dispmin, endtimestyle: {color: 'black'}});				
  			}
			else{	
			}
    		})
	} catch ({code, message}) {
  		alert(message);
	}
  }

  setCityText(cityData){
	this._cityInput.setNativeProps({text: cityData});
	this.setState({city: cityData});
  }
  
  _responseInfoCallback(error: ?Object, result: ?Object) {
  	if (error) {
    		alert('Error fetching data: ' + error.toString());
  	} else {
		this.fbid = result.id;
  	}
  }
  
  initFacebookRequest(){
	const infoRequest = new GraphRequest(
  		'/me?fields=id',
  		null,
  		this._responseInfoCallback.bind(this),
	);
      
	new GraphRequestManager().addRequest(infoRequest).start();
  }
  
  insertTripRecord(navigate){
	if(this.fbid==""){
		alert("Cannot access your Facebook Id. This trip cannot be created.");
	}
	else{
		alert("Creating your trip, please wait for some time.");
		this.setState({buttonDisable: true});
		var start = this.state.startdate.split("-")[2]+"-"+this.convertmonth[this.state.startdate.split("-")[1]]+"-"+this.state.startdate.split("-")[0]+" "+this.state.starttime;
		var end = this.state.enddate.split("-")[2]+"-"+this.convertmonth[this.state.enddate.split("-")[1]]+"-"+this.state.enddate.split("-")[0]+" "+this.state.endtime;
		var cityInp = this.state.city.charAt(0).toUpperCase() + this.state.city.slice(1);
		var jsonObj = {
			"type": "Insert",
			"fbid": this.fbid,
			"city": cityInp,
			"start": start,
			"end": end,
			"group": parseInt(this.state.groupnum)
		};

		Api.postUserTrip(jsonObj)
    		.then((response) => {
			navigate('Acco', {locsdata: response["locsdata"], tripdata: [response["tripid"], this.fbid, this.state.city], homename: "", swiperstate: ["",""], homedata:""});
    		})
    		.catch((error) => {
        		console.error(error);
			throw error;
    		});
	}
  }
  
  componentDidMount(){
	var jsonObj = {
		"type": "GetCityNames",
	};
		
	Api.postUserTrip(jsonObj)
    	.then((response) => {
		this.constcities = response["data"];
		this.dispcities = [this.constcities[0],this.constcities[1],this.constcities[2]];
		this.setState({dataSource: ds.cloneWithRows(this.dispcities)});
    	})
    	.catch((error) => {
        	console.error(error);
		throw error;
    	});	
	this.initFacebookRequest();
  }
 
  renderRow(rowData){
	return(
		<TouchableOpacity
			activeOpacity = {1}
          		onPress={this.setCityText.bind(this,rowData)}>
		<View style={styles.cityrectangleview}>
			<Text style={styles.citytext}>{rowData}</Text>
		</View>
		</TouchableOpacity>
	);
  }
  
  filterCity(text){
	text = text.toLowerCase();
	if(text==""){
		this.setState({city: "",dataSource: ds.cloneWithRows(this.dispcities)});
	}
	else{
		var filtered = [];
		var i = 0;
		for(i = 0;i<this.constcities.length;i++){
			if(filtered.length<=6){
				if(this.constcities[i].toLowerCase().indexOf(text) !== -1){
					filtered.push(this.constcities[i]);
				}
			}
		}
		this.setState({city: text, dataSource: ds.cloneWithRows(filtered)});
	}
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
    	<View>
		<View>
			<View style={styles.cityview}>
				<View style={styles.citysearchview}>
					<TextInput
						ref={component => this._cityInput = component}
        					style={styles.cityinput}
        					placeholder="Search City"
						underlineColorAndroid={'transparent'}
						onChangeText={(text) => {this.filterCity(text)}}
      					/>
				</View>
				<View style={styles.citydisplayview}>
					<ListView 
						contentContainerStyle = {styles.cityimagematrix}
						dataSource = {this.state.dataSource}
						renderRow = {this.renderRow.bind(this)} 
			        	/>
				</View>
			</View>
			<View style={styles.greylineextended}></View>
			<View style={styles.cityview}>
				<View style={styles.groupsizeview}>
					<Image 
						style={styles.groupicon}
						source={require('./Icons/people.png')}
					/>
					<TextInput
						ref={component => this._groupInput = component}
        					style={styles.groupinput}
        					placeholder="Enter number of people in group"
						underlineColorAndroid={'transparent'}
						onChangeText={(text) => {this.setState({groupnum: text});}}
      					/>
				</View>
			</View>
			<View style={styles.greylineextended}></View>
			<View style={styles.datetimedurationview}>
				<View style={styles.datetimeview}>
					<View style={styles.dateview}>
						<View style={styles.datetextholder}>
							<Text style={[styles.datetext, this.state.startdatestyle]}>{this.state.startdate}</Text>
						</View>
						<TouchableOpacity
							activeOpacity = {1}
          						onPress={this.openStartCalendar.bind(this)}>
							<View style={styles.datetimeimagecontainer}>
								<Image 
									style={styles.calendaricon}
									source={require('./Icons/calendar.png')}
								/>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.dateview}>
						<View style={styles.datetextholder}>
							<Text style={[styles.datetext, this.state.starttimestyle]}>{this.state.starttime}</Text>
						</View>
						<TouchableOpacity
							activeOpacity = {1}
          						onPress={this.openStartTimePicker.bind(this)}>
							<View style={styles.datetimeimagecontainer}>
								<Image 
									style={styles.calendaricon}
									source={require('./Icons/timepicker.png')}
								/>
							</View>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.datetimeview}>
					<View style={styles.dateview}>
						<View style={styles.datetextholder}>
							<Text style={[styles.datetext, this.state.enddatestyle]}>{this.state.enddate}</Text>
						</View>
						<TouchableOpacity
							activeOpacity = {1}
          						onPress={this.openEndCalendar.bind(this)}>
							<View style={styles.datetimeimagecontainer}>
								<Image 
									style={styles.calendaricon}
									source={require('./Icons/calendar.png')}
								/>
							</View>
						</TouchableOpacity>
					</View>
					<View style={styles.dateview}>
						<View style={styles.datetextholder}>
							<Text style={[styles.datetext, this.state.endtimestyle]}>{this.state.endtime}</Text>
						</View>
						<TouchableOpacity
							activeOpacity = {1}
          						onPress={this.openEndTimePicker.bind(this)}>
							<View style={styles.datetimeimagecontainer}>
								<Image 
									style={styles.calendaricon}
									source={require('./Icons/timepicker.png')}
								/>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
		<View style={styles.startplanbuttonview}>
        		<Button
          			onPress={this.insertTripRecord.bind(this,navigate)}
          			title="Start Planning!"
				disabled={this.state.buttonDisable}
        		/>
		</View>
      </View>
    );
  }
}

