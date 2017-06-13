app.factory("getFirebaseFactory", function($q, $http, FIREBASE_CONFIG){
	
	let getIncomes = (userId) => {
		let allIncomes = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/incomes.json?orderBy="uid"&equalTo="${userId}"`)
				.then((fbItems) => {
					let itemCollection = fbItems.data;
          if(itemCollection !== null ){
	          Object.keys(itemCollection).forEach((key) => {
	            itemCollection[key].id=key;
	            allIncomes.push(itemCollection[key]);
	          });          	
          }
          resolve(allIncomes);
				})
				.catch((error) => {
					reject(error);
				});
		});
	};


	let getFixExpenses = (userId) => {
		let allFixExpenses = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/fixExpenses.json?orderBy="uid"&equalTo="${userId}"`)
				.then((fbItems) => {
					let itemCollection = fbItems.data;
          if(itemCollection !== null ){
	          Object.keys(itemCollection).forEach((key) => {
	            itemCollection[key].id=key;
	            allFixExpenses.push(itemCollection[key]);
	          });          	
          }
          resolve(allFixExpenses);
				})
				.catch((error) => {
					reject(error);
				});
		});
	};


	let getVaryExpenses = (userId) => {
		let AllVaryExpenses = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/varyExpenses.json?orderBy="uid"&equalTo="${userId}"`)
				.then((fbItems) => {
					let itemCollection = fbItems.data;
          if(itemCollection !== null ){
	          Object.keys(itemCollection).forEach((key) => {
	            itemCollection[key].id=key;
	            AllVaryExpenses.push(itemCollection[key]);
	          });          	
          }
          resolve(AllVaryExpenses);
				})
				.catch((error) => {
					reject(error);
				});
		});
	};

	let getSavingFor = (userId) => {
		let AllsavingFor = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/savingFor.json?orderBy="uid"&equalTo="${userId}"`)
				.then((fbItems) => {
					let itemCollection = fbItems.data;
          if(itemCollection !== null ){
	          Object.keys(itemCollection).forEach((key) => {
	            itemCollection[key].id=key;
	            AllsavingFor.push(itemCollection[key]);
	          });          	
          }
          resolve(AllsavingFor);
				})
				.catch((error) => {
					reject(error);
				});
		});
	};



	let getSaving = (userId) => {
		let Allsaving = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/saving.json?orderBy="uid"&equalTo="${userId}"`)
				.then((fbItems) => {
					let itemCollection = fbItems.data;
          if(itemCollection !== null ){
	          Object.keys(itemCollection).forEach((key) => {
	            itemCollection[key].id=key;
	            Allsaving.push(itemCollection[key]);
	          });          	
          }
          resolve(Allsaving);
				})
				.catch((error) => {
					reject(error);
				});
		});
	};

	return {getIncomes:getIncomes
		  , getFixExpenses:getFixExpenses 
		  , getVaryExpenses:getVaryExpenses
		  , getSavingFor:getSavingFor
		  , getSaving};

});