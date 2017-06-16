app.factory("FirebaseFactory", function($q, $http, FIREBASE_CONFIG){
	
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

	//************************************
	//*  Vary Expense Functions          *
	//************************************
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
	

	let getSingleVaryExpense = (id) => {
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/varyExpenses/${id}.json`)
			.then((resultz) => {
				resultz.data.id =id;
				resolve(resultz);
			}).catch((error) => {
				reject(error);
			});
		});
	};


	let editVaryExpense = (item) => {
		// console.log("item", item);
		return $q((resolve, reject) => {
			$http.put(`${FIREBASE_CONFIG.databaseURL}/varyExpenses/${item.id}.json`, 
				JSON.stringify({
					title:      item.title,
					date:       item.date,
					month:      item.month,
					setAmount: item.setAmount,
					spendAmount: item.spendAmount,
					uid: item.uid
				})
				).then((resultz) => {
					resolve(resultz);
				}).catch((error) => {
					reject(error);
				});
		});
	};

	
	let postNewVaryExpense = (newItem) => {
		return $q((resolve, reject) =>{
			$http.post(`${FIREBASE_CONFIG.databaseURL}/varyExpenses.json`, JSON.stringify(newItem))
				.then((resultz) => {
					console.log ("post" , resultz);
					resolve(resultz);
				}).catch((error) => {
					reject(error);
				});
		});
	};

	//************************************
	//*  Saving For Functions            *
	//************************************
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

	//************************************
	//*  Saving Functions                *
	//************************************
	let getSaving = (userId) => {
		let Allsaving = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/savings.json?orderBy="uid"&equalTo="${userId}"`)
				.then((fbItems) => {
					console.log("+++ saving" , fbItems.data);
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


	//************************************
	//*  Return Functions                *
	//************************************
	return {getIncomes:getIncomes
		  , getFixExpenses:getFixExpenses 
		  
		  , getVaryExpenses:getVaryExpenses
		  , getSingleVaryExpense:getSingleVaryExpense
		  , editVaryExpense:editVaryExpense
		  , postNewVaryExpense:postNewVaryExpense

		  , getSavingFor:getSavingFor
		  , getSaving:getSaving}
});