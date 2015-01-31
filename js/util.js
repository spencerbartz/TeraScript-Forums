/*************************util.js*************************
*
Javascript utility functions for portal forums
*
*************************util.js*************************/

function checkFormFields(formToCheck, errorDiv, ignoreList)
{
	console.log("blah");
	//Thanks I.E. for not allowing default values... Set it to null just so we know what the value is
	if(!ignoreList)
		ignoreList = null;
	var myForm = document.getElementById(formToCheck);
	var myDiv = document.getElementById(errorDiv);
	var msg = "";
	var elmnts = myForm.elements;
	var ignore = !ignoreList ? new Array() : ignoreList;

	console.log("ignore :" + ignore.toString());
	if(ignoreList != null)
		console.log("ignore list :" + ignoreList.toString());
	//console.log("index of middlename " + ignore.indexOf("middlename"));

	//Reset the display colors for each input name (if one or more was red, turn it white)
	for(var i = 0; i < elmnts.length; i++)
	{
		var field = document.getElementById("err" + elmnts[i].name);
		if(field)
			field.style.color = "white";
	}

	//Check to see if any textfields or textareas are blank
	for(var i = 0; i < elmnts.length; i++)
	{
		if(elmnts[i].type == "text" || elmnts[i].type == "textarea")
		{
			if(elmnts[i].value == "" && ignore.indexOf(elmnts[i].name) < 0)
			{
				msg = "Error: you must fill in the <strong>" + elmnts[i].name + "</strong> field";
				myDiv.style.display = "inline";
				myDiv.innerHTML = msg;

				var field = document.getElementById("err" + elmnts[i].name);
				field.style.color = "red";

				return false;
			}

			if(elmnts[i].name == "email")
			{
				//alert(/[_a-zA-Z0-9\.-]+?@[_a-zA-Z0-9\.-]+?\.[a-zA-Z]{2,4}$/.test(elmnts[i].value));

				//regex for checking email format
				if(/^[_a-zA-Z0-9.-]+@[_a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(elmnts[i].value) == false)
				{
					msg = "Error: Invalid email format";
					myDiv.style.display = "inline";
					myDiv.innerHTML = msg;

					var field = document.getElementById("err" + elmnts[i].name);
					field.style.color = "red";

					return false;
				}

			}

			if(elmnts[i] == "message")
			{
				//Do sanitization here!
			}
		}
	}

	return true;
}

function myalert(alertTxt)
{
	alert(alertTxt);
}

function playSound(filename)
{
	var sound = new Audio(filename);
	sound.play();
}