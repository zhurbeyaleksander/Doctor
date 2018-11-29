'use strict'
function openPage(page) {
  switch(page) {
    case 'main':
       closeAllPages();
       $$('mainPageStartText').show();
       $$('searchForm').show();

    break;
    case 'addNewPatient':
      closeAllPages();
      $$("addNewPatient").show();
      $$("addNewPatientForm").show();
    break;
    case 'doctors':
    closeAllPages();
    $$("doctors").show();
    break;
    case 'appo':
    closeAllPages();
    $$("formsApo1").show();
    $$("formsApo2").show();
    break;
  }
}

function closeAllPages(){
  $$("mainPageStartText").hide();
  $$("searchForm").hide();
  $$("searchResult").hide();

  $$("searchFormApo").hide();
  $$("searchResultApo").hide();
  $$("searchFormApoDoc").hide();
  $$("formsApo1").hide();
  $$("formsApo2").hide();

  $$('addNewPatient').hide();
  $$('addNewPatientForm').hide();
  $$('sucAddPatient').hide();

  $$('patientProfile').hide();
  $$('patientCases').hide();

  $$('doctors').hide();
  $$('docProf').hide();

  $$('addCase').hide();

  $$('sucAddCase').hide();
}
