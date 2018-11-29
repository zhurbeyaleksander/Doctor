'use strict'
function addNewPatient() {
    var sur = $$('addNewPatientForm').getValues().surAdd;
    var name = $$('addNewPatientForm').getValues().nameAdd;
    var midName = $$('addNewPatientForm').getValues().midnameAdd;
    var city = $$('addNewPatientForm').getValues().cityAdd;
    var street = $$('addNewPatientForm').getValues().streetAdd;
    var home = $$('addNewPatientForm').getValues().homeAdd;
    var flat = $$('addNewPatientForm').getValues().flatAdd;
    var phone = $$('addNewPatientForm').getValues().phoneAdd;
    var age = $$('addNewPatientForm').getValues().ageAdd;

    var url = "/CPatient/Create?sur=" +sur+"&name="+name+"&midname="+midName+"&city="+city+"&street="+street+"&home="+home+"&flat="+flat+"&tel="+phone+"&age="+age;
      webix.ajax().get(url, { filter : "123" }, function(text, xml, xhr){

        var answ = text;
        answ = JSON.parse(answ);
    });

    patients.push({id: (patients.length + 1), surname: sur, name: name,
       midName: midName, city: city,
      street: street, home: home, flat: flat, phone: phone, age: age});
    closeAllPages();
    $$('sucAddPatient').show();
}
