'use strict'
function showSearchResultApo() {
    var sur = $$('searchFormApo2').getValues().sur;
    $$("searchResultApo").clearAll();

     var url = "/CPatient/Read?sur=" +sur;
      webix.ajax().get(url, { filter : "123" }, function(text, xml, xhr){

        var answ = text;

        answ = JSON.parse(answ);

for(var i = 0; i < answ.length; i++){
        $$("searchResultApo").add({id: answ[i].Id, surname: answ[i].Surname, name: answ[i].Name,
          midName: answ[i].Midname, city: answ[i].City, street: answ[i].Streer, home: answ[i].Home,
        flat: answ[i].Flat, phone: answ[i].Phone, age: answ[i].Age
        });
      }

          });

      $$("searchResultApo").show();
}


function eventSearchResultApo(){
$$("searchResultApo").attachEvent("onAfterSelect", function(id){

  $$("addApo").setValues({
     surP: $$("searchResultApo").getItem(id).surname,
     nameP: $$("searchResultApo").getItem(id).name,
     idP: $$("searchResultApo").getItem(id).id,

   });

});

}

function eventSearchResultApoDoc(){
$$("doctors2").attachEvent("onAfterSelect", function(id){
var surP = $$("addApo").getValues().surP;
var nameP = $$("addApo").getValues().nameP;
var idP = $$("addApo").getValues().idP;


  $$("addApo").setValues({
     surD: $$("doctors2").getItem(id).docSur,
     nameD: $$("doctors2").getItem(id).docName,
     idD: $$("doctors2").getItem(id).id,
     surP: surP,
     nameP: nameP,
     idP: idP
   });

});

}
