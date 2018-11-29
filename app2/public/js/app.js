'use strict'

var patients =[];

var doctors = [
  {id: 1, docSur: "Алексеев", docName: "Иван", sd: "Терапевт"},
  {id: 2, docSur: "Иноземцев", docName: "Иван", sd: "ЛОР"},
  {id: 3, docSur: "Ульянов", docName: "Илья", sd: "ЛОР"}
];

var doctorsNew = [];

var appoitments = [];

var todayAppoitments = [];

var fp = [];

var fd = [];

var cases = [{id: 1, surname: "Смирнов", name: "Алексей", pId: 3, text: "Осмотр выявил, что этот человек болен. Его нужно лечить!"},
{id: 2, surname: "Смирнов", name: "Алексей", pId: 3, text: "Еще не вылечили"},
{id: 3, surname: "Смирнов", name: "Алексей", pId: 2, text: "Лечим!"}];

var patientCases = [];

var curCase = [{text: "Нет"}];

function app(){
createStartPage();
$$('myToolbar').hide();
closeAllPages();

}

function openIndex() {
  $$('myToolbar').show();
  openPage('main');
}

function createStartPage() {

 var mainPage = webix.ui({
  width: 1500,
  rows: [
    {
    view:"toolbar",
    id:"myToolbar",
    cols:[
        { view:"button", id:"index", value:"Главная", width:100, click: "openPage('main')"},
        { view:"button", value:"Добавить пациента", width:200,
        click: "openPage('addNewPatient')"},
        { view:"button", value:"Запись на приём", width:150,
        click: "openPage('appo')"},
        { view:"button", value:"Врачи", width:100, click: allDocs}
    ]},
      {view:"form",
    id: "searchFormApo",
    elements:[
        { view:"text", name: "sur", placeholder: "Введите фамилию пациента", label:"Фамилия",
        width:400 },
        {cols:[
            { view:"button", value:"Поиск", type:"form", width: 100, click: "showSearchResultApo" }
        ]}
    ]},
    {view:"form",
  id: "searchFormApoDoc",
  elements:[
      { view:"text", name: "sur", placeholder: "Введите фамилию доктора", label:"Фамилия",
      width:400 },
      {cols:[
          { view:"button", value:"Поиск", type:"form", width: 100, click: "showSearchResultApoDoc" }
      ]}
  ]}, {
    id: "formsApo1",
    cols:[
        { view:"form",
      id: "searchFormApo2",
      elements:[
          { view:"text", name: "sur", placeholder: "Введите фамилию пациента", label:"Фамилия",
          width:400 },
          {cols:[
              { view:"button", value:"Поиск", type:"form", width: 100, click: findPatientApo }
          ]}
      ]},
        { view:"form",
        id: "searchFormApo3",
        elements:[
          { view:"text", name: "sur", placeholder: "Введите фамилию доктора", label:"Фамилия",
          width:400 },
          {cols:[
              { view:"button", value:"Поиск", type:"form", width: 100, click: findPatientApoDo }
          ]}
        ]},
        {
  view:"form", id: "addApo", scroll:false, width:320, elements:[
    { view:"text", label:"Фамилия пациента", name:"surP"},
    { view:"text", label:"Имя Пациента", name:"nameP"},
    { view:"text", label:"id Пациента", name:"idP"},
    { view:"text", label:"Фамилия Доктора", name:"surD"},
    { view:"text", label:"Имя Доктора", name:"nameD"},
    { view:"text", label:"id Доктора", name:"idD"},
    { view:"datepicker", label:"Дата приёма", name:"dateA" },
    { view:"button", type:"form", value:"Записать", click:function(){
      webix.message("<pre>Запись на приём успешно добавлена!</pre>");
      addNewAppoitment();
    }}
  ]
}
    ]
  },
  {
    id: "formsApo2",
    cols:[
        {   view:"list",
       width:550,
       height:200,
       autoheight:true,
         id: "searchResultApo",
       template:"#id# #surname#   #name#  #midName#   #city#  #street# #home#",
       select:true,
       data:fp},
        {
         id: "doctors2",
         view:"list",
       width:550,
       height:200,
       autoheight:true,
       template:"#id# #docSur#   #docName#  |  #sd#",
       select:true,
       data:fd
        }
    ]
  },
    {template: "Начните работу с поиска пациента в базе", height: 30, id: "mainPageStartText"},
    {view:"form",
    id: "searchForm",
    elements:[
        { view:"text", name: "sur", placeholder: "Введите фамилию пациента", label:"Фамилия",
        width:400 },
        {cols:[
            { view:"button", value:"Поиск", type:"form", width: 100, click: showSearchResult }
        ]}
    ]},
    {
      view:"list",
   width:250,
   height:200,
   autoheight:true,
     id: "searchResult",
   template:"#surname#   #name#  #midName#  <b>Адрес</b>  #city#  #street# #home#  <b>Квартира</b> #flat#",
   select:true,
   data:fp
 }, {
   height: 30,
   template: "Чтобы добавить нового пациента, заполните форму ниже",
   id: "addNewPatient"
 },
 {view:"form",
 id: "addNewPatientForm",
 elements:[
     { view:"text", name: "surAdd", placeholder: "Введите фамилию пациента", label:"Фамилия",
      width:400 },
     { view:"text", name: "nameAdd", placeholder: "Введите имя пациента", label:"Имя",
      width:400 },
    { view:"text", name: "midnameAdd", placeholder: "Введите отчество пациента", label:"Отчество",
       width:400 },
     { view:"text", name: "cityAdd", placeholder: "Введите город проживания пациента",
      label:"Город", width:400 },
      { view:"text", name: "streetAdd", placeholder: "Введите улицу проживания",
       label:"Улица",
       width:400 }, { view:"text", name: "homeAdd", placeholder: "Введите номер дома",
          label:"№ Дома",
          width:400 },  { view:"text", name: "flatAdd", placeholder: "Введите номер квартиры",
             label:"Квартира",
             width:400 },
         { view:"text", name: "phoneAdd", placeholder: "Введите телефон",
               label:"Телефон",
               width:400 },
         { view:"text", name: "ageAdd", placeholder: "Укажите возраст",
                     label:"Возраст",
                     width:400 },
     {cols:[
         { view:"button", value:"Добавить пациента", type:"form", width: 200,
         click: addNewPatient }
     ]}
 ]}, {
   template: "Новый пациент успешно добавлен в базу",
   id: "sucAddPatient"
 }, {
   template: "Страница пациента",
   height: 100,
   id: "patientProfile"
 }, {
  id: "doctors",
  view:"list",
width:200,
height:200,
autoheight:true,
template:"#docSur#   #docName#  |  #sd#",
select:true,
data:doctorsNew
}, {
  id: "docProf",
  view:"list",
width:200,
height:200,
autoheight:true,
template: "#patientSur#   #patientName# | id пациента #patientId#",
select:true,
data:todayAppoitments
}, {
  view:"form",
id: "addCase",
elements:[
    { view:"text", name: "surCase", label:"Фамилия пациента", width:400 },
    { view:"text", name: "nameCase", label:"Имя пациентв", width:400 },
    { view:"text", name: "idCase", label:"Id Пациента", width:400 },
    { view:"textarea", height: 200, name: "textCase", label:"Текст записи в амбулаторную карту",
     width:400 },
    {cols:[
        { view:"button", value:"Добавить запись", type:"form", width: 200, click: "addCase" }
    ]}
]}, {
  id: "sucAddCase",
  template: "Запись успешно добавлена в амбулаторную карту"
},{
  id: "patientCases",
  view:"list",
width:200,
height:200,
autoheight:true,
template:"#surname#  #name# | Номер записи #idCase#",
select:true,
data:patientCases
}, {
  view:"form", scroll:false,
  width:300,
  borderless:true,
  id: "loginForm",
  elements:[
    { view:"fieldset", label:"Форма входа в систему", body:{
      rows:[
          { view:"text", name: "login", label:"Логин"},
          { view:"text", type: "password", name: "password",  label:"Пароль"}
      ]
    }},
    { margin:5, cols:[
        { view:"button", label:"Login" , type:"form", click: loginForm },
        { view:"button", label:"Cancel" }
    ]}
]
}
  ]
});

var win = webix.ui({
  view:"window",
	left:450,
  top:50,
  move:true,
  id: "case",
  head:{
         view:"toolbar", cols:[
           {view:"label", label: "Запись в амбулаторной карте больного" },
           { view:"button", label: 'Закрыть', width: 100, align: 'right',
           click:"$$('case').hide();"}
           ]
       },
  body:{
    view:"list",
    id:"case+",
  width:1000,
  height:400,
  template:"#text#",
  select:true,
  data:curCase
  }
}).hide();

function findPatient() {

  var sur = $$('searchForm').getValues().sur;

  var url = "/CPatient/Read?sur=" +sur;
    webix.ajax().get(url, { filter : "123" }, function(text, xml, xhr){

      var a = text;

      a = JSON.parse(a);
showSearchResult(a.Id, a.Surname, a.Name, a.Midname, a.City, a.Streer, a.Home, a.Flat, a.Tel, a.Age);

  });
}

function findPatientApo() {

  var sur = $$('searchFormApo2').getValues().sur;

  var url = "/CPatient/Read?sur=" +sur;
    webix.ajax().get(url, { filter : "123" }, function(text, xml, xhr){

      var a = text;

      a = JSON.parse(a);
showSearchResultApo(a.Id, a.Surname, a.Name, a.Midname, a.City, a.Streer, a.Home, a.Flat, a.Tel, a.Age);

  });
}

function findPatientApoDo() {

  var sur = $$('searchFormApo3').getValues().sur;

  var url = "/CDoctor/Read?sur=" +sur;
    webix.ajax().get(url, { filter : "123" }, function(text, xml, xhr){

      var answ = text;

      answ = JSON.parse(answ);
showSearchResultApoDoc2(answ.Id, answ.Surname, answ.Name,  answ.Spec);

  });
}

function allDocs() {

  var sur = prompt('Укажите фамилию доктора, для которого нужно посмотреть список приёмов на сегодня');

  var url = "/CDoctor/Read?sur=" +sur;
    webix.ajax().get(url, { filter : "123" }, function(text, xml, xhr){

      var answ = text;

      answ = JSON.parse(answ);
      $$("doctors").clearAll();
      $$("doctors").add({id: answ.Id, docSur: answ.Surname, docName: answ.Name,
        sd: answ.Spec
      });


        openPage('doctors');
  });


}



events();
}
