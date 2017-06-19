app.factory("FirebaseFactory", function($q, $http, FIREBASE_CONFIG){
	//************************************
	//*  Incomes Functions               *
	//************************************
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

	let getSingleIncome = (id) => {
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/incomes/${id}.json`)
			.then((resultz) => {
				resultz.data.id =id;
				resolve(resultz);
			}).catch((error) => {
				reject(error);
			});
		});
	};


	let editIncome = (item) => {
		return $q((resolve, reject) => {
			$http.put(`${FIREBASE_CONFIG.databaseURL}/incomes/${item.id}.json`, 
				JSON.stringify({
					title:       item.title,
					date:        item.date,
					month:       item.month,
					amount:      item.amount,
					uid:         item.uid
				})
				).then((resultz) => {
					resolve(resultz);
				}).catch((error) => {
					reject(error);
				});
		});
	};


	let postNewIncome = (newItem) => {
		return $q((resolve, reject) =>{
			$http.post(`${FIREBASE_CONFIG.databaseURL}/incomes.json`, JSON.stringify(newItem))
				.then((resultz) => {
					console.log ("post" , resultz);
					resolve(resultz);
				}).catch((error) => {
					reject(error);
				});
		});
	};

	let deleteIncome = (itemId) => {
		return $q((resolve, reject) => {
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/incomes/${itemId}.json`)
				.then((resultz) => {
					resolve(resultz);
				}).catch((error) => {
					reject(error);
				});
		});
	};

	//************************************
	//*  Fix Expense Functions           *
	//************************************
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

	let getSingleFixExpense = (id) => {
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/fixExpenses/${id}.json`)
			.then((resultz) => {
				resultz.data.id =id;
				resolve(resultz);
			}).catch((error) => {
				reject(error);
			});
		});
	};

	let editFixExpense = (item) => {
		// console.log("item", item);
		return $q((resolve, reject) => {
			$http.put(`${FIREBASE_CONFIG.databaseURL}/fixExpenses/${item.id}.json`, 
				JSON.stringify({
					title:       item.title,
					date:        item.date,
					month:       item.month,
					amount:      item.amount,
					uid:         item.uid
				})
				).then((resultz) => {
					resolve(resultz);
				}).catch((error) => {
					reject(error);
				});
		});
	};

	let postNewFixExpense = (newItem) => {
		return $q((resolve, reject) =>{
			$http.post(`${FIREBASE_CONFIG.databaseURL}/fixExpenses.json`, JSON.stringify(newItem))
				.then((resultz) => {
					console.log ("post" , resultz);
					resolve(resultz);
				}).catch((error) => {
					reject(error);
				});
		});
	};


	let deleteFixExpense = (itemId) => {
		return $q((resolve, reject) => {
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/fixExpenses/${itemId}.json`)
				.then((resultz) => {
					resolve(resultz);
				}).catch((error) => {
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
					title:       item.title,
					date:        item.date,
					month:       item.month,
					setAmount:   item.setAmount,
					spendAmount: item.spendAmount,
					monitorId:   item.monitorId,
					uid:         item.uid
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


	let deleteVaryExpense = (itemId) => {
		return $q((resolve, reject) => {
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/varyExpenses/${itemId}.json`)
				.then((resultz) => {
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

	let getSingleSavingFor = (id) => {
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/savingFor/${id}.json`)
			.then((resultz) => {
				resultz.data.id =id;
				resolve(resultz);
			}).catch((error) => {
				reject(error);
			});
		});
	};


	let editSavingFor = (item) => {
		// console.log("item", item);
		return $q((resolve, reject) => {
			$http.put(`${FIREBASE_CONFIG.databaseURL}/savingFor/${item.id}.json`, 
				JSON.stringify({
					title:       item.title,
					date:        item.date,
					month:       item.month,
					goal: 		 item.goal,
					saveAmount:  item.saveAmount,
					monitorId:   item.monitorId,
					imageUrl:    item.imageUrl,
					uid:         item.uid
				})
				).then((resultz) => {
					resolve(resultz);
				}).catch((error) => {
					reject(error);
				});
		});
	};

	
	let postNewSavingFor = (newItem) => {
		return $q((resolve, reject) =>{
			$http.post(`${FIREBASE_CONFIG.databaseURL}/savingFor.json`, JSON.stringify(newItem))
				.then((resultz) => {
					console.log ("post" , resultz);
					resolve(resultz);
				}).catch((error) => {
					reject(error);
				});
		});
	};


	let deleteSavingFor = (itemId) => {
		return $q((resolve, reject) => {
			$http.delete(`${FIREBASE_CONFIG.databaseURL}/savingFor/${itemId}.json`)
				.then((resultz) => {
					resolve(resultz);
				}).catch((error) => {
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
					// console.log("+++ saving" , fbItems.data);
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
		  , getSingleIncome:getSingleIncome	
		  , postNewIncome:postNewIncome
		  , editIncome:editIncome
		  , deleteIncome:deleteIncome

		  , getFixExpenses:getFixExpenses 
		  , getSingleFixExpense:getSingleFixExpense
		  , editFixExpense:editFixExpense
		  , postNewFixExpense:postNewFixExpense
		  , deleteFixExpense:deleteFixExpense
		  
		  , getVaryExpenses:getVaryExpenses
		  , getSingleVaryExpense:getSingleVaryExpense
		  , editVaryExpense:editVaryExpense
		  , postNewVaryExpense:postNewVaryExpense
		  , deleteVaryExpense:deleteVaryExpense

		  , getSavingFor:getSavingFor
		  , getSingleSavingFor:getSingleSavingFor
		  , editSavingFor:editSavingFor
		  , postNewSavingFor:postNewSavingFor
		  , deleteSavingFor:deleteSavingFor

		  , getSaving:getSaving}
});