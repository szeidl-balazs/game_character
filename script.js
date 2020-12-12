/*window.addEventListener("load", function() */
function pageLoaded() {
	console.log("Betöltődik az oldal");

	let rootDiv = document.getElementById("root");

	

	/*a formot és a charactersheetet befoglaló konténer*/

	rootDiv.insertAdjacentHTML('afterbegin', '<div class="formAndSheetContainer"></div>');
	let formAndSheetContainer = document.querySelector(".formAndSheetContainer");
	formAndSheetContainer.insertAdjacentHTML('beforebegin', '<h1>Create Your Character</h1>');


	/*A formot befoglaló container létrehozása */	
	formAndSheetContainer.insertAdjacentHTML('afterbegin', '<div class="formContainer"></div');
		let formContainer = document.querySelector(".formContainer");
	

	/*A form létrehozása */
		formContainer.insertAdjacentHTML('afterbegin', '<form class="form"></form>');
		let form = document.querySelector(".form");
	

	/*Name input létrehozása attribútumokkal */
		form.insertAdjacentHTML('beforebegin', '<h3 id="playerInput">Select player options!</h3>');
		form.insertAdjacentHTML('afterbegin', '<div class="formNameContainer"></div>');	
		let formNameContainer = document.querySelector(".formNameContainer");

		formNameContainer.insertAdjacentHTML('afterbegin', '<input id="inputName" required autofocus></name>');
		let inputName = document.querySelector("#inputName");
		inputName.setAttribute("id", "inputName");
		inputName.setAttribute("type", "text");
		inputName.setAttribute("placeholder", "Name");

	/*select gender létrehozása option-ökkel */
		form.insertAdjacentHTML('beforeend', '<div class="formGenderContainer"></div>');
		let formGenderContainer = document.querySelector(".formGenderContainer");
		formGenderContainer.insertAdjacentHTML('afterbegin', '<select id="selectGender"></select>');
		let selectGenderVar = document.querySelector("#selectGender");
		selectGenderVar.insertAdjacentHTML('afterbegin', '<option id="blank_option" value="" disabled selected hidden>Choose gender!</option>');
		selectGenderVar.insertAdjacentHTML('afterbegin', '<option id="male" class="optionClass">male</option>');
		selectGenderVar.insertAdjacentHTML('beforeend', '<option id="female" class="optionClass">female</option>');
		let option = document.querySelectorAll(".optionClass");
		selectGenderVar.setAttribute("placeholder", "gender");

	/*select race létrehozása option-ökkel */
		form.insertAdjacentHTML('beforeend', '<div class="formRaceContainer"></div>');
		let formRaceContainer = document.querySelector(".formRaceContainer");
		formRaceContainer.insertAdjacentHTML('afterbegin', '<select id="selectRace"></select>');
		let selectRaceVar = document.querySelector("#selectRace");
		selectRaceVar.insertAdjacentHTML('afterbegin', '<option class="blankSelect" value="" disabled selected hidden>Select race!</option>');
		selectRaceVar.insertAdjacentHTML('beforeend', '<option id="aarakocra">Aarakocra</option>');
		selectRaceVar.insertAdjacentHTML('beforeend', '<option id="aasimar">Aasimar</option>');
		selectRaceVar.insertAdjacentHTML('beforeend', '<option id="centaur">Centaur</option>');
		selectRaceVar.insertAdjacentHTML('beforeend', '<option id="dragonborn">Dragonborn</option>');
		selectRaceVar.insertAdjacentHTML('beforeend', '<option id="dwarf">Dwarf</option>');

	/*select class létrehozása option-ökkel */
		form.insertAdjacentHTML('beforeend', '<div class="formClassContainer"></div>');
		let formClassContainer = document.querySelector(".formClassContainer");
		formClassContainer.insertAdjacentHTML('afterbegin', '<select id="selectClass"></select>');
		let selectClass = document.querySelector("#selectClass");
		selectClass.insertAdjacentHTML('afterbegin', '<option class="blankSelect" value="" disabled selected hidden>Select class!</option>');
		selectClass.insertAdjacentHTML('beforeend', '<option id="artificer">Artificer</option>');
		selectClass.insertAdjacentHTML('beforeend', '<option id="barbarian">Barbarian</option>');
		selectClass.insertAdjacentHTML('beforeend', '<option id="cleric">Cleric</option>');
		selectClass.insertAdjacentHTML('beforeend', '<option id="druid">Druid</option>');
		selectClass.insertAdjacentHTML('beforeend', '<option id="monk">Monk</option>');

		/*A character sheet-et befoglaló container létrehozása */	
		formContainer.insertAdjacentHTML('afterend', '<div class="characterSheetContainer"></div');
		let characterSheetContainer = document.querySelector(".characterSheetContainer");
	
	/*character name blokk létrehozása */	
		characterSheetContainer.insertAdjacentHTML('afterbegin', '<div class="characterNameContainer"></div>');
		let characterNameContainer = document.querySelector(".characterNameContainer");
		characterNameContainer.insertAdjacentHTML('beforebegin', '<h3 id="playerData">Player data</h3>');
		characterNameContainer.insertAdjacentHTML('afterbegin', '<p id="characterName"></p>');
		let characterName = document.querySelector("#characterName");

	/*character gender blokk létrehozása */
		characterSheetContainer.insertAdjacentHTML('beforeend', '<div class="characterGenderContainer"></div>');
		let characterGenderContainer = document.querySelector(".characterGenderContainer");
		characterGenderContainer.insertAdjacentHTML('afterbegin', '<p id="characterGender"></p>');
		let characterGender = document.querySelector("#characterGender");
		characterGenderContainer.insertAdjacentHTML('beforeend', '<div class="characterImageContainer"></div>');		
		let characterImageContainer = document.querySelector(".characterImageContainer");
		

	/*character race blokk létrehozása */
		characterSheetContainer.insertAdjacentHTML('beforeend', '<div class="characterRaceContainer"></div>');
		let characterRaceContainer = document.querySelector(".characterRaceContainer");
		characterRaceContainer.insertAdjacentHTML('afterbegin', '<p id="characterRace"></p>');
		let characterRace = document.querySelector("#characterRace");
		characterRaceContainer.insertAdjacentHTML('beforeend', '<div class="characterImageContainer"></div>');
		let charImgContVar = document.querySelector('.characterImageContainer');

	/*character class blokk létrehozása */
		characterSheetContainer.insertAdjacentHTML('beforeend', '<div class="characterClassContainer"></div>');
		let characterClassContainer = document.querySelector(".characterClassContainer");
		characterClassContainer.insertAdjacentHTML('afterbegin', '<p id="characterClass"></p>');
		characterClassContainer.insertAdjacentHTML('beforeend', '<div class="characterImageContainer"></div>');
		let characterClass = document.querySelector("#characterClass");

	/*ikonok és image-ek */
		
	
	
		/*name input - output kapcsolatok */	
	document.getElementById("inputName").addEventListener("change", nameOutput);
	function nameOutput() {
		console.log(inputName.value);
		characterName.innerHTML = "Name: " + inputName.value;
	}

	/*gender input - output kapcsolatok */
	document.getElementById("selectGender").addEventListener("change", selectOutput);
	function selectOutput() {
		
		if (selectGenderVar.value === "male") {
			console.log("male");
			characterGender.innerHTML = "Gender: " + selectGender.value + " " + '<img src="img/iconmonstrgender8.svg">';
						
		}

		else if (selectGenderVar.value === "female") {
			console.log("female");
			characterGender.innerHTML = "Gender: " + selectGenderVar.value + " " + '<img src="img/iconmonstrgender10.svg">';
		}
		else {
			console.log("no gender selected");
		}		
	}

	/*race input - output kapcsolatok */

	document.getElementById("selectRace").addEventListener("change", raceOutput);
	function raceOutput() {
		console.log(selectRaceVar.value);
		if (selectRaceVar.value === "Aarakocra") {
			characterRace.innerHTML = "Race: " + selectRaceVar.value;
			charImgContVar.innerHTML = '<img src="img/Aarakocra.png">';
			
		}
		
		else if(selectRaceVar.value === "Aasimar") {
			characterRace.innerHTML = "Race: " + selectRaceVar.value;
			charImgContVar.innerHTML = '<img src="img/Aasimar.png">';
		}

		else if(selectRaceVar.value === "Dragonborn") {
			characterRace.innerHTML = "Race: " + selectRaceVar.value;
			charImgContVar.innerHTML = '<img src="img/Dragonborn.png">';
		}

		else if(selectRaceVar.value === "Dwarf") {
			characterRace.innerHTML = "Race: " + selectRaceVar.value;
			charImgContVar.innerHTML = '<img src="img/Dwarf.png">';
		}

		else if(selectRaceVar.value === "Centaur") {
			characterRace.innerHTML = "Race: " + selectRaceVar.value;
			charImgContVar.innerHTML = '<img src="img/Centaur.png">';
		}

		else {
			characterRace.innerHTML = "";
		}

	}

	/*class input - output kapcsolatok */
	document.getElementById("selectClass").addEventListener("change", classOutput);
	function classOutput() {
		console.log(selectClass.value);
		characterClass.innerHTML = "Class: " + selectClass.value;
	}
	
};

window.addEventListener("load", pageLoaded);