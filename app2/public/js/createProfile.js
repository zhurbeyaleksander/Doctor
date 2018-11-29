'use strict'
function createProfile(surname, name, midname, city, street, home, flat, phone, age) {
  $$("patientProfile").setHTML("<b>" + surname + " " + name + " " + midname +
  "</b><br/> <i>Адрес:</i> " + city + " ул. " + street + " дом " + home + " кв. " + flat +
  " Телефон: " + phone + "  Возраст:  " + age);

}

function showCase() {
  $$("patientCases").attachEvent("onAfterSelect", function(id){
  var objCase = $$("patientCases").getItem(id);
  $$("case+").clearAll();
  $$("case+").add({text: objCase.text});
  $$("case").show();
  });
}
