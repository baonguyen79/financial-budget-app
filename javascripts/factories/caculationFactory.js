app.factory("caculationFactory", function(){

	let sum = 0;
	let sumFixExpense = 0;
	let varyExpense = {
		setAmount: 0,
		spendAmount: 0
	};

	let savingFor = {
		goal: 0,
		saveAmount: 0,
		addAmount: 0
	};

	let totalIncome = (incomes) => {
		sum = 0;
		incomes.forEach ((item) => {
			sum += item.amount;
		});

		return sum;
    };

    let totalFixExpenses = (expense) => {
    	sumFixExpense = 0;
		expense.forEach ((item) => {
			sumFixExpense += item.amount;
		});

		return sumFixExpense;
    };
   

    let totalVaryExpenses = (expense) => {
    	varyExpense.setAmount = 0;
    	varyExpense.spendAmount = 0;
		expense.forEach ((item) => {
			varyExpense.setAmount += item.setAmount;
    		varyExpense.spendAmount += item.spendAmount;
		});
		// varyExpense.percent = calPercent (varyExpense.setAmount , varyExpense.spendAmount);

		return varyExpense;
    };


    let totalSavingFor = (items) => {
    	savingFor.goal = 0;
    	savingFor.saveAmount = 0;
    	savingFor.addAmount = 0;
		items.forEach ((item) => {
			savingFor.goal += item.goal;
    		savingFor.saveAmount += item.saveAmount;
    		savingFor.addAmount += item.addAmount;
		});

		return savingFor;
    };

    let calPercent = (totNum , useNum) => {
    	return Math.round((useNum * 100)/totNum);
    };

    let totalSaving = (savings) => {
		sum = 0;
		savings.forEach ((item) => {
			sum += item.amount;
		});

		return sum;
    };

	

	return {totalIncome:totalIncome,
		    totalFixExpenses:totalFixExpenses,
		    totalVaryExpenses:totalVaryExpenses,
		    totalSavingFor:totalSavingFor,
		    calPercent:calPercent,
		    totalSaving:totalSaving};

});