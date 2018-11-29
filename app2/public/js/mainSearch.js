'use strict'
function showSearchResult() {
    var sur = $$('searchForm').getValues().sur;
    $$("searchResult").clearAll();

    var url = "/CPatient/Read?sur=" +sur;
      webix.ajax().get(url, { filter : "123" }, function(text, xml, xhr){

        var answ = text;

        answ = JSON.parse(answ);

for(var i = 0; i < answ.length; i++){
        $$("searchResult").add({id: answ[i].Id, surname: answ[i].Surname, name: answ[i].Name,
          midName: answ[i].Midname, city: answ[i].City, street: answ[i].Streer, home: answ[i].Home,
        flat: answ[i].Flat, phone: answ[i].Tel, age: answ[i].Age
        });
      }

    });

      $$("searchResult").show();

}


function eventSearchResult(){
$$("searchResult").attachEvent("onAfterSelect", function(id){

closeAllPages();
$$("patientProfile").show();
$$("patientCases").clearAll();
var item = $$("searchResult").getItem(id);

var url = "/CMedHistory/Read?pid=" +id;

  webix.ajax().get(url, { filter : "123" }, function(text, xml, xhr){

    var answ = text;

    answ = JSON.parse(answ);
    for(var i =0; i < answ.length; i++) {
$$("patientCases").add({id: answ[i].Id, surname: answ[i].Surname, name: answ[i].Name, idCase: answ[i].Id, text: answ[i].Text});
}
    }
  );



$$("patientCases").show();
createProfile(item.surname, item.name, item.midName, item.city, item.street,
item.home, item.flat, item.phone, item.age);
});

}
