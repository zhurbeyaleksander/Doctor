package providers

import (
	"app2/app/models/entitis"
	"app2/app/models/mappers"
)

type Doctor struct {
	docMapper *mappers.Doctor
}

func (p *Doctor) Read(sur string) (*mappers.Doc, error) {
	doc, err := p.docMapper.Read(sur)
	if err != nil {
		//Обработка ошибки
	}

	return doc, err
}

func (p *Doctor) ReadAll() (*entitis.Doctor, error) {

	doc, err := p.docMapper.ReadAll()

	if err != nil {

	}
	return doc, err
}

func (p *Doctor) Create() (*entitis.Doctor, error) {

	return nil, nil
}

func (p *Doctor) Update() error {

	return nil
}

func (p *Doctor) Delete() error {

	return nil
}
