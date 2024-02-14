window.addEventListener("load", Starter);

function Starter()
{
	///When Page Loads
	document.getElementById("div_main").style.display = "block";
	document.getElementById("div_healthcare").style.display = "none";
	document.getElementById("div_engineering").style.display = "none";
	document.getElementById("div_business").style.display = "none";
	document.getElementById("div_social").style.display = "none";
	document.getElementById("div_education").style.display = "none";
	document.getElementById("search_div").style.display = "none";
	
	///Sets Buttons - Main
	document.getElementById("btn_healthcare").addEventListener("click", healthcare);
	document.getElementById("btn_engineering").addEventListener("click", engineering);
	document.getElementById("btn_business").addEventListener("click", business);
	document.getElementById("btn_social_services").addEventListener("click", social);
	document.getElementById("btn_education").addEventListener("click", education);
	document.getElementById("btn_back_main").addEventListener("click", back_main);
	document.getElementById("btn_search_div").addEventListener("click", searchs)
	
	///They All do the same, but I need add listener for each
	document.getElementById("btn_back").addEventListener("click", back);
	document.getElementById("btn_back1").addEventListener("click", back);
	document.getElementById("btn_back2").addEventListener("click", back);
	document.getElementById("btn_back3").addEventListener("click", back);
	document.getElementById("btn_back4").addEventListener("click", back);
	document.getElementById("btn_back5").addEventListener("click", back);
	
	///Testing
	document.getElementById("btn_search").addEventListener("click", search);

}

function searchs()
{
	document.getElementById("div_main").style.display = "none";
	document.getElementById("div_healthcare").style.display = "none";
	document.getElementById("div_engineering").style.display = "none";
	document.getElementById("div_business").style.display = "none";
	document.getElementById("div_social").style.display = "none";
	document.getElementById("div_education").style.display = "none";
	document.getElementById("search_div").style.display = "block";
}

function search()
{
	search = document.getElementById("txt_search").value;
	links = "https://www.google.com/search?q=" +  search;
	window.location.href = links; 
}


///Main Page
function back_main()
{
	window.location.href = "index.html";
}

function healthcare()
{
	document.getElementById("div_main").style.display = "none";
	document.getElementById("div_healthcare").style.display = "block";
	document.getElementById("div_engineering").style.display = "none";
	document.getElementById("div_business").style.display = "none";
	document.getElementById("div_social").style.display = "none";
	document.getElementById("div_education").style.display = "none";
	document.getElementById("search_div").style.display = "none";
}

function engineering()
{
	document.getElementById("div_main").style.display = "none";
	document.getElementById("div_healthcare").style.display = "none";
	document.getElementById("div_engineering").style.display = "block";
	document.getElementById("div_business").style.display = "none";
	document.getElementById("div_social").style.display = "none";
	document.getElementById("div_education").style.display = "none";
	document.getElementById("search_div").style.display = "none";
}
	
function business()
{
	document.getElementById("div_main").style.display = "none";
	document.getElementById("div_healthcare").style.display = "none";
	document.getElementById("div_engineering").style.display = "none";
	document.getElementById("div_business").style.display = "block";
	document.getElementById("div_social").style.display = "none";
	document.getElementById("div_education").style.display = "none";
	document.getElementById("search_div").style.display = "none";
}

function social()
{
	document.getElementById("div_main").style.display = "none";
	document.getElementById("div_healthcare").style.display = "none";
	document.getElementById("div_engineering").style.display = "none";
	document.getElementById("div_business").style.display = "none";
	document.getElementById("div_social").style.display = "block";
	document.getElementById("div_education").style.display = "none";
	document.getElementById("search_div").style.display = "none";
}

function education()
{
	document.getElementById("div_main").style.display = "none";
	document.getElementById("div_healthcare").style.display = "none";
	document.getElementById("div_engineering").style.display = "none";
	document.getElementById("div_business").style.display = "none";
	document.getElementById("div_social").style.display = "none";
	document.getElementById("div_education").style.display = "block";
	document.getElementById("search_div").style.display = "none";
}

function compare()
{
	document.getElementById("div_main").style.display = "none";
	document.getElementById("div_healthcare").style.display = "none";
	document.getElementById("div_engineering").style.display = "none";
	document.getElementById("div_business").style.display = "none";
	document.getElementById("div_social").style.display = "none";
	document.getElementById("div_education").style.display = "none";
	document.getElementById("search_div").style.display = "none";
}

///Back Button (Works on all DIV)

function back()
{
	console.log("ppp");
	document.getElementById("div_main").style.display = "block";
	document.getElementById("div_healthcare").style.display = "none";
	document.getElementById("div_engineering").style.display = "none";
	document.getElementById("div_business").style.display = "none";
	document.getElementById("div_social").style.display = "none";
	document.getElementById("div_education").style.display = "none";
	document.getElementById("search_div").style.display = "none";
}	