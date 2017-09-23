import React, { Component } from 'react';
import { Modal, Animated, Text, View, Image, TouchableOpacity, ListView, Button, Dimensions} from 'react-native';
import { NavigationActions } from 'react-navigation';

import styles from './Styles';
import Api from './Api';

import { ActivityCard, ShortlistView, ShortlistViewWOLine } from './MainScreenNavigator';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const filterds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

var {height, width} = Dimensions.get('window');
const fh = height/521.33333;
const fw = width/320;
var this_1;

export class AnimatedCards extends Component {
  
	state = {
    
		offsetx: new Animated.Value(0),
		offsety: new Animated.Value(0),
	}


	
	componentWillReceiveProps(nextProps){
		if(this.props.swipe==0 && nextProps.swipe==3){
			Animated.spring(   
				this.state.offsetx, 
				{	
        
					toValue: 350*fw,            
	                	}

			).start();
		}
		else if(this.props.swipe==0 && nextProps.swipe==1){
			Animated.spring(   
				this.state.offsetx, 
				{	
        
					toValue: -350*fw,             
	                	}

			).start();
		}
		else if(this.props.swipe==1 && nextProps.swipe==0){
			Animated.spring(   
				this.state.offsetx, 
				{	
        
					toValue: 0,             
	                	}

			).start();
		}
	}

	render() {
    
		let { offsetx, offsety } = this.state;


		return (
      
			<Animated.View style={{position: 'absolute',  transform:[{translateX: offsetx}, {translateY: offsety} ]}}>
			<ActivityCard 
				img={this.props.imagelink}
				description={this.props.description}
				address={this.props.address}
				activity={this.props.name} 
				price={this.props.price} 				
				time={this.props.time}
				rating={this.props.rating}
				navigator={this.props.navigator}
			/>
			</Animated.View>
		);
  
	}
}

export class CardScreen extends Component {
	constructor(props){
		super(props);	
		this_1 = this;	
		this.locsdata = this.props.navigation.state.params.locsdata;
		this.tripdata = this.props.navigation.state.params.tripdata;
		this.selectionstring = this.props.navigation.state.params.swiperstate[0];
		this.deselectionstring = this.props.navigation.state.params.swiperstate[1];

		this.totindices = [];
		this.actindices = [];
		this.tempindices = [];
		
		this.selections = [];
		this.selectindices = [];
		this.deselectindices = [];
		this.deselections = [];
		this.indices = [];
		this.selected = 0;
		this.present = -1;
		
		this.filterOptions = ["#All", "#Popular", "#Adventure", "#Culture", "#Unique", "#Events", "#Explore", "#Shopping", "#Drink", "#Food"];
		this.count = 3;
		this.actcount = this.locsdata.length;
		this.index = 0;
		this.transitions = [];
		var i = 0;
		for(i=0;i<this.actcount;i++){
			this.transitions.push(0);
			this.totindices.push(i);
			this.actindices.push(i);
			this.tempindices.push(i);
		}

		if(this.selectionstring=="" && this.deselectionstring==""){
			
		}
		else{
			var selectionsarr = this.selectionstring.split("-");
			var deselectionsarr = this.deselectionstring.split("-");
			var selectionsintarr = [];
			var deselectionsintarr = [];
			for(j = 0;j<selectionsarr.length;j++){
				selectionsintarr.push(parseInt(selectionsarr[j]));
			}
			for(j = 0;j<deselectionsarr.length;j++){
				deselectionsintarr.push(parseInt(deselectionsarr[j]));
			}
			for(i=0;i<this.actcount;i++){
				if(selectionsintarr.indexOf(this.locsdata[this.tempindices[i]][0])!=-1){
					this.selectindices.push(this.locsdata[this.tempindices[i]][0]);
					this.selected = this.selected + 1;
					this.selections.push([this.selected, this.locsdata[this.tempindices[i]][1],this.locsdata[this.tempindices[i]][2], "",this.locsdata[this.tempindices[i]][5],this.locsdata[this.tempindices[i]][9],this.locsdata[this.tempindices[i]][0],this.tempindices[i]]);
					this.indices.push(this.locsdata[this.tempindices[i]][0]);
				
					var index = this.totindices.indexOf(this.tempindices[i]);
					this.totindices.splice(index,1);
					this.actindices.splice(index,1);
				}

				if(deselectionsintarr.indexOf(this.locsdata[this.tempindices[i]][0])!=-1){
					this.deselections.push(this.tempindices[i]);
					this.deselectindices.push(this.locsdata[this.tempindices[i]][0]);

					var index = this.totindices.indexOf(this.tempindices[i]);
					this.totindices.splice(index,1);
					this.actindices.splice(index,1);
				}
				
			}

			
			
		}

		this.state = {
			swipeState : [this.transitions[this.actindices[0]],this.transitions[this.actindices[1]], 0],
			currDisp: [this.locsdata[this.actindices[0]],this.locsdata[this.actindices[1]],[1000,"",0,0]],
			modalVisible: false,
			filter: "#All",
			filterArr: filterds.cloneWithRows(this.filterOptions)
		}
		
		const setParamsAction = NavigationActions.setParams({
  				params: { selections: this.selections, indices: this.indices, tripdata: this.tripdata, del:this.deleteActivity.bind(this)},
  				key: 'Selection',
		});
		this.props.navigation.dispatch(setParamsAction);

		
	}

