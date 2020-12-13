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
		let formNameContainerVar = document.querySelector(".formNameContainer");

		formNameContainerVar.insertAdjacentHTML('afterbegin', '<input id="inputName" required autofocus></name>');
		let inputNameVar = document.querySelector("#inputName");
		inputNameVar.setAttribute("id", "inputName");
		inputNameVar.setAttribute("type", "text");
		inputNameVar.setAttribute("placeholder", "Name");

	/*select gender létrehozása option-ökkel */
		form.insertAdjacentHTML('beforeend', '<div class="formGenderContainer"></div>');
		let formGenderContainerVar = document.querySelector(".formGenderContainer");
		formGenderContainerVar.insertAdjacentHTML('afterbegin', '<select id="selectGender"></select>');
		let selectGenderVar = document.querySelector("#selectGender");
		selectGenderVar.insertAdjacentHTML('afterbegin', '<option id="blank_option" value="" disabled selected hidden>Choose gender!</option>');
		selectGenderVar.insertAdjacentHTML('afterbegin', '<option id="male" class="optionClass">male</option>');
		selectGenderVar.insertAdjacentHTML('beforeend', '<option id="female" class="optionClass">female</option>');
		let option = document.querySelectorAll(".optionClass");
		selectGenderVar.setAttribute("placeholder", "gender");

	/*select race létrehozása option-ökkel */
		form.insertAdjacentHTML('beforeend', '<div class="formRaceContainer"></div>');
		let formRaceContainerVar = document.querySelector(".formRaceContainer");
		formRaceContainerVar.insertAdjacentHTML('afterbegin', '<select id="selectRace"></select>');
		let selectRaceVar = document.querySelector("#selectRace");
		selectRaceVar.insertAdjacentHTML('afterbegin', '<option class="blankSelect" value="" disabled selected hidden>Select race!</option>');
		selectRaceVar.insertAdjacentHTML('afterbegin', '<option class="blankSelect" value=""></option>');
		selectRaceVar.insertAdjacentHTML('beforeend', '<option id="aarakocra">Aarakocra</option>');
		selectRaceVar.insertAdjacentHTML('beforeend', '<option id="aasimar">Aasimar</option>');
		selectRaceVar.insertAdjacentHTML('beforeend', '<option id="centaur">Centaur</option>');
		selectRaceVar.insertAdjacentHTML('beforeend', '<option id="dragonborn">Dragonborn</option>');
		selectRaceVar.insertAdjacentHTML('beforeend', '<option id="dwarf">Dwarf</option>');

	/*select class létrehozása option-ökkel */
		form.insertAdjacentHTML('beforeend', '<div class="formClassContainer"></div>');
		let formClassContainer = document.querySelector(".formClassContainer");
		formClassContainer.insertAdjacentHTML('afterbegin', '<select id="selectClass"></select>');
		let selectClassVar = document.querySelector("#selectClass");
		selectClassVar.insertAdjacentHTML('afterbegin', '<option class="blankSelect" value="" disabled selected hidden>Select class!</option>');
		selectClassVar.insertAdjacentHTML('beforeend', '<option id="artificer">Artificer</option>');
		selectClassVar.insertAdjacentHTML('beforeend', '<option id="barbarian">Barbarian</option>');
		selectClassVar.insertAdjacentHTML('beforeend', '<option id="cleric">Cleric</option>');
		selectClassVar.insertAdjacentHTML('beforeend', '<option id="druid">Druid</option>');
		selectClassVar.insertAdjacentHTML('beforeend', '<option id="monk">Monk</option>');

		/*A character sheet-et befoglaló container létrehozása */	
		formContainer.insertAdjacentHTML('afterend', '<div class="characterSheetContainer"></div');
		let characterSheetContainerVar = document.querySelector(".characterSheetContainer");
	
	/*character name blokk létrehozása */	
		characterSheetContainerVar.insertAdjacentHTML('afterbegin', '<div class="characterNameContainer"></div>');
		let characterNameContainer = document.querySelector(".characterNameContainer");
		characterNameContainer.insertAdjacentHTML('beforebegin', '<h3 id="playerData">Player data</h3>');
		characterNameContainer.insertAdjacentHTML('afterbegin', '<p id="characterName"></p>');
		let characterName = document.querySelector("#characterName");

	/*character gender blokk létrehozása */
		characterSheetContainerVar.insertAdjacentHTML('beforeend', '<div class="characterGenderContainer"></div>');
		let characterGenderContainerVar = document.querySelector(".characterGenderContainer");
		characterGenderContainerVar.insertAdjacentHTML('afterbegin', '<p id="characterGender"></p>');
		let characterGender = document.querySelector("#characterGender");
		
		

	/*character race blokk létrehozása */
		characterGenderContainerVar.insertAdjacentHTML('afterend', '<div class="characterRaceContainer"></div>');
		let characterRaceContainerVar = document.querySelector(".characterRaceContainer");
		characterRaceContainerVar.insertAdjacentHTML('afterbegin', '<p id="characterRace"></p>');
		let characterRaceVar = document.querySelector("#characterRace");
		characterRaceContainerVar.insertAdjacentHTML('beforeend', '<div class="charRaceImgCont"></div>');
		let charRaceImgContVar = document.querySelector(".charRaceImgCont");

	/*character class blokk létrehozása */
		characterSheetContainerVar.insertAdjacentHTML('beforeend', '<div class="characterClassContainer"></div>');
		let charClassContVar = document.querySelector(".characterClassContainer");
		charClassContVar.insertAdjacentHTML('afterbegin', '<p id="characterClass"></p>');
		let charClassVar = document.querySelector("#characterClass");
		charClassContVar.insertAdjacentHTML('beforeend', '<div class="charClassImgCont"></div>');
		let charClassImgContVar = document.querySelector(".charClassImgCont");
	

	
	
	
		/*name input - output kapcsolatok */	
	document.getElementById("inputName").addEventListener("change", nameOutput);
	function nameOutput() {
		console.log(inputNameVar.value);
		characterName.innerHTML = "Name: " + inputNameVar.value;
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
			console.log("No gender selected!");
		}		
	}

	/*race input - output kapcsolatok */

	document.getElementById("selectRace").addEventListener("change", raceOutput);
	function raceOutput() {
		console.log(selectRaceVar.value);
		 		
		if (selectRaceVar.value === "Aarakocra") {
			characterRaceVar.innerHTML = "Race: " + selectRaceVar.value;
			charRaceImgContVar.innerHTML = '<img src="img/Aarakocra.png">';
			
		}
		
		else if(selectRaceVar.value === "Aasimar") {
			characterRaceVar.innerHTML = "Race: " + selectRaceVar.value;
			charRaceImgContVar.innerHTML = '<img src="img/Aasimar.png">';
		}

		else if(selectRaceVar.value === "Dragonborn") {
			characterRaceVar.innerHTML = "Race: " + selectRaceVar.value;
			charRaceImgContVar.innerHTML = '<img src="img/Dragonborn.png">';
		}

		else if(selectRaceVar.value === "Dwarf") {
			characterRaceVar.innerHTML = "Race: " + selectRaceVar.value;
			charRaceImgContVar.innerHTML = '<img src="img/Dwarf.png">';
		}

		else if(selectRaceVar.value === "Centaur") {
			characterRaceVar.innerHTML = "Race: " + selectRaceVar.value;
			charRaceImgContVar.innerHTML = '<img src="img/Centaur.png">';
		}

		else {
			characterRaceVar.innerHTML = "No race selected!";
		}

	}

	/*class input - output kapcsolatok */
	document.getElementById("selectClass").addEventListener("change", classOutput);
	function classOutput() {
		console.log(selectClassVar.value);
		
		if (selectClassVar.value === 'Artificer') {
			charClassVar.innerHTML = "Class: " + selectClassVar.value;
			charClassImgContVar.innerHTML = '<img src="img/artificer.png">';
		}

		else if (selectClassVar.value === 'Barbarian') {
			charClassVar.innerHTML = "Class: " + selectClassVar.value;
			charClassImgContVar.innerHTML = '<img src="img/barbarian.png">';
		}

		else if (selectClassVar.value === 'Cleric') {
			charClassVar.innerHTML = "Class: " + selectClassVar.value;
			charClassImgContVar.innerHTML = '<img src="img/cleric2.png">';
		}

		else if (selectClassVar.value === 'Druid') {
			charClassVar.innerHTML = "Class: " + selectClassVar.value;
			charClassImgContVar.innerHTML = '<img src="img/druid2.png">';
		}

		else if (selectClassVar.value === 'Monk') {
			charClassVar.innerHTML = "Class: " + selectClassVar.value;
			charClassImgContVar.innerHTML = '<img src="img/monk2.png">';
		}

		else {
			charClassVar.innerHTML = "No class selected! ";
			charClassImgContVar.innerHTML = "";
		}
		
	}
	
};

window.addEventListener("load", pageLoaded);