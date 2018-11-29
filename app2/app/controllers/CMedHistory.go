package controllers

import (
	"app2/app/models/providers"

	"github.com/revel/revel"
)

type CMedHistory struct {
	*revel.Controller

	provider *providers.MedHistory
}

func (p CMedHistory) Create(surname string, name string, pid int64, text string) revel.Result {

	p.provider = new(providers.MedHistory)

	answ, err := p.provider.Create(surname, name, pid, text)

	if err != nil {
		return p.RenderJson(err)
	}

	return p.RenderJson(answ)
}

func (p CMedHistory) Read(pid int64) revel.Result {

	p.provider = new(providers.MedHistory)

	answ := p.provider.Read(pid)

	return p.RenderJson(answ)
}
