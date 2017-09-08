
import ApiUtils from './ApiUtils';
const baseUrl = 'https://challenges.1aim.com/roombooking';

var Api = {  
  getRooms: function(date) {
    return fetch(baseUrl + '/getrooms', {  
		  method: 'POST',
		  headers: {
		    'Accept': 'application/json'
		    
		  },
		  body: JSON.stringify(date)
		})
      .then(ApiUtils.checkStatus)
      .then(response => response.text())
      .catch(e => e)
  }, 
  getBaseUrl : function() {
  	return baseUrl;
  }
}


export default Api;