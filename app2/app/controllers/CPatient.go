package controllers

import (
	"app2/app/models/providers"

	"github.com/revel/revel"
)

type CPatient struct {
	*revel.Controller

	provider *providers.Patient
}

func (p CPatient) Read(sur string) revel.Result {

	p.provider = new(providers.Patient)

	pat := p.provider.Read(sur)

	return p.RenderJson(pat)
}

func (p CPatient) Create(sur string, name string, midname string, city string,
	street string, home string, flat string, tel string, age int) revel.Result {
	p.provider = new(providers.Patient)

	answ, err := p.provider.Create(sur, name, midname, city, street, home, flat,
		tel, age)

	if err != nil {
		return p.RenderJson(err)
	}

	return p.RenderJson(answ)

}
