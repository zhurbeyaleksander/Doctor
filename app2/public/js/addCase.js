'use strict'
function addCase() {
    var sur = $$('addCase').getValues().surCase;
    var name = $$('addCase').getValues().nameCase;
    var id = $$('addCase').getValues().idCase;
    var textCase = $$('addCase').getValues().textCase;

    var url = "/CMedHistory/Create?surname="+sur+"&name="+name+"&pid="+id+"&text="+textCase;
      webix.ajax().get(url, { filter : "123" }, function(text, xml, xhr){

        });

    cases.push({id: (cases.length), surname: sur, name: name, pId: id, text: textCase});
    closeAllPages();
    $$('sucAddCase').show();
}


function putValueInForm(){

  $$("docProf").attachEvent("onAfterSelect", function(id){
  closeAllPages();
  $$("addCase").setValues({
          surCase: $$("docProf").getItem(id).patientSur,
          nameCase: $$("docProf").getItem(id).patientName,
          idCase: $$("docProf").getItem(id).patientId
      });
  $$("addCase").show();

  });

}
