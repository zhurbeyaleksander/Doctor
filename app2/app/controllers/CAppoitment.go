package controllers

import (
	"app2/app/models/providers"

	"github.com/revel/revel"
)

type CAppoitment struct {
	*revel.Controller
	provider *providers.Appoitment
}

func (p *CAppoitment) Create(surnameP string, nameP string, idP int64, idD int64, date string) revel.Result {

	p.provider = new(providers.Appoitment)

	answ, err := p.provider.Create(surnameP, nameP, idP, idD, date)
	if err != nil {
		return nil
	}

	return p.RenderJson(answ)
}

func (p *CAppoitment) Read(idD int64) revel.Result {

	p.provider = new(providers.Appoitment)

	answ := p.provider.Read(idD)

	return p.RenderJson(answ)
}
