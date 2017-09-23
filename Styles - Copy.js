import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	hometripsview: {
		height: 350,
	},
	addbuttoncontainer: {
		alignItems: 'flex-end',
		justifyContent: 'center',
		height: 60,
	},
	addbutton: {
		marginRight: 15,
		height: 60,
		width: 60,
		borderRadius: 60,
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
		height: 100,
		marginTop: 20,
		alignItems: 'center',
		justifyContent: 'center'
	},
	hometripview: {
		borderColor: 'grey',
		borderWidth: 0.5,
		borderRadius: 10,
		backgroundColor: 'white',
		height: 100,
		width: 300,
		flexDirection: 'row',
		alignItems: 'center',
	},
	fourimageview: {
		borderColor: 'gray',
		borderWidth: 0.5,
		backgroundColor: 'white',
		height: 85,
		width: 85,
		marginLeft: 10
	},
	twoimageview: {
		flexDirection: 'row',
		height: 42,
		width: 85,
	},
	hometripimage1: {
		marginLeft: 1,
		marginRight: 0.5,
		height: 40,
		width: 40,
		marginTop: 1,
	},
	hometripimage2: {
		marginLeft:0.5,
		marginRight: 1,
		height: 40,
		width: 40,
		marginTop: 1,
	},
	hometripimage3: {
		marginLeft: 1,
		marginRight: 0.5,
		height: 40,
		width: 40,
		marginTop: 0.5,
	},
	hometripimage4: {
		marginLeft: 0.5,
		marginRight: 1,
		height: 40,
		width: 40,
		marginTop: 0.5,
	},
	hometripdetails: {
		height: 90,
		width: 200,
		marginLeft: 20
	},
	hometripcity: {
		marginTop: 0,
		fontSize: 18,
		fontWeight: "400",
		color: 'black'
	},
	hometripdates: {
		marginTop: 5,
		fontSize: 12,
		color: 'purple',
		fontWeight: "300",
	},
	deleteiconcontainer: {
		flexDirection: 'row',
		height: 50,
		width: 200
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
		height: 20,
		width: 20,
		marginLeft: 30
	},
	deletetripbutton: {
		height: 20,
		width: 20
	},
	cityview: {
		marginLeft: 6,
		marginTop: 20
	},
	citysearchview: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 0,
		marginTop: 0
	},
	cityicon: {
		height: 40,
		width: 40
	},
	cityinput: {
		height: 40,
		marginLeft: 13,
		width: 285,
		borderColor: 'gray',
		borderWidth : 0.5,
		backgroundColor: 'white'
	},
	citydisplayview: {
		marginLeft: 14,
		marginRight: 0,
		height: 80
	},
	cityimagematrix : {
		flexDirection : 'row',
		flexWrap: 'wrap',
	},
	cityrectangleview: {
		backgroundColor: 'white',
		height: 50,
		width: 80,
		borderRadius: 5,
		borderColor: 'gray',
		borderWidth : 0.5,
		marginTop: 20,
		marginLeft: 0,
		marginRight: 20,
		alignItems: 'center',
		justifyContent: 'center'		
	},
	citytext: {
		color: 'black',
		fontSize: 13
	},
	groupicon: {
		marginLeft: 13,
		height: 40,
		width: 30
	},
	groupsizeview: {
		flexDirection: 'row',
		alignItems: 'center',
		marginLeft: 0,
		marginTop: 0
	},
	groupinput: {
		height: 40,
		marginLeft: 25,
		width: 228,
		borderColor: 'gray',
		borderWidth : 0.5,
		backgroundColor: 'white'
	},
	greylineextended: {
		marginTop: 20,
		height: 0.5,
		width: 320,
		backgroundColor: '#c0c0c0',
	},
	datetimedurationview: {
		flexDirection: 'row',
		marginLeft: 20,
		marginTop: 10
	},
	datetimeview: {
		marginRight: 28,
	},
	dateview: {
		flexDirection: 'row',
		marginTop: 20
	},
	datetextholder: {
		height: 30,
		width: 94,
		borderColor: 'gray',
		borderWidth : 0.5,
		backgroundColor: 'white',
		justifyContent: 'center',
	},
	datetext: {
		fontSize: 11,
		marginLeft: 5
	},
	datetimeimagecontainer: {
		height: 30,
		width: 30,
		borderColor: 'gray',
		borderWidth : 0.5,
		backgroundColor: '#faebd7',
		justifyContent: 'center',
		alignItems: 'center',
	},
        calendaricon:{
		height: 25,
		width: 25,
	},
	startplanbuttonview : {
		marginTop: 30,
		alignItems: 'center',
		justifyContent: 'center'
	},
	cardspace : {
		alignItems: 'center',
		flex: 1,
		backgroundColor: 'white',		
	},
	cardbackstruct : {
		marginTop: 10,
		height: 260,
		width: 350,
		backgroundColor: "white",
	},
	cardimage: {
		height: 190,
		width: 350,
		marginTop: 20,
	},
	cardmaintext: {
		marginLeft: 20,
		marginTop: 145,
		fontSize: 28,
		fontWeight: "900",
		color: 'white'
	},
	cardicon: {
		height: 30,
		width: 30
	},
	cardicontext: {
		marginLeft: 10,
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
		height: 65,
		width: 65,
		borderRadius: 75,
	},
	smallbuttonicon: {
		height: 45,
		width: 45,
		borderRadius: 75,
	},
	selectcontainer: {
		height: 90,
		width: 320,
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
		width: 320,
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
		height: 30,
		width: 30,
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
		fontSize: 18,
		fontWeight: "400",
		marginLeft: 20,
	},
	providertext: {
		fontSize: 14,
		color: 'purple',
		fontWeight: "300",
		marginLeft: 20,
	},
	pricetext: {
		fontSize: 14
	},
	shortlistbuttonicon: {
		height: 30,
		width: 30,
		borderRadius: 30,
	},
	sumview: {
		height: 50,
		backgroundColor: 'white',
		marginTop: 10,
		alignItems: 'center',
		justifyContent: 'center'
	},
	sumtext: {
		fontSize: 18,
		fontWeight: "300",
	},
	selectionlistview: {
		height: 250,
		marginTop: 20
	},
	planbuttonview: {
		height: 40,
		marginTop: 15,
		alignItems: 'center',
		justifyContent: 'flex-start'		
	},
	planbutton: {
		height: 20,
		width: 200,
	},
	daypickerview: {
		marginTop: 7,
		marginLeft: 10,
		height: 33,
		width: 80,
		borderColor: 'grey',
		borderWidth: 1,
		alignItems: 'center',
		justifyContent: 'center'	
	},
	daypicker: {
		height: 35,
		width: 80
	},
	placemap: {
		marginTop: 7,
		height: 135,
		width: 320,
	},
	placelistview: {
		marginTop: 10,
		alignItems: 'center',
		height: 190,
	},
	placeviewcontainer: {	
		marginBottom: 10,
		height: 70,
		width: 310,
		borderRadius: 5,
		backgroundColor: 'white',
		flexDirection: 'row',
		alignItems: 'center'
	},
	placeviewreducedcontainer: {	
		marginBottom: 10,
		height: 50,
		width: 310,
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
		height: 40,
		width: 40
	},
	placemapicon: {
		alignItems: 'center',
		height: 25,
		width: 25
	},
	placeicontext: {
		fontSize: 12,
		marginTop: 13,
		color: 'black',
	},
	placehomeicontext: {
		fontSize: 12,
		marginTop: 13,
		color: 'black',
		marginRight: 1
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
		fontSize: 16,
		fontWeight: "400",
		marginLeft: 20,
	},
	placetimetext: {
		fontSize: 13,
		color: 'purple',
		fontWeight: "300",
		marginLeft: 20,
	},
	placeprebooktext: {
		fontSize: 12,
		color: 'red',
		fontWeight: "200",
		marginLeft: 20,
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
		height: 30,
		width: 60,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 30
	},
	prebookbuttontext: {
		color: 'white',
		fontSize: 9,
		fontWeight: "bold",
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
	oneclickbookbuttoncontainer: {
		alignItems: 'center',
		marginTop: 15,
		height: 30,
	},
	oneclickbookbuttonview: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 200,
		height: 30,
		backgroundColor: '#2962FF',
		borderRadius: 2,
	},
	oneclickbookbuttontext: {
		color: 'white',
		fontWeight: "bold",
	},
	searchresultscontainer: {
		marginTop: 20,
		marginLeft: 12.5
	},
	searchresultstext: {
		color: 'gray',
		fontWeight: "500",
		fontSize: 11
	},
	searchloadingcontainer: {
		marginTop: 20,
		marginLeft: 12.5,
		height: 170
	},
	searchloadingtext: {
		color: 'gray',
		fontSize: 14
	},
	accoinput: {
		height: 40,
		marginLeft: 13,
		width: 245,
		borderColor: 'gray',
		borderWidth : 0.5,
		backgroundColor: 'white'
	},
	accoimagecontainer: {
		height: 40,
		width: 40,
		borderColor: 'gray',
		borderWidth : 0.5,
		backgroundColor: '#faebd7',
		justifyContent: 'center',
		alignItems: 'center',
	},
	accoviewcontainer: {	
		marginTop: 10,
		marginLeft: 12,
		height: 70,
		width: 290,
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
		marginLeft: 10,
	},
	accolinetwotext: {
		fontSize: 12,
		fontWeight: "300",
		marginLeft: 10,
	},
	accocheckbuttoncontainer: {
		flex: 0.3,
	},
	accocheckbuttonview: {
		borderColor: 'darkgreen',
		backgroundColor: 'darkgreen',
		borderWidth: 1,
		borderRadius: 3,
		height: 35,
		width: 80,
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 10
	},
	accocheckbuttontext: {
		color: 'white',
		fontSize: 9,
		fontWeight: "bold",
	},
	homesavebuttoncontainer: {
		alignItems: 'center',
		marginTop: 25,
		marginBottom: 20,
		height: 30,
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
		marginLeft: 15,
		marginTop: 20
	},
	detaildescription: {
		color: 'black',
		fontSize: 14,
		marginLeft: 15,
		marginTop: 6
	},
	icontextdetailscontainer: {
		flex: 0.1,
		marginLeft: 15,	
		flexDirection: 'row',
		alignItems: 'center'	
	},
	detailicon: {
		height: 25,
		width: 25
	},
	detailtext: {
		fontSize: 12.5,
		color: 'black',
		marginLeft: 20
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
		marginTop: 10,
		height: 30,
		width: 200,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 30	
	},
	filtertextmodalview: {
		backgroundColor: 'beige',
		marginTop: 20,
		marginLeft: 25,
		height: 30,
		width: 120,
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
		marginTop: 10,
		fontSize: 13
	}	
	
});

module.exports = styles