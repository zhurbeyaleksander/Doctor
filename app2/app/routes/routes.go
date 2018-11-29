// GENERATED CODE - DO NOT EDIT
package routes

import "github.com/revel/revel"


type tCMedHistory struct {}
var CMedHistory tCMedHistory


func (_ tCMedHistory) Create(
		surname string,
		name string,
		pid int64,
		text string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "surname", surname)
	revel.Unbind(args, "name", name)
	revel.Unbind(args, "pid", pid)
	revel.Unbind(args, "text", text)
	return revel.MainRouter.Reverse("CMedHistory.Create", args).Url
}

func (_ tCMedHistory) Read(
		pid int64,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "pid", pid)
	return revel.MainRouter.Reverse("CMedHistory.Read", args).Url
}


type tCPatient struct {}
var CPatient tCPatient


func (_ tCPatient) Read(
		sur string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "sur", sur)
	return revel.MainRouter.Reverse("CPatient.Read", args).Url
}

func (_ tCPatient) Create(
		sur string,
		name string,
		midname string,
		city string,
		street string,
		home string,
		flat string,
		tel string,
		age int,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "sur", sur)
	revel.Unbind(args, "name", name)
	revel.Unbind(args, "midname", midname)
	revel.Unbind(args, "city", city)
	revel.Unbind(args, "street", street)
	revel.Unbind(args, "home", home)
	revel.Unbind(args, "flat", flat)
	revel.Unbind(args, "tel", tel)
	revel.Unbind(args, "age", age)
	return revel.MainRouter.Reverse("CPatient.Create", args).Url
}


type tApp struct {}
var App tApp


func (_ tApp) Index(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("App.Index", args).Url
}


type tCAppoitment struct {}
var CAppoitment tCAppoitment


func (_ tCAppoitment) Create(
		surnameP string,
		nameP string,
		idP int64,
		idD int64,
		date string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "surnameP", surnameP)
	revel.Unbind(args, "nameP", nameP)
	revel.Unbind(args, "idP", idP)
	revel.Unbind(args, "idD", idD)
	revel.Unbind(args, "date", date)
	return revel.MainRouter.Reverse("CAppoitment.Create", args).Url
}

func (_ tCAppoitment) Read(
		idD int64,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "idD", idD)
	return revel.MainRouter.Reverse("CAppoitment.Read", args).Url
}


type tCDoctor struct {}
var CDoctor tCDoctor


func (_ tCDoctor) Read(
		sur string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "sur", sur)
	return revel.MainRouter.Reverse("CDoctor.Read", args).Url
}


type tStatic struct {}
var Static tStatic


func (_ tStatic) Serve(
		prefix string,
		filepath string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "prefix", prefix)
	revel.Unbind(args, "filepath", filepath)
	return revel.MainRouter.Reverse("Static.Serve", args).Url
}

func (_ tStatic) ServeModule(
		moduleName string,
		prefix string,
		filepath string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "moduleName", moduleName)
	revel.Unbind(args, "prefix", prefix)
	revel.Unbind(args, "filepath", filepath)
	return revel.MainRouter.Reverse("Static.ServeModule", args).Url
}


type tTestRunner struct {}
var TestRunner tTestRunner


func (_ tTestRunner) Index(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("TestRunner.Index", args).Url
}

func (_ tTestRunner) Suite(
		suite string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "suite", suite)
	return revel.MainRouter.Reverse("TestRunner.Suite", args).Url
}

func (_ tTestRunner) Run(
		suite string,
		test string,
		) string {
	args := make(map[string]string)
	
	revel.Unbind(args, "suite", suite)
	revel.Unbind(args, "test", test)
	return revel.MainRouter.Reverse("TestRunner.Run", args).Url
}

func (_ tTestRunner) List(
		) string {
	args := make(map[string]string)
	
	return revel.MainRouter.Reverse("TestRunner.List", args).Url
}


