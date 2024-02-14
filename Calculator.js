window.addEventListener("load",addListeners)

var total = 0;
var label = "";
var num1 = "0";
var num2 = "0";
var operation = "";
var sign = "+";
var num3;
num3 = parseFloat(num3)

function addListeners()
{
	document.getElementById("btn_calc_clear").addEventListener("click", Clear);
	document.getElementById("btn_CE").addEventListener("click", CE);
	document.getElementById("btndot").addEventListener("click",dot);
	document.getElementById("btnzero").addEventListener("click",zero);
	document.getElementById("btnone").addEventListener("click",one);
	document.getElementById("btntwo").addEventListener("click",two);
	document.getElementById("btnthree").addEventListener("click",three);
	document.getElementById("btnfour").addEventListener("click",four);
	document.getElementById("btnfive").addEventListener("click",five);
	document.getElementById("btnsix").addEventListener("click",six);
	document.getElementById("btnseven").addEventListener("click",seven);
	document.getElementById("btneigth").addEventListener("click",eight);
	document.getElementById("btnnine").addEventListener("click",nine);
	document.getElementById("btnplus").addEventListener("click",plus);
	document.getElementById("btnminus").addEventListener("click",minus);
	document.getElementById("btnmultiplication").addEventListener("click",multiplication);
	document.getElementById("btn+-").addEventListener("click",signchanger);
	document.getElementById("btnequal").addEventListener("click",equal);
	document.getElementById("btndivision").addEventListener("click",division);
	document.getElementById("btnabs").addEventListener("click", abs);
	document.getElementById("btn_pi").addEventListener("click", PI);
	document.getElementById("btn_sin").addEventListener("click", sine);
	document.getElementById("btn_cos").addEventListener("click", cosine);
	document.getElementById("btn_e").addEventListener("click", e);
	document.getElementById("btn_log").addEventListener("click", log);
	document.getElementById("btn_sqrt").addEventListener("click", squareroot);
	document.getElementById("btn_ln").addEventListener("click", ln);





	
	document.getElementById("btn_back_calc").addEventListener("click", Back_main);
}

function dot()
{
	if (label === "") {
		label = "0"
	}
	label = label + "."
	document.getElementById("calculation").value = label;
	document.getElementById("btndot").disabled = true;
}

function zero()
{
	label = label + "0"
	document.getElementById("calculation").value = label;
}

function one()
{
	label = label + "1"
	document.getElementById("calculation").value = label;
}

function two()
{
	label = label + "2"
	document.getElementById("calculation").value = label;
}

function three()
{
	label = label + "3"
	document.getElementById("calculation").value = label;
}

function four()
{
	label = label + "4"
	document.getElementById("calculation").value = label;
}

function five()
{
	label = label + "5"
	document.getElementById("calculation").value = label;
}

function six()
{
	label = label + "6"
	document.getElementById("calculation").value = label;
}

function seven()
{
	label = label + "7"
	document.getElementById("calculation").value = label;
}

function eight()
{
	label = label + "8"
	document.getElementById("calculation").value = label;
}

function nine()
{
	label = label + "9"
	document.getElementById("calculation").value = label;
}

function equal()
{
	if (label === "")
	{
		label = "0"
	}
	if (operation != "")
	{
		num2 = label;
	}
	operations()
}

function signchanger()
{
	if (sign === "+")
	{
		label = parseFloat(label)
		num3 = label * 2
		label = label - num3
		label =  String(label)
		sign = "-"
		document.getElementById("calculation").value = label;
	} else if (sign === "-")
	{
		label = parseFloat(label)
		num3 = label * 2
		label = (label - num3)
		label =  String(label)
		sign = "-"
		document.getElementById("calculation").value = label;

	}
}

function plus()
{
	if (label === "")
	{
		label = ""
		return
	}
	if (operation != "") {
		num2 = label
		operations()
	}
	num1 = label;
	operation = "+";
	label = ""
	
}

function minus()
{
	if (label === "")
	{
		label = ""
		return
	}
	if (operation != "") {
		num2 = label
		operations()
	}
	num1 = label;
	operation = "-";
	label = ""
	document.getElementById("btndot").disabled = false;
}

function multiplication()
{
	if (label === "")
	{
		label = ""
		return
	}
	if (operation != "") {
		num2 = label
		operations()
	}
	num1 = label;
	operation = "x";
	label = ""
	document.getElementById("btndot").disabled = false;
}

function division()
{
	if (label === "")
	{
		label = ""
		return
	}
	if (operation != "") {
		num2 = label
		operations()
	}
	num1 = label;
	operation = "/";
	label = ""
	document.getElementById("btndot").disabled = false;
}

function operations()
{
	if (operation === "+")
	{
		label = parseFloat(label)
		num1 = parseFloat(num1)
		num2 = parseFloat(num2)
		label = num1 + num2
		label = String(label)
		num1 = String(num2)
		num2 = String(num2)

		document.getElementById("calculation").value = label;

	} else if (operation === "-") 
	{
		label = parseFloat(label)
		num1 = parseFloat(num1)
		num2 = parseFloat(num2)
		label = num1 - num2
		label = String(label)
		num1 = String(num2)
		num2 = String(num2)
		
		document.getElementById("calculation").value = label;
	} else if (operation === "x")
	{
		label = parseFloat(label)
		num1 = parseFloat(num1)
		num2 = parseFloat(num2)
		label = num1 * num2
		label = String(label)
		num1 = String(num2)
		num2 = String(num2)
		
		document.getElementById("calculation").value = label;
	} else if (operation === "")
	{
		document.getElementById("calculation").value = label;
	} else if (operation === "/")
	{
		label = parseFloat(label)
		num1 = parseFloat(num1)
		num2 = parseFloat(num2)
		label = num1 / num2
		label = String(label)
		num1 = String(num2)
		num2 = String(num2)
		
		document.getElementById("calculation").value = label;
	}
	operation = "";
	num1 = "";
	num2 = "";
	document.getElementById("btndot").disabled = false;

}

function Clear()
{
	num1 = "";
	num2 = "";
	operation = "";
	label = "";
	document.getElementById("calculation").value = "";
}

function CE()
{
	label = "";
	document.getElementById("calculation").value = label;
}

function abs()
{
	if (parseFloat(label) < 0)
	{
		label = parseFloat(label);
		label = label * -1;
		label = String(label);
		document.getElementById("calculation").value = label;
	}
}

function PI()
{
	label = Math.PI;
	document.getElementById("calculation").value = label;
}

function Back_main()
{
		window.location.href = "index.html";
}

function sine()
{
    label = parseFloat(label);
    label = Math.sin(label);
    label = String(label);
    document.getElementById("calculation").value = label;
}

function cosine()
{
    label = parseFloat(label);
    label = Math.cos(label); 
    label = String(label); 
    document.getElementById("calculation").value = label; 
}

function e()
{
    label = Math.E;
    document.getElementById("calculation").value = label;
}

function log()
{
    label = parseFloat(label);
    label = Math.log10(label);
    label = String(label);
    document.getElementById("calculation").value = label;
}

function squareroot()
{
    label = parseFloat(label);
    label = Math.sqrt(label);
    label = String(label);
    document.getElementById("calculation").value = label;
}

function ln()
{
    label = parseFloat(label);
    label = Math.log(label); 
    label = String(label); 
    document.getElementById("calculation").value = label; 
}