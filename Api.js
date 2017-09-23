const url = 'https://trip-plan-router.herokuapp.com/'
const urlbook = 'https://trip-plan-router.herokuapp.com/bookings'
const url2 = 'https://www.instamojo.com/api/1.1/payment-requests/'

module.exports = {
	getUserTrips(fbid){
		var jsonObj = {
			"type": "GetData",
			"fbid": fbid,
		};
		return fetch(url, {
			"headers": {
      				"Accept": "application/json",
      				"Content-Type": "application/json"
    			},
			"method": "POST",
    			"body": JSON.stringify(jsonObj)
    		})
    		.then((response) => {
			console.log(response);
			return response.json();
    		})
    		.catch((error) => {
        		console.error(error);
			throw error;
    		});
	},
	
	getUserMap(fbid,tripid,city){
		var jsonObj = {
			"type": "GetTripData",
			"fbid": fbid,
			"tripid": tripid,
			"city": city
		};
		return fetch(url, {
			"headers": {
      				"Accept": "application/json",
      				"Content-Type": "application/json"
    			},
			"method": "POST",
    			"body": JSON.stringify(jsonObj)
    		})
    		.then((response) => {
			console.log(response);
			return response.json();
    		})
    		.catch((error) => {
        		console.error(error);
			throw error;
    		});
	},

	getAccoSearch(city,loctext){
		var jsonObj = {
			"type": "GetHomeData",
			"city": city,
			"loctext": loctext
		};
		return fetch(url, {
			"headers": {
      				"Accept": "application/json",
      				"Content-Type": "application/json"
    			},
			"method": "POST",
    			"body": JSON.stringify(jsonObj)
    		})
    		.then((response) => {
			console.log(response);
			return response.json();
    		})
    		.catch((error) => {
        		console.error(error);
			throw error;
    		});
	},
	
	getAccoName(accoUrl){
		var jsonObj = {
			"type": "GetHomeName",
			"url": accoUrl
		};
		return fetch(url, {
			"headers": {
      				"Accept": "application/json",
      				"Content-Type": "application/json"
    			},
			"method": "POST",
    			"body": JSON.stringify(jsonObj)
    		})
    		.then((response) => {
			console.log(response);
			return response.json();
    		})
    		.catch((error) => {
        		console.error(error);
			throw error;
    		});
	},

	sendAccoName(accoName, tripData){
		var jsonObj = {
			"type": "SendHomeName",
			"name": accoName,
			"tripid": tripData[0],
			"fbid": tripData[1],
			"city": tripData[2]
		};
		return fetch(url, {
			"headers": {
      				"Accept": "application/json",
      				"Content-Type": "application/json"
    			},
			"method": "POST",
    			"body": JSON.stringify(jsonObj)
    		})
    		.then((response) => {
			console.log(response);
			return response.json();
    		})
    		.catch((error) => {
        		console.error(error);
			throw error;
    		});
	},
	
	saveAccoDetails(accoName, lat, lng, tripData){
		var jsonObj = {
			"type": "SaveHomeName",
			"name": accoName,
			"lat": lat,
			"lng": lng,
			"tripid": tripData[0],
			"fbid": tripData[1],
			"city": tripData[2]
		};
		return fetch(url, {
			"headers": {
      				"Accept": "application/json",
      				"Content-Type": "application/json"
    			},
			"method": "POST",
    			"body": JSON.stringify(jsonObj)
    		})
    		.then((response) => {
			console.log(response);
			return response.json();
    		})
    		.catch((error) => {
        		console.error(error);
			throw error;
    		});
	},

	saveDefaultAccoDetails(tripData){
		var jsonObj = {
			"type": "SaveDefaultHomeName",
			"tripid": tripData[0],
			"fbid": tripData[1],
			"city": tripData[2]
		};
		return fetch(url, {
			"headers": {
      				"Accept": "application/json",
      				"Content-Type": "application/json"
    			},
			"method": "POST",
    			"body": JSON.stringify(jsonObj)
    		})
    		.then((response) => {
			console.log(response);
			return response.json();
    		})
    		.catch((error) => {
        		console.error(error);
			throw error;
    		});
	},
	
	getPayULink(amount,tripData){
		var jsonObj = {
			"type": "GetPaymentLink",
			"tripid": tripData[0],
			"fbid": tripData[1],
			"city": tripData[2],
			"amount": amount
		};
		return fetch(url, {
			"headers": {
      				"Accept": "application/json",
      				"Content-Type": "application/json"
    			},
			"method": "POST",
    			"body": JSON.stringify(jsonObj)
    		})
    		.then((response) => {
			console.log(response);
			return response.json();
    		})
    		.catch((error) => {
        		console.error(error);
			throw error;
    		});
	},

	getBookingLink(tripid,fbid,city){
		var jsonObj = {
			"type": "GetBookingLink",
			"tripid": tripid,
			"fbid": fbid,
			"city": city 
		};
		return fetch(url, {
			"headers": {
      				"Accept": "application/json",
      				"Content-Type": "application/json"
    			},
			"method": "POST",
    			"body": JSON.stringify(jsonObj)
    		})
    		.then((response) => {
			console.log(response);
			return response.json();
    		})
    		.catch((error) => {
        		console.error(error);
			throw error;
    		});
	},

	getPaymentLink(){
		var details = {
    			'amount': '100.00',
    			'purpose': 'Trial Payment',
    			'redirect_url': 'https://trip-plan-router.herokuapp.com/'
		};
		var formBody = [];
		for (var property in details) {
  			var encodedKey = encodeURIComponent(property);
  			var encodedValue = encodeURIComponent(details[property]);
  			formBody.push(encodedKey + "=" + encodedValue);
		}
		
		formBody = formBody.join("&");
		

		return fetch(url2, {
			"headers": {
      				"Accept": "application/json",
      				"Content-Type": "application/x-www-form-urlencoded",
				"X-Api-Key": "76a15991714ca262c196a3aeebc54a64",
				"X-Auth-Token": "599bb46950a763133913da57e3fee751"
    			},
			"method": "POST",
    			"body": formBody
    		})
    		.then((response) => {
			return response.json();
    		})
    		.catch((error) => {
        		console.error(error);
			throw error;
    		});
		
	},

	postUserTrip(jsonObj){
		return fetch(url, {
			"headers": {
      				"Accept": "application/json",
      				"Content-Type": "application/json"
    			},
			"method": "POST",
    			"body": JSON.stringify(jsonObj)
    		})
    		.then((response) => {
			return response.json();
    		})
    		.catch((error) => {
        		console.error(error);
			throw error;
    		});
	},
	
	makeBookingRequest(jsonObj){
		return fetch(urlbook, {
			"headers": {
      				"Accept": "application/json",
      				"Content-Type": "application/json"
    			},
			"method": "POST",
    			"body": JSON.stringify(jsonObj)
    		})
    		.then((response) => {
			console.log(response)
			return response.json();
    		})
    		.catch((error) => {
        		console.error(error);
			throw error;
    		});
	},

}