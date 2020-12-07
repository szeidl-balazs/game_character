/*window.addEventListener("load", function() */
function pageLoaded() {
	console.log("Betöltődik az oldal");

	let rootDiv = document.getElementById("root");

	/*A formot befoglaló container létrehozása */
	
	rootDiv.insertAdjacentHTML('beforeend', '<div class="formContainer"></div');
	let formContainer = document.querySelector(".formContainer");

	/*A form létrehozása */

	formContainer.insertAdjacentHTML('afterbegin', '<form class="form"></form>');
	let form = document.querySelector(".form");

	/*Name input létrehozása attribútumokkal */

	form.insertAdjacentHTML('afterbegin', '<div class="formNameContainer"></div>');
	let formNameContainer = document.querySelector(".formNameContainer");

	formNameContainer.insertAdjacentHTML('afterbegin', '<input class="inputName" required autofocus></name>');
	let inputName = document.querySelector(".inputName");
	inputName.setAttribute("id", "inputName");
	inputName.setAttribute("type", "text");
	inputName.setAttribute("placeholder", "Name");

	/*select gender létrehozása option-ökkel */
	form.insertAdjacentHTML('beforeend', '<div class="formGenderContainer"></div>');
	let formGenderContainer = document.querySelector(".formGenderContainer");
	formGenderContainer.insertAdjacentHTML('afterbegin', '<select class="selectGender"></select>');
	let selectGender = document.querySelector(".selectGender");
	selectGender.insertAdjacentHTML('afterbegin', '<option id="male" value="" disabled selected hidden>Choose gender!</option>');
	selectGender.insertAdjacentHTML('afterbegin', '<option id="male">male</option>');
	selectGender.insertAdjacentHTML('beforeend', '<option id="female">female</option>');
	selectGender.setAttribute("placeholder", "gender");

	/*select race létrehozása option-ökkel */
	form.insertAdjacentHTML('beforeend', '<div class="formRaceContainer"></div>');
	let formRaceContainer = document.querySelector(".formRaceContainer");
	formRaceContainer.insertAdjacentHTML('afterbegin', '<select class="selectRace"></select>');
	let selectRace = document.querySelector(".selectRace");
	selectRace.insertAdjacentHTML('afterbegin', '<option id="aarakocra" value="" disabled selected hidden>Select race!</option>');
	selectRace.insertAdjacentHTML('beforeend', '<option id="aarakocra">Aarakocra</option>');
	selectRace.insertAdjacentHTML('beforeend', '<option id="aasimar">Aasimar</option>');
	selectRace.insertAdjacentHTML('beforeend', '<option id="centaur">Centaur</option>');
	selectRace.insertAdjacentHTML('beforeend', '<option id="dragonborn">Dragonborn</option>');
	selectRace.insertAdjacentHTML('beforeend', '<option id="dwarf">Dwarf</option>');

	/*select class létrehozása option-ökkel */
	form.insertAdjacentHTML('beforeend', '<div class="formClassContainer"></div>');
	let formClassContainer = document.querySelector(".formClassContainer");
	formClassContainer.insertAdjacentHTML('afterbegin', '<select class="selectClass"></select>');
	let selectClass = document.querySelector(".selectClass");
	selectClass.insertAdjacentHTML('afterbegin', '<option id="artificer" value="" disabled selected hidden>Select class!</option>');
	selectClass.insertAdjacentHTML('beforeend', '<option id="artificer">Artificer</option>');
	selectClass.insertAdjacentHTML('beforeend', '<option id="barbarian">Barbarian</option>');
	selectClass.insertAdjacentHTML('beforeend', '<option id="cleric">Cleric</option>');
	selectClass.insertAdjacentHTML('beforeend', '<option id="druid">Druid</option>');
	selectClass.insertAdjacentHTML('beforeend', '<option id="monk">Monk</option>');

		
		
		
};

window.addEventListener("load", pageLoaded);