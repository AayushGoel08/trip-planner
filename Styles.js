import { StyleSheet, Dimensions } from 'react-native';

var {height, width} = Dimensions.get('window');
var fh = height/521.33333;
var fw = width/320;
const styles = StyleSheet.create({
	backiconcontainer: {
		height:50*fh,
		width:50*fh, 
		alignItems: 'center', 
		justifyContent: 'center'
	},
	backicon: {
		height: 20*fh,
		width: 20*fh
	},
	facebookcontainer: {
		height: 200*fh,
		alignItems: 'center', 
		justifyContent: 'center'
	},
	infoicon: {
		height:30*fh,
		width:30*fh, 
		marginRight: 10*fw
	},
	hometripsview: {
		height: 350*fh,
	},
	addbuttoncontainer: {
		alignItems: 'flex-end',
		justifyContent: 'center',
		height: 60*fh,
	},
	addbutton: {
		marginRight: 15*fw,
		height: 60*fh,
		width: 60*fh,
		borderRadius: 60*fh,
		backgroundColor: 'red',
		alignItems: 'center',
		justifyContent: 'center',
	},
	addbuttonplus: {
		fontSize: 36,
		fontWeight: "300",
		color: 'white'
	},
	hometripcontainer: {
		height: 100*fh,
		marginTop: 20*fh,
		alignItems: 'center',
		justifyContent: 'center'
	},
	hometripview: {
		borderColor: 'grey',
		borderWidth: 0.5,
		borderRadius: 10,
		backgroundColor: 'white',
		height: 100*fh,
		width: 300*fw,
		flexDirection: 'row',
		alignItems: 'center',
	},
	fourimageview: {
		borderColor: 'gray',
		borderWidth: 0.5,
		backgroundColor: 'white',
		height: 85*fh,
		width: 85*fh,
		marginLeft: 10*fw
	},
	twoimageview: {
		flexDirection: 'row',
		height: 42*fh,
		width: 85*fh,
	},
	hometripimage1: {
		marginLeft: 1*fh,
		marginRight: 0.5*fh,
		height: 40*fh,
		width: 40*fh,
		marginTop: 1*fh,
	},
	hometripimage2: {
		marginLeft:0.5*fh,
		marginRight: 1*fh,
		height: 40*fh,
		width: 40*fh,
		marginTop: 1*fh,
	},
	hometripimage3: {
		marginLeft: 1*fh,
		marginRight: 0.5*fh,
		height: 40*fh,
		width: 40*fh,
		marginTop: 0.5*fh,
	},
	hometripimage4: {
		marginLeft: 0.5*fh,
		marginRight: 1*fh,
		height: 40*fh,
		width: 40*fh,
		marginTop: 0.5*fh,
	},
	hometripdetails: {
		height: 90*fh,
		width: 270*fw - 85*fh,
		marginLeft: 20*fw
	},
	hometripcity: {
		marginTop: 0,
		fontSize: 18,
		fontWeight: "400",
		color: 'black'
	},
	hometripdates: {
		marginTop: 5*fh,
		fontSize: 12,
		color: 'purple',
		fontWeight: "300",
	},
	deleteiconcontainer: {
		flexDirection: 'row',
		height: 50*fh,
		width: 270*fw - 85*fh
	},
	fillerview: {
		flex: 0.3
	},
	deleteiconview: {
		flex: 0.4,
		alignItems: 'center',
		justifyContent: 'center'
	},
	edittripbutton: {
		height: 20*fh,
		width: 20*fh,
		marginLeft: 30*fw
	},
	deletetripbutton: {
		height: 20*fh,
		width: 20*fh
	},
	cityview: {
		marginLeft: 6*fw,
		marginTop: 20*fh
	},
	citysearchview: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 0,
		marginTop: 0
	},
	cityinput: {
		height: 40*fh,
		marginLeft: 13*fw,
		width: 285*fw,
		borderColor: 'gray',
		borderWidth : 0.5,
		backgroundColor: 'white'
	},
	citydisplayview: {
		marginLeft: 14*fw,
		marginRight: 0,
		height: 80*fh
	},
	cityimagematrix : {
		flexDirection : 'row',
		flexWrap: 'wrap',
	},
	cityrectangleview: {
		backgroundColor: 'white',
		height: 50*fh,
		width: 80*fw,
		borderRadius: 5,
		borderColor: 'gray',
		borderWidth : 0.5,
		marginTop: 20*fh,
		marginLeft: 0,
		marginRight: 20*fw,
		alignItems: 'center',
		justifyContent: 'center'		
	},
	citytext: {
		color: 'black',
		fontSize: 13
	},
	groupicon: {
		marginLeft: 13,
		height: 40*fh,
		width: 30*fw
	},
	groupsizeview: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 0,
		marginTop: 0
	},
	groupinput: {
		height: 40*fh,
		marginLeft: 25*fw,
		width: 228*fw,
		borderColor: 'gray',
		borderWidth : 0.5,
		backgroundColor: 'white'
	},
	greylineextended: {
		marginTop: 20*fh,
		height: 0.5,
		width: 320*fw,
		backgroundColor: '#c0c0c0',
	},
	datetimedurationview: {
		flexDirection: 'row',
		marginLeft: 20*fw,
		marginTop: 10*fh
	},
	datetimeview: {
		marginRight: 28*fw,
	},
	dateview: {
		flexDirection: 'row',
		marginTop: 20*fh
	},
	datetextholder: {
		height: 30*fh,
		width: 94*fw,
		borderColor: 'gray',
		borderWidth : 0.5,
		backgroundColor: 'white',
		justifyContent: 'center',
	},
	datetext: {
		fontSize: 11,
		marginLeft: 5*fw
	},
	datetimeimagecontainer: {
		height: 30*fh,
		width: 30*fh,
		borderColor: 'gray',
		borderWidth : 0.5,
		backgroundColor: '#faebd7',
		justifyContent: 'center',
		alignItems: 'center',
	},
        calendaricon:{
		height: 25*fh,
		width: 25*fh,
	},
	startplanbuttonview : {
		marginTop: 30*fh,
		alignItems: 'center',
		justifyContent: 'center'
	},
	allcardsstyle: {
		flex:1, 
		alignItems: 'center', 
		justifyContent: 'center'
	},
	cardspace : {
		alignItems: 'center',
		flex: 1,
		backgroundColor: 'white',		
	},
	modalstyle: {
		marginTop: 150*fh, 
		backgroundColor: 'white'
	},
	modalempty: {
		height:20*fh
	},
	cardbuttoncontainer: {
		flex: 0.30, 
		flexDirection: 'row', 
		alignItems: 'center', 
		justifyContent: 'center'
	},
	refreshbuttoncontainer: {
		flex: 0.3, 
		alignItems: 'center', 
		justifyContent: 'center'
	},
	otherbuttoncontainer: {
		flex: 0.5, 
		alignItems: 'center', 
		justifyContent: 'center'
	},
	cardbackstruct : {
		marginTop: 10*fh,
		height: 260*fh,
		width: 350*fw,
		backgroundColor: "white",
	},
	cardimage: {
		height: 190*fh,
		width: 350*fw,
		marginTop: 20*fh,
	},
	cardmaintextcontainer: {
		marginTop: 125*fw,
		height: 65*fw,
		width: 300*fw,
		backgroundColor: 'beige',
		justifyContent: "center"
	},
	cardmaintext: {
		marginLeft: 20*fw,
		fontSize: 20,
		fontWeight: "900",
		color: 'black'
	},
	cardicon: {
		height: 30*fh,
		width: 30*fh
	},
	cardicontext: {
		marginLeft: 10*fw,
		fontSize: 15,
	},
	card: {
    		flex: 1,
    		borderRadius: 4,
    		borderWidth: 2,
    		borderColor: '#E8E8E8',
    		justifyContent: 'center',
    		backgroundColor: 'blue',
  	},
	buttonicon: {
		height: 65*fh,
		width: 65*fh,
		borderRadius: 75*fh,
	},
	smallbuttonicon: {
		height: 45*fh,
		width: 45*fh,
		borderRadius: 75*fh,
	},
	selectcontainer: {
		height: 90*fh,
		width: 320*fw,
		backgroundColor: 'white',
	},
	detailscontainer: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		flex: 0.9
	},
	linecontainer: {
		alignItems: 'center',
		justifyContent: 'flex-end',
		flex: 0.2
	},
	greyline: {
		height: 0.5,
		width: 320*fw,
		backgroundColor: '#c0c0c0',
	},
	iconcontainer: {
		flex: 0.2,
		alignItems: 'center',
		justifyContent: 'center'
	},
	textcontainer: {
		flex: 0.5,
		alignItems: 'flex-start',
		justifyContent: 'flex-start'
	},
	pricecontainer: {
		flex: 0.3,
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttoncontainer: {
		flex: 0.2,
		alignItems: 'center',
		justifyContent: 'center'
	},
	numbercontainer: {
		height: 30*fh,
		width: 30*fh,
		borderRadius: 30,
		borderColor: 'blue',
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	numbertext: {
		fontSize: 14
	},
	activitytext: {
		fontSize: 15,
		fontWeight: "400",
		marginLeft: 20*fw,
		marginTop: 15*fh
	},
	providertext: {
		fontSize: 14,
		color: 'purple',
		fontWeight: "300",
		marginLeft: 20*fw,
	},
	pricetext: {
		fontSize: 14
	},
	shortlistbuttonicon: {
		height: 30*fh,
		width: 30*fh,
		borderRadius: 30*fh,
	},
	sumview: {
		height: 50*fh,
		backgroundColor: 'white',
		marginTop: 10*fh,
		alignItems: 'center',
		justifyContent: 'center'
	},
	sumtext: {
		fontSize: 18,
		fontWeight: "300",
	},
	selectionlistview: {
		height: 250*fh,
		marginTop: 20*fh
	},
	planbuttonview: {
		height: 40*fh,
		marginTop: 15*fh,
		alignItems: 'center',
		justifyContent: 'flex-start'		
	},
	planbutton: {
		height: 20*fh,
		width: 200*fw,
	},
	daypickerview: {
		marginTop: 7*fh,
		marginLeft: 10*fw,
		height: 33*fh,
		width: 80*fw,
		borderColor: 'grey',
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center'	
	},
	daypicker: {
		height: 35*fh,
		width: 80*fw
	},
	placemap: {
		marginTop: 7*fh,
		height: 135*fh,
		width: 320*fw,
	},
	placelistview: {
		marginTop: 10*fh,
		alignItems: 'center',
		height: 190*fh,
	},
	placeviewcontainer: {	
		marginBottom: 10*fh,
		height: 70*fh,
		width: 310*fw,
		borderRadius: 5,
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center'
	},
	placeviewreducedcontainer: {	
		marginBottom: 10*fh,
		height: 60*fh,
		width: 310*fw,
		backgroundColor: 'white',
		borderRadius: 5,
		flexDirection: 'row',
		alignItems: 'center'
	},
	placeiconcontainer: {
		flex: 0.15,
		alignItems: 'center',
		justifyContent: 'center'
	},
	placeicon: {
		alignItems: 'center',
		height: 40*fh,
		width: 40*fh
	},
	placemapicon: {
		alignItems: 'center',
		height: 25*fh,
		width: 25*fh
	},
	placeicontext: {
		fontSize: 12,
		marginTop: 13*fh,
		color: 'black',
	},
	placehomeicontext: {
		fontSize: 12,
		marginTop: 13*fh,
		color: 'black',
		marginRight: 1*fw
	},
	placedetailscontainer: {
		flex: 0.5,
		alignItems: 'flex-start',
		justifyContent: 'flex-start'
	},
	placedetailsreducedcontainer: {
		flex: 0.5,
		alignItems: 'flex-start',
		justifyContent: 'center'
	},
	placeactivitytext: {
		fontSize: 14,
		fontWeight: "400",
		marginLeft: 20*fw,
	},
	placetimetext: {
		fontSize: 13,
		color: 'purple',
		fontWeight: "300",
		marginLeft: 20*fw,
	},
	placeprebooktext: {
		fontSize: 12,
		color: 'red',
		fontWeight: "200",
		marginLeft: 20*fw,
		fontStyle: 'italic'
	},
	placebookbuttoncontainer: {
		flex: 0.35,
	},
	prebookbuttonview: {
		borderColor: 'darkgreen',
		backgroundColor: 'darkgreen',
		borderWidth: 1,
		borderRadius: 3,
		height: 30*fh,
		width: 60*fw,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 30*fw
	},
	prebookbuttontext: {
		color: 'white',
		fontSize: 9,
		fontWeight: "bold",
	},
	oneclickbookbuttoncontainer: {
		alignItems: 'center',
		marginTop: 15*fh,
		height: 30*fh,
	},
	oneclickbookbuttonview: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 200*fw,
		height: 30*fh,
		backgroundColor: '#2962FF',
		borderRadius: 2,
	},
	oneclickbookbuttontext: {
		color: 'white',
		fontWeight: "bold",
	},
	heightcontainer: {
		height:190*fh
	},
	lineplusor: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 5,
	},
	buttongreyline: {
		height: 1,
		flex: 0.7,
		backgroundColor: '#c0c0c0',
	},
	orview: {
		flex: 0.1,
		alignItems: 'center',
		justifyContent: 'center'	
	},
	ortext: {
		fontSize: 8
	},
	searchresultscontainer: {
		marginTop: 20*fh,
		marginLeft: 12.5*fw
	},
	searchresultstext: {
		color: 'gray',
		fontWeight: "500",
		fontSize: 11
	},
	searchloadingcontainer: {
		marginTop: 20*fh,
		marginLeft: 12.5*fw,
		height: 170*fh
	},
	searchloadingtext: {
		color: 'gray',
		fontSize: 14
	},
	accoinput: {
		height: 40*fh,
		marginLeft: 13*fw,
		width: 245*fw,
		borderColor: 'gray',
		borderWidth : 0.5,
		backgroundColor: 'white'
	},
	accoimagecontainer: {
		height: 40*fh,
		width: 40*fh,
		borderColor: 'gray',
		borderWidth : 0.5,
		backgroundColor: '#faebd7',
		justifyContent: 'center',
		alignItems: 'center',
	},
	accoviewcontainer: {	
		marginTop: 10*fh,
		marginLeft: 12*fw,
		height: 70*fh,
		width: 290*fw,
		borderWidth: 0.5,
		borderColor: 'black',
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center'
	},
	accodetailscontainer: {
		flex: 0.55,
		alignItems: 'flex-start',
		justifyContent: 'flex-start'
	},
	accolineonetext: {
		fontSize: 13,
		fontWeight: "400",
		color: 'black',
		marginLeft: 10*fw,
	},
	accolinetwotext: {
		fontSize: 12,
		fontWeight: "300",
		marginLeft: 10*fw,
	},
	accocheckbuttoncontainer: {
		flex: 0.3,
	},
	accocheckbuttonview: {
		borderColor: 'darkgreen',
		backgroundColor: 'darkgreen',
		borderWidth: 1,
		borderRadius: 3,
		height: 35*fh,
		width: 80*fw,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 10*fw
	},
	accocheckbuttontext: {
		color: 'white',
		fontSize: 9,
		fontWeight: "bold",
	},
	homesavebuttoncontainer: {
		alignItems: 'center',
		marginTop: 25*fh,
		marginBottom: 20*fh,
		height: 30*fh,
	},
	webviewtopbar: {
		flex: 0.1,
		backgroundColor: "white",
		flexDirection: 'row',
	},
	accowebview: {
		flex:0.9
	},
	webviewtopbartext: {
		color: "blue",
		fontSize: 14
	},
	detailtitle: {
		color: 'black',
		fontSize: 20,
		fontWeight: 'bold',
		marginLeft: 15*fw,
		marginTop: 20*fh
	},
	detaildescription: {
		color: 'black',
		fontSize: 14,
		marginLeft: 15*fw,
		marginTop: 6*fh
	},
	icontextdetailscontainer: {
		flex: 0.1,
		marginLeft: 15*fw,	
		flexDirection: 'row',
		alignItems: 'center'	
	},
	detailicon: {
		height: 25*fh,
		width: 25*fh
	},
	detailtext: {
		fontSize: 12.5,
		color: 'black',
		marginLeft: 20*fw
	},
	filtercontainer: {
		flex: 0.15, 
		flexDirection: 'row'
	},
	activefiltercontainer: {
		flex: 0.6,
		alignItems: 'center',
		justifyContent: 'center'
	},
	filtertextview: {
		backgroundColor: 'beige',
		marginTop: 10*fh,
		height: 30*fh,
		width: 200*fw,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30	
	},
	filtertextmodalview: {
		backgroundColor: 'beige',
		marginTop: 20*fh,
		marginLeft: 25*fw,
		height: 30*fh,
		width: 120*fw,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30	
	},
	filtertext: {
		fontSize: 16
	},
	openfiltercontainer: {
		flex: 0.3,
		alignItems: 'center',
		justifyContent: 'center'
	},
	openfiltertext: {
		marginTop: 10*fh,
		fontSize: 13
	},
	paywindowscreen: {
		height:440*fh,
		width:320*fw
	},
	payconfirmscreen:  {
		height: 240*fh, 
		width: 320*fw, 
		alignItems:"center", 
		justifyContent: "center"
	},
	paymargin: {
		marginTop: 20*fh
	},
	paybuttonstyle: {
		marginTop: 20*fh, 
		width: 200*fw
	},
	emailinput: {
		height: 40*fh,
		marginLeft: 13*fw,
		marginTop: 20*fh,
		width: 285*fw,
		borderColor: 'gray',
		borderWidth : 0.5,
		backgroundColor: 'white'
	},
});

module.exports = styles