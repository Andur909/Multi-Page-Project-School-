window.addEventListener("load", Initializer);

///Calculations
var Feet;
var inches;
var weight;
var bmi;
var kg;
var liters;


function Initializer()
{
	///Load
	document.getElementById("main_div").style.display = "block";
	document.getElementById("bmi_info_div").style.display = "none";
	document.getElementById("bmi_calculation_div").style.display = "none";
	document.getElementById("health_prodivers_info").style.display = "none";
	document.getElementById("water_calculator_info").style.display = "none";
	document.getElementById("water_calculator").style.display = "none";
	
	document.getElementById("btn_water_submit").disabled = true;
	
	///Main
	document.getElementById("btn_back_main").addEventListener("click", back_main);
	document.getElementById("btn_bmi").addEventListener("click", bmi_screen);
	document.getElementById("btn_health_provider").addEventListener("click", main_healthprovider);
	document.getElementById("btn_water_calc").addEventListener("click", water_calc_info);
	
	///BMI Info Screen
	document.getElementById("btn_back_bmi_info").addEventListener("click", back_info_bmi);
	document.getElementById("btn_next_bmi_info").addEventListener("click", next_info_bmi);
	
	///BMI CaLculation Screen
	document.getElementById("txt_ft").addEventListener("keypress", inch_unlock);
	document.getElementById("txt_inch").addEventListener("keypress", weight_unlock);
	document.getElementById("txt_weight").addEventListener("keypress", submit_unlock);
	document.getElementById("btn_bmi_submit").addEventListener("click", bmi_calculate);
	document.getElementById("btn_back_calc").addEventListener("click", back_calc_bmi);
	document.getElementById("btn_bmi_refresh").addEventListener("click", refresh_calc);
	
	///Health Provider Screen
	document.getElementById("btn_back_health_info").addEventListener("click", back_healthprovider);
	
	///Water Calculator Info Screen
	document.getElementById("btn_water_calc_info_back").addEventListener("click", back_water_info);
	document.getElementById("btn_water_calc_info_next").addEventListener("click", next_water_info);
	
	///Water Calc Screen
	document.getElementById("btn_back_water_calc").addEventListener("click", back_water_calc);
	document.getElementById("txt_weight_water").addEventListener("keypress", water_submit_unlock);
	document.getElementById("btn_refresh_water").addEventListener("click", refresh_water_calc);
	document.getElementById("btn_water_submit").addEventListener("click", water_submit);
}


///Main Screen
function bmi_screen()
{
	document.getElementById("main_div").style.display = "none";
	document.getElementById("bmi_info_div").style.display = "block";
	document.getElementById("bmi_calculation_div").style.display = "none";
	document.getElementById("health_prodivers_info").style.display = "none";
	document.getElementById("water_calculator_info").style.display = "none";
	document.getElementById("water_calculator").style.display = "none";
}

function back_main()
{
	window.location.href = "index.html";
}

function main_healthprovider()
{
	document.getElementById("main_div").style.display = "none";
	document.getElementById("bmi_info_div").style.display = "none";
	document.getElementById("bmi_calculation_div").style.display = "none";
	document.getElementById("health_prodivers_info").style.display = "block";
	document.getElementById("water_calculator_info").style.display = "none";
	document.getElementById("water_calculator").style.display = "none";
}
	
function water_calc_info()
{
	document.getElementById("main_div").style.display = "none";
	document.getElementById("bmi_info_div").style.display = "none";
	document.getElementById("bmi_calculation_div").style.display = "none";
	document.getElementById("health_prodivers_info").style.display = "none";
	document.getElementById("water_calculator_info").style.display = "block";
	document.getElementById("water_calculator").style.display = "none";
}

///BMI Info Screen
function back_info_bmi()
{
	document.getElementById("main_div").style.display = "block";
	document.getElementById("bmi_info_div").style.display = "none";
	document.getElementById("bmi_calculation_div").style.display = "none";
	document.getElementById("health_prodivers_info").style.display = "none";
	document.getElementById("water_calculator_info").style.display = "none";
	document.getElementById("water_calculator").style.display = "none";
}