	updateSelections(){
		var jsonObj = {
			"type": "UpdateSelections",
			"selections": this.selectindices,
			"traversions": this.deselectindices,
			"tripid": this.tripdata[0],
			"fbid": this.tripdata[1],
			"city": this.tripdata[2]
		}
		
		Api.postUserTrip(jsonObj);
	}
	
	setModalVisible(visible) {
    		this.setState({modalVisible: visible});
 	}

	refreshOptions(){
		if(this.deselections.length>0){
		var dispdata;
		var swipeStatetemp;
		for(i=0;i<this.deselections.length;i++){
			this.transitions[this.deselections[i]] = 0;
			this.totindices.push(this.deselections[i]);
		}
		this.deselections = [];
		this.deselectindices = [];
		this.actindices = [];
		for(i=0;i<this.totindices.length;i++){
			this.actindices.push(this.totindices[i]);
		}
		
		this.updateSelections();
		var dispdata;
		if(this.actindices.length==0){
			dispdata = [[2000,"",-1,0],[2001,"",-1,0],[2002,"",-1,0]];
		}
		else if(this.actindices.length==1){
			dispdata = [this.locsdata[this.actindices[0]],[4001,"",-1,0],[1000,"",0,0]];
		}
		else{
			dispdata = [this.locsdata[this.actindices[0]],this.locsdata[this.actindices[1]], [5001,"",-1,0]];
		}
		this.setState({
			swipeState : this.transitions,
			currDisp: dispdata,
			modalVisible: false, 
			filter: "#All"
		});
		}	
		
	}

	filterPress(filterText){
		if(filterText=="#All"){
			this.actindices = [];
			for(i=0;i<this.totindices.length;i++){
				this.actindices.push(this.totindices[i]);
			}
		}
		else{
			this.actindices = [];
			for(i=0;i<this.totindices.length;i++){
				if(this.locsdata[this.totindices[i]][4]==filterText){
					this.actindices.push(this.totindices[i]);
				}
			}
		}
	
		var dispdata;
		var swipeStatetemp;
		if(this.actindices.length==0){
			swipeStatetemp = [0,0,0];
			dispdata = [[2000,"",-1,0],[2001,"",-1,0],[2002,"",-1,0]];
		}
		else if(this.actindices.length==1){
			swipeStatetemp = [this.transitions[this.actindices[0]],0, 0];
			dispdata = [this.locsdata[this.actindices[0]],[4001,"",-1,0],[1000,"",0,0]];
		}
		else{
			swipeStatetemp = [this.transitions[this.actindices[0]],this.transitions[this.actindices[1]], 0];
			dispdata = [this.locsdata[this.actindices[0]],this.locsdata[this.actindices[1]], [5001,"",-1,0]];
		}
		this.setState({
			swipeState : swipeStatetemp,
			currDisp: dispdata,
			modalVisible: false, 
			filter: filterText
		});
	}
	
	deleteActivity(index,number){
		var pos = this.selectindices.indexOf(index);
		this.selectindices.splice(pos,1);
		this.deselectindices.push(index);
		this.deselections.push(number);
		pos = this.indices.indexOf(index);
		this.indices.splice(pos,1);
		this.selected = this.selected - 1;
		var j = 1;
		var newselections = [];
		for(i=0;i<this.selections.length;i++){
			if(this.selections[i][6]==index){
				pos = i;
			}
			else{
				newselections.push(this.selections[i]);
			}
		}
		this.selections = newselections;
		for(i=0;i<this.selections.length;i++){
			this.selections[i][0] = i+1;
		}
		this.updateSelections();
		const setParamsAction = NavigationActions.setParams({
  			params: { selections: this.selections, indices: this.indices, tripdata: this.tripdata, del:this.deleteActivity.bind(this)},
  				key: 'Selection',
			});				
		this.props.navigation.dispatch(setParamsAction);
		
	}

