'use strict'

var patients = [{id: 1, surname: "Петров", name: "Иван", pat: "Петрович", city: "Саратов", street: "Московская", bild: 3, flat: 27},
{id: 2, surname: "Петров", name: "Михаил", pat: "Петрович", city: "Саратов", street: "Московская", bild: 3, flat: 27},
{id: 3, surname: "Смирнов", name: "Федор", pat: "Анатольевич", city: "Саратов", street: "Чернышевского", bild: 55, flat: 134}];

function viewMainSearch() {

this.createSearchForm = function() {
 var divBlock = document.createElement('div');
 divBlock.className = "block";
 divBlock.id = "searchForm";
 document.getElementById('wrap').appendChild(divBlock);

 var divBlockPhead = document.createElement('div');
 divBlockPhead.className = 'block_p_head';
 divBlockPhead.innerHTML = "Начните работу с поиска пациента в базе";
 divBlock.appendChild(divBlockPhead);

 var divBlocP = document.createElement('div');
 divBlocP.className = "block_p";
 divBlock.appendChild(divBlocP);


 var inputSur = document.createElement('input');
 inputSur.className = "formInput";
 inputSur.id = "Sur";
 inputSur.type = "text";
 inputSur.placeholder = "Фамилия";
 divBlocP.appendChild(inputSur);

 var inputName = document.createElement('input');
 inputName.className = "formInput";
 inputName.type = "text";
 inputName.placeholder = "Имя";
 divBlocP.appendChild(inputName);

 var inputPat = document.createElement('input');
 inputPat.className = "formInput";
 inputPat.type = "text";
 inputPat.placeholder = "Отчество";
 divBlocP.appendChild(inputPat);

 var inputPasport = document.createElement('input');
 inputPasport.className = "formInput";
 inputPasport.type = "text";
 inputPasport.placeholder = "Паспортные данные";
 divBlocP.appendChild(inputPasport);

 var br = document.createElement('br');
 divBlocP.appendChild(br);

 var searchBtn = document.createElement('input');
 searchBtn.className = "formSubmit";
 searchBtn.id = "searchBtn";
 searchBtn.type = "submit";
 searchBtn.value = "Поиск";
 divBlocP.appendChild(searchBtn);

}

this.createTableNoResult = function() {
  if(document.getElementById('searchResult'))
  {
     	var removeDiv = document.getElementById('searchResult');
      document.getElementById('wrap').removeChild(removeDiv);
  }
  var divBlock = document.createElement('div');
  divBlock.id = "searchResult";
  divBlock.className = "block";
  document.getElementById('wrap').appendChild(divBlock);

  var divBlockPhead = document.createElement('div');
  divBlockPhead.className = 'block_p_head';
  divBlockPhead.innerHTML = "Результаты поиска";
  divBlock.appendChild(divBlockPhead);

  var divNotFound = document.createElement('div');
  divNotFound.innerHTML = "Пациента нет в базе. <br/> <br/><input class='formSubmit' id='addT' type='submit' value='Добавить нового пациента'>";
  divBlock.appendChild(divNotFound);
  openAddNewPatient();
}

this.createTableSearchResult = function(patients) {
  if(document.getElementById('searchResult')) {
  	var removeDiv = document.getElementById('searchResult');
  	document.getElementById('wrap').removeChild(removeDiv);
  }
  document.getElementById('Sur').style.background = "#ffffff";
  document.getElementById('Sur').style.color = "#000000";
  var divBlock = document.createElement('div');
  divBlock.id = "searchResult";
  divBlock.className = "block";
  document.getElementById('wrap').appendChild(divBlock);

  var divBlockPhead = document.createElement('div');
  divBlockPhead.className = 'block_p_head';
  divBlockPhead.innerHTML = "Результаты поиска";
  divBlock.appendChild(divBlockPhead);

  var table = document.createElement('table');
  divBlock.appendChild(table);

  var thead = document.createElement('thead');
  table.appendChild(thead);

  var tr = document.createElement('tr');

  thead.appendChild(tr);

  var td = document.createElement('td');
  td.innerHTML = "ФИО пациента";
  tr.appendChild(td);

  var td2 = document.createElement('td');
  td2.innerHTML = "Адрес";
  tr.appendChild(td2);

  var tbody = document.createElement('tbody');
  table.appendChild(tbody);

  for(var i = 0; i < patients.length; i++){
  var trB = document.createElement('tr');
  var tdBpatient = document.createElement('td');
  var tdBadress = document.createElement('td');
  var href = document.createElement('a');
  href.setAttribute('href', '#' );
  href.innerHTML = (i +1) + '.' + patients[i].surname + '&nbsp;' + patients[i].name + '&nbsp;' + patients[i].pat;
  tdBadress.innerHTML = patients[i].city + '&nbsp;' + patients[i].street + '&nbsp;' + patients[i].bild + '&nbsp;' + patients[i].flat;

  tbody.appendChild(trB);
  trB.appendChild(tdBpatient);
  tdBpatient.appendChild(href);
  tdBpatient.appendChild(href);
  trB.appendChild(tdBadress);
  }
}
}

