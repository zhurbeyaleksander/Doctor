'use strict'

function todayAppoitments(){
$$("doctors").attachEvent("onAfterSelect", function(id){

$$("docProf").clearAll();

var url = "/CAppoitment/Read?idD=" +id;
    webix.ajax().get(url, { filter : "123" }, function(text, xml, xhr){

      var answ = text;

      answ = JSON.parse(answ);
      var today = new Date;

      for(var i = 0; i < answ.length; i++){
      var compDate = answ[i].Date.split('-');
      if( today.getDate() == compDate[2]
      && today.getMonth() == compDate[1]
      && today.getFullYear() == compDate[0] ){
        $$("docProf").add({id: answ[i].Id, patientSur: answ[i].SurP, patientName: answ[i].NameP, patientId: answ[i].IdP});
      }

      }
      });

//$$("docProf").clearAll();
//appoitments.forEach(function(item, i){

//var today = new Date;
//if(id == item.toDocid && today.getDate() == item.dateA.getDate()
//&& today.getMonth() == item.dateA.getMonth()
//&& today.getFullYear() == item.dateA.getFullYear() ){
//$$("docProf").add({id: i, patientSur: item.patientSur, patientName: item.patientName, patientId: item.pId});
//}
//});
closeAllPages();
$$("docProf").show();
});
}