	triggerAnimation(value){
		if(this.actindices.length>0){
			this.present = this.actindices[0];
			this.transitions[this.actindices[0]] = value;
			if(value==3){
				this.selectindices.push(this.locsdata[this.present][0]);
				this.selected = this.selected + 1;
				this.selections.push([this.selected, this.locsdata[this.actindices[0]][1],this.locsdata[this.actindices[0]][2], "",this.locsdata[this.actindices[0]][5],this.locsdata[this.actindices[0]][9],this.locsdata[this.actindices[0]][0],this.present]);
				this.indices.push(this.locsdata[this.actindices[0]][0]);
				
				const setParamsAction = NavigationActions.setParams({
  					params: { selections: this.selections, indices: this.indices, tripdata: this.tripdata, del:this.deleteActivity.bind(this)},
  					key: 'Selection',
				});
				this.props.navigation.dispatch(setParamsAction);
			}
			else{
				this.deselections.push(this.present);
				this.deselectindices.push(this.locsdata[this.present][0]);
			}
			
			this.actindices.shift();
			var index = this.totindices.indexOf(this.present);
			this.totindices.splice(index,1);
			this.updateSelections();
			var dispdata;
			var swipeStatetemp;
			if(this.actindices.length==0){
				swipeStatetemp = [this.transitions[this.present],0,0];
				dispdata = [this.locsdata[this.present],[3000,"",-1,0],[3001,"",-1,0]];
			}
			else if(this.actindices.length==1){
				swipeStatetemp = [this.transitions[this.present],this.transitions[this.actindices[0]], 0];
				dispdata = [this.locsdata[this.present],this.locsdata[this.actindices[0]],[1000,"",0,0]];
			}
			else{
				swipeStatetemp = [this.transitions[this.present],this.transitions[this.actindices[0]], this.transitions[this.actindices[1]]];
				dispdata = [this.locsdata[this.present],this.locsdata[this.actindices[0]], this.locsdata[this.actindices[1]]];
			}
			this.setState({
				swipeState: swipeStatetemp,
				currDisp: dispdata
			});
		}
		
	}

	renderRow(rowData){
		return(
			<TouchableOpacity
				activeOpacity = {1}
          			onPress={this.filterPress.bind(this,rowData)}>
				<View style={styles.filtertextmodalview}>
					<Text style={styles.filtertext}>{rowData}</Text>
				</View>
			</TouchableOpacity>
		);
	}

	render() {
		console.log(this.state.currDisp);
		var cards = <View style={styles.allcardsstyle}>{this.state.currDisp.map((value,i) => {
				var dispprice = "";
				if(this.state.currDisp[this.count-1-i][2]==0){
					dispprice = "Free";
				}
				else{
					dispprice = dispprice + this.state.currDisp[this.count-1-i][2];
				}
				if(this.state.currDisp[this.count-1-i][2]==-1){
					return(
						<View></View>
					)
				}
				else{
         			return (
					<AnimatedCards
						key={this.state.currDisp[this.count-1-i][0]} 
						name={this.state.currDisp[this.count-1-i][1]} 
						price={dispprice}
						time={this.state.currDisp[this.count-1-i][3]}
						description={this.state.currDisp[this.count-1-i][6]}
						imagelink={this.state.currDisp[this.count-1-i][7]}
						address={this.state.currDisp[this.count-1-i][8]}
						rating={this.state.currDisp[this.count-1-i][10]}						
						swipe={this.state.swipeState[this.count-1-i]}
						navigator={this.props.navigation} 
					
/>
         			);
      			    	}
				}
			)
		}</View>
    		return (
			<View style={{flex:1}}>
				<Modal
          				animationType={"fade"}
          				transparent={true}
          				visible={this.state.modalVisible}
					onRequestClose={() => {this.setModalVisible(!this.state.modalVisible)}}
          			>
         				<View style={styles.modalstyle}>
          					<ListView 
							contentContainerStyle = {styles.cityimagematrix}
							dataSource = {this.state.filterArr}
							renderRow = {this.renderRow.bind(this)} 
			        		/>
						<View style={styles.modalempty}></View>
         				</View>
        			</Modal>
				<View style={styles.filtercontainer}>
					<View style={styles.openfiltercontainer}>
						<Text style={styles.openfiltertext}>FILTER</Text>
					</View>
					<View style={styles.activefiltercontainer}>
						<TouchableOpacity
							activeOpacity = {1}
          						onPress={()=> {this.setModalVisible(!this.state.modalVisible)}}>
							<View style={styles.filtertextview}>
								<Text style={styles.filtertext}>{this.state.filter}</Text>
							</View>
						</TouchableOpacity>
					</View>
					
				</View>
				{cards}				
				
				<View style={styles.cardbuttoncontainer}>
					<View style={styles.refreshbuttoncontainer}>
						<TouchableOpacity
							activeOpacity = {1}
          						onPress={this.refreshOptions.bind(this)}>
							<Image 
								style={styles.smallbuttonicon}
								source={require('./Icons/refresh.png')}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.otherbuttoncontainer}>
						<TouchableOpacity
							activeOpacity = {1}
          						onPress={this.triggerAnimation.bind(this,1)}>
							<Image 
								style={styles.buttonicon}
								source={require('./Icons/cross.png')}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.otherbuttoncontainer}>
						<TouchableOpacity
							activeOpacity = {1}
          						onPress={this.triggerAnimation.bind(this,3)}>
							<Image 
								style={styles.buttonicon}
								source={require('./Icons/check.png')}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>			
		)
  	}
}