function controllerMainSearch() {

     this.searchBtnListener = function() {
     var surName = document.getElementById('Sur');
     if(surName.value.length == 0) {
        document.getElementById('Sur').style.background = "#ff2400";
        document.getElementById('Sur').style.color = "#ffffff";
     }
     else{
          var foundPatients = modMS.selectPatient(surName.value);
          if(foundPatients.length == 0) {
            	viewMS.createTableNoResult();
            }
          else{
          viewMS.createTableSearchResult(foundPatients);
        }
   }
   }
}

function modelMainSearch(){
      this.selectPatient = function (sur){
        var comparePatient = [];

        patients.forEach(function(item, i) {
        if(patients[i].surname == sur) comparePatient.push(patients[i]);
  });

        return comparePatient;
      }
}

function startSearch(){
   contMS.searchBtnListener();
}

var contMS = new controllerMainSearch();
var modMS = new modelMainSearch();
var viewMS = new viewMainSearch();

viewMS.createSearchForm();

function startAddNP() {
  addNPV.createAddForm();
}

document.getElementById('searchBtn').addEventListener('click', startSearch);

function openAddNewPatient(){
document.getElementById('addT').addEventListener('click', startAddNP);
}

document.getElementById('addTstart').addEventListener('click', startAddNP);

//////////////////////////////////////////////////////////////////////////////
//addNewPatient//

