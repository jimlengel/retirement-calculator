
function retirementIncome(){
		var current_savings = parseFloat(document.getElementById("current_savings").value) || 0;
		var monthly_contribution = parseFloat(document.getElementById("monthly_contribution").value) || 0;
		var age = parseFloat(document.getElementById("age").value) || 0;
		var retirement_age = parseFloat(document.getElementById("retirement_age").value) || 0;
		var roa = parseFloat(document.getElementById("roa").value) || 0;
//		console.log(12 * monthly_contribution);
		var interest_savings = (roa * current_savings);
		var years = (retirement_age - age);
		var interest_contribution = (roa * monthly_contribution * 12 * years);
		
		var total_saved = 
			((current_savings + interest_savings) + (monthly_contribution * 12 * years) + (interest_contribution));
		var monthly_interest = roa/12;
		
		document.getElementById("retirement_assets").value=(total_saved.toLocaleString("en-US"));
		var retirement_monthly_income = (total_saved * monthly_interest).toFixed(2);
		document.getElementById("retirement_income").value=(retirement_monthly_income.toLocaleString("en-US"));
};