export class TourScreen extends Component {
	constructor(props){
		super(props);
		this.sum = 0;
		this.deposit = 0;
		this.selections = [];
		this.selectionslength = 0; 
	}
	
	deleteAct(nav,index,pos){
		nav.state.params.del(index,pos);
	}

	renderRow(rowData){
		var displayprice = "";
		var dispdeposit = "";
		if(rowData[2]=="0"){
			displayprice="Free";
		}
		else{
			displayprice="\u20ac"+rowData[2];
		}
		if(rowData[4]=="0"){
			dispdeposit="Free";
		}
		else{
			dispdeposit="\u20ac"+rowData[4];
		}
		return(
			<ShortlistView
				number={rowData[0]}
				activity={rowData[1]}
				provider={rowData[3]}
				price={displayprice}
				deposit={dispdeposit}
				index={rowData[6]}
				pos={rowData[7]}
				deleteAct={this.deleteAct}
				nav={this.props.navigation}
			/>
		);


	}
	
	getILPSolution(){
		alert("Planning your trip - This may take a while!");
		var indices = this.props.navigation.state.params.indices;
		var tripdata = this.props.navigation.state.params.tripdata;
		var jsonObj = {
			"type": "ILP",
			"places": indices,
			"tripid": tripdata[0],
			"fbid": tripdata[1],
			"city": tripdata[2],
			"deposit": this.deposit
		}
		
		Api.postUserTrip(jsonObj)
    		.then((response) => {
			if(response["found"]=="No"){
				alert("Your trip does not fit in your time! Delete some activities and try again?");
			}
			else{
				this.props.navigation.navigate('Map', {status: 2, routedata: response, tripdata: tripdata, deposit: this.deposit});
			}
    		})
    		.catch((error) => {
        		alert("Sorry! We're having some errors from our side routing your trip. Try again after some time, please?");
			throw error;
    		});
	}

	render() {
		const {state} = this.props.navigation;
		var str = "";
		if(state.params == undefined){
			str = <View style={styles.sumview}>
				<Text style={styles.sumtext}>TRIP COST:    {"\u20ac"+this.sum}</Text>
			      </View>
		}
		else if(state.params.selections == undefined){
			str = <View style={styles.sumview}>
				<Text style={styles.sumtext}>TRIP COST:    {"\u20ac"+this.sum}</Text>
				<Text style={styles.sumtext}>PAY NOW:    {"\u20ac"+this.deposit}</Text>
			      </View>
		}
		else{
			this.selections = state.params.selections;
			this.selectionslength = state.params.selections.length;

			var i = 0;
			this.sum = 0;
			this.deposit = 0;
			ds = ds.cloneWithRows(this.selections);
			for(i=0;i<this.selectionslength;i++){
				if(this.selections[i][2]!="Free"){
					this.sum = this.sum + parseInt(this.selections[i][2]);
					if(this.selections[i][4]!="0"){
						this.deposit = this.deposit + parseInt(this.selections[i][4]);
					}
					else{
						if(this.selections[i][5]=="Yes"){
							this.deposit = this.deposit + parseInt(this.selections[i][2]);
						}
					}
				}
			}
			
			str = <View>
				<View style={styles.sumview}>
					<Text style={styles.sumtext}>TRIP COST:    {"\u20ac"+this.sum}</Text>
					<Text style={styles.sumtext}>PAY NOW:    {"\u20ac"+this.deposit}</Text>
			      	</View>
				<View style={styles.selectionlistview}>
			      		<ListView 
						dataSource = {ds}
						renderRow = {this.renderRow.bind(this)}
						showsVerticalScrollIndicator={false}
			      		/>
				</View>
				<View style={styles.planbuttonview}>
					<View style={styles.planbutton}>
						<Button
          						onPress={this.getILPSolution.bind(this)}
          						title="Plan Trip!"
						
        					/>
					</View>
				</View>
			      </View>
		}
    		return (
			<View>
			{str}
			</View>
		)
  	}
}