function addNPView() {

      this.createAddForm = function() {

      if(document.getElementById('searchForm')){
      var removeSF = document.getElementById('searchForm');
      document.getElementById('wrap').removeChild(removeSF);
    }

      if(document.getElementById('searchResult')){
      var removeSR = document.getElementById('searchResult');
      document.getElementById('wrap').removeChild(removeSR);
    }

      var divBlock = document.createElement('div');
      divBlock.className = "block";
      divBlock.id = "addPatient";
      document.getElementById('wrap').appendChild(divBlock);

      var divBlockPhead = document.createElement('div');
      divBlockPhead.className = 'block_p_head';
      divBlockPhead.innerHTML = "Добавление нового пациента в базу";
      divBlock.appendChild(divBlockPhead);

      var divBlocP = document.createElement('div');
      divBlocP.className = "block_p";
      divBlock.appendChild(divBlocP);


      var inputSur = document.createElement('input');
      inputSur.className = "formInput";
      inputSur.id = "Sur";
      inputSur.type = "text";
      inputSur.placeholder = "Фамилия";
      divBlocP.appendChild(inputSur);

      var inputName = document.createElement('input');
      inputName.className = "formInput";
      inputName.id = "Name";
      inputName.type = "text";
      inputName.placeholder = "Имя";
      divBlocP.appendChild(inputName);

      var inputPat = document.createElement('input');
      inputPat.className = "formInput";
      inputPat.type = "text";
      inputPat.id = "Pat";
      inputPat.placeholder = "Отчество";
      divBlocP.appendChild(inputPat);

      var address = document.createElement('p');
      address.innerHTML = "Адрес:";
      divBlocP.appendChild(address);

      var inputCity = document.createElement('input');
      inputCity.className = "formInput";
      inputCity.type = "text";
      inputCity.id = "City";
      inputCity.placeholder = "Город";
      divBlocP.appendChild(inputCity);

      var inputStr = document.createElement('input');
      inputStr.className = "formInput";
      inputStr.type = "text";
      inputStr.id = "Str";
      inputStr.placeholder = "Улица";
      divBlocP.appendChild(inputStr);

      var inputBil = document.createElement('input');
      inputBil.className = "formInput";
      inputBil.type = "text";
      inputBil.id = "Bil";
      inputBil.placeholder = "Дом";
      divBlocP.appendChild(inputBil);

      var inputFl = document.createElement('input');
      inputFl.className = "formInput";
      inputFl.type = "text";
      inputFl.id = "Fl";
      inputFl.placeholder = "Квартира";
      divBlocP.appendChild(inputFl);

      var inputTel = document.createElement('input');
      inputTel.className = "formInput";
      inputTel.type = "text";
      inputTel.id = "Tel";
      inputTel.placeholder = "Телефон";
      divBlocP.appendChild(inputTel);

      var br = document.createElement('br');
      divBlocP.appendChild(br);

      var addPBtn = document.createElement('input');
      addPBtn.className = "formSubmit";
      addPBtn.id = "addPBtn";
      addPBtn.type = "submit";
      addPBtn.value = "Добавить";
      divBlocP.appendChild(addPBtn);

      addEvent();
      }

      this.createSucResult = function() {
        var removeAF = document.getElementById('addPatient');
        document.getElementById('wrap').removeChild(removeAF);

        var divBlock = document.createElement('div');
        divBlock.id = "sucAdd";
        divBlock.className = "block";
        document.getElementById('wrap').appendChild(divBlock);

        var divBlockPhead = document.createElement('div');
        divBlockPhead.className = 'block_p_head';
        divBlockPhead.innerHTML = "Результат добавления";
        divBlock.appendChild(divBlockPhead);

        var divNotFound = document.createElement('div');
        divNotFound.innerHTML = "Новый пациент успещно добавлен в базу <br/> <br/><input class='formSubmit' id='goHome' type='submit' value='На главную'>";
        divBlock.appendChild(divNotFound);

        goHome();
      }
}

function addNPController() {
    this.addBtnListener = function(surname, name, pat, city, street, bild, flat, tel) {
        var ans = addNPModel.addPatient(surname, name, pat, city, street, bild, flat, tel);
        if(ans == 1) {
            addNPV.createSucResult();
        }
    }
}

function addNPModel() {
  this.addPatient = function(surname, name, pat, city, street, bild, flat, tel){
    patients.push({id: (patients.length + 1), surname: surname, name: name, pat: pat, city: city, street: street, bild: bild, flat: flat, tel: tel });
    return 1;
  }
}

function runAdd() {
  var sur = document.getElementById('Sur').value;
  var name = document.getElementById('Name').value;
  var pat = document.getElementById('Pat').value;
  var city = document.getElementById('City').value;
  var street = document.getElementById('Str').value;
  var bil = document.getElementById('Bil').value;
  var fl = document.getElementById('Fl').value;
  var tel = document.getElementById('Tel').value;
  addNPCont.addBtnListener(sur, name, pat, city, street, bil, fl, tel);
}

function addEvent() {
  document.getElementById('addPBtn').addEventListener('click', runAdd);
}

function goHome() {
    document.getElementById('goHome').addEventListener('click', createNewSearchForm);
}

function createNewSearchForm(){
  var remSA = document.getElementById('sucAdd');
  document.getElementById('wrap').removeChild(remSA);

  viewMS.createSearchForm();
  document.getElementById('searchBtn').addEventListener('click', startSearch);
}

var addNPV = new addNPView();
var addNPCont = new addNPController();
var addNPModel = new addNPModel();
