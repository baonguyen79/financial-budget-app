app.factory("caculationFactory", function(){

	let sum = 0;
	let varyExpense = {
		setAmount: 0,
		spendAmount: 0
	};

	let savingFor = {
		goal: 0,
		saveAmount: 0
	};

	let totalIncome = (incomes) => {
		sum = 0;
		incomes.forEach ((item) => {
			sum += item.amount;
		});

		return sum;
    };

    let totalFixExpenses = (expense) => {
    	sum = 0;
		expense.forEach ((item) => {
			sum += item.amount;
		});

		return sum;
    };
   

    let totalVaryExpenses = (expense) => {
    	varyExpense.setAmount = 0;
    	varyExpense.spendAmount = 0;
		expense.forEach ((item) => {
			varyExpense.setAmount += item.setAmount;
    		varyExpense.spendAmount += item.spendAmount;
		});

		return varyExpense;
    };


    let totalSavingFor = (savingFor) => {
    	savingFor.goal = 0;
    	savingFor.saveAmount = 0;
		savingFor.forEach ((item) => {
			savingFor.goal += item.goal;
    		savingFor.saveAmount += item.saveAmount;
		});

		return savingFor;
    };


	

	return {totalIncome:totalIncome
		   , totalFixExpenses:totalFixExpenses
		   , totalVaryExpenses:totalVaryExpenses
		   , totalSavingFor:totalSavingFor};

});