function next_info_bmi()
{
	document.getElementById("main_div").style.display = "none";
	document.getElementById("bmi_info_div").style.display = "none";
	document.getElementById("bmi_calculation_div").style.display = "block";
	document.getElementById("health_prodivers_info").style.display = "none";
	document.getElementById("water_calculator_info").style.display = "none";
	document.getElementById("water_calculator").style.display = "none";
	
	document.getElementById("txt_inch").disabled = true;
	document.getElementById("btn_bmi_submit").disabled = true;
	document.getElementById("txt_weight").disabled = true;
	document.getElementById("txt_ft").focus();
}

///BMI Calculation Screen
function inch_unlock()
{
	document.getElementById("txt_inch").disabled = false;
}

function weight_unlock()
{
	document.getElementById("txt_weight").disabled = false;
}

function submit_unlock()
{
	document.getElementById("btn_bmi_submit").disabled = false;
}

function bmi_calculate()
{
	Feet = document.getElementById("txt_ft").value;
	inches = document.getElementById("txt_inch").value;
	weight = document.getElementById("txt_weight").value;

	if (Feet != "" && Feet > -1 && inches != "" && inches > -1 && inches < 13 && weight != "" && weight > 0)
	{
		meters = Feet / 3.281;
		meters = meters + (inches / 39.37);
		kg = weight / 2.205;
		bmi = kg / (meters * meters);
		document.getElementById("lbl_bmi").innerText = "Your BMI: " + bmi;
	} else {
		alert("The Information Must Match Your Actual Information")
	}
}

function back_calc_bmi()
{
	document.getElementById("main_div").style.display = "block";
	document.getElementById("bmi_info_div").style.display = "none";
	document.getElementById("bmi_calculation_div").style.display = "none";
	document.getElementById("health_prodivers_info").style.display = "none";
	document.getElementById("water_calculator_info").style.display = "none";
	document.getElementById("water_calculator").style.display = "none";
}

function refresh_calc()
{
	document.getElementById("txt_ft").value = 
	document.getElementById("txt_inch").value = "";
	document.getElementById("txt_weight").value = "";
	document.getElementById("txt_ft").focus();
	document.getElementById("txt_inch").disabled = true;
	document.getElementById("btn_bmi_submit").disabled = true;
	document.getElementById("txt_weight").disabled = true;
	document.getElementById("lbl_bmi").innerText = "";
}

///Health Provides Screen
function back_healthprovider()
{
	document.getElementById("main_div").style.display = "block";
	document.getElementById("bmi_info_div").style.display = "none";
	document.getElementById("bmi_calculation_div").style.display = "none";
	document.getElementById("health_prodivers_info").style.display = "none";
	document.getElementById("water_calculator_info").style.display = "none";
	document.getElementById("water_calculator").style.display = "none";
}

///Water Calcultor Info Screen
function back_water_info()
{
	document.getElementById("main_div").style.display = "block";
	document.getElementById("bmi_info_div").style.display = "none";
	document.getElementById("bmi_calculation_div").style.display = "none";
	document.getElementById("health_prodivers_info").style.display = "none";
	document.getElementById("water_calculator_info").style.display = "none";
	document.getElementById("water_calculator").style.display = "none";
}

function next_water_info()
{
	document.getElementById("main_div").style.display = "none";
	document.getElementById("bmi_info_div").style.display = "none";
	document.getElementById("bmi_calculation_div").style.display = "none";
	document.getElementById("health_prodivers_info").style.display = "none";
	document.getElementById("water_calculator_info").style.display = "none";
	document.getElementById("water_calculator").style.display = "block";
}

///Water Calc Screen
function back_water_calc()
{
	document.getElementById("main_div").style.display = "block";
	document.getElementById("bmi_info_div").style.display = "none";
	document.getElementById("bmi_calculation_div").style.display = "none";
	document.getElementById("health_prodivers_info").style.display = "none";
	document.getElementById("water_calculator_info").style.display = "none";
	document.getElementById("water_calculator").style.display = "none";
}

function water_submit_unlock()
{
	document.getElementById("btn_water_submit").disabled  = false;
}

function refresh_water_calc()
{
	document.getElementById("txt_weight_water").value = "";
	document.getElementById("txt_weight_water").focus();
	document.getElementById("btn_water_submit").disabled = true;
	document.getElementById("lbl_water").innerText = "";
}

function water_submit()
{
	weight = document.getElementById("txt_weight_water").value;
	if (weight != "" && weight > 0)
	{
		kg = weight / 2.205;
		liters = kg * 0.03;
		document.getElementById("lbl_water").innerText = "Recommender Liters: " + liters;
	} else {
		alert("Weight Must be real")
	}
}