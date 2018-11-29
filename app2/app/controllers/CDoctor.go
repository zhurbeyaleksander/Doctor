package controllers

import (
	"app2/app/models/providers"

	"github.com/revel/revel"
)

type CDoctor struct {
	*revel.Controller
	provider *providers.Doctor
}

func (p *CDoctor) Read(sur string) revel.Result {
	p.provider = new(providers.Doctor)
	doc, err := p.provider.Read(sur)

	if err != nil {
		return nil
	}

	return p.RenderJson(doc)

}
