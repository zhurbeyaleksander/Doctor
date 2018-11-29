'use strict'
function showSearchResultApo() {
    var sur = $$('searchFormApo').getValues().sur;
    $$("searchResultApo").clearAll();
    patients.forEach(function(item, i){
      if(sur.toLowerCase() == item.surname.toLowerCase()){
        $$("searchResultApo").add({id: i, surname: item.surname, name: item.name,
          midName: item.midName, city: item.city, street: item.street, home: item.home,
        flat: item.flat, phone: item.phone, age: item.age
        });
      }
    });
      $$("searchResultApo").show();
}

function showSearchResultApoDoc2(id, surname, name, spec) {
    var sur = $$('searchFormApo3').getValues().sur;
    $$("doctors2").clearAll();


        $$("doctors2").add({id: id, docSur: surname, docName: name,
          sd: spec
        });

}

function addNewAppoitment() {
    var surP = $$('addApo').getValues().surP;
    var nameP = $$('addApo').getValues().nameP;
    var idP = $$('addApo').getValues().idP;
    var idD = $$('addApo').getValues().idD;
    var dateApo = $$('addApo').getValues().dateA;
    var newDate = dateApo.getFullYear() + "-" + dateApo.getMonth() + "-" + dateApo.getDate();

      var url = "/CAppoitment/Create?surnameP=" +surP+"&nameP="+nameP+"&idP="+idP+"&idD="+idD+"&date="+newDate;
        webix.ajax().get(url, { filter : "123" }, function(text, xml, xhr){

          var answ = text;

          answ = JSON.parse(answ);


      });


  //  appoitments.push({id: (appoitments.length - 1), patientSur: surP,
    //  patientName: nameP, toDocid: idD, pId: idP, dateA: dateApo});

    closeAllPages();

}
