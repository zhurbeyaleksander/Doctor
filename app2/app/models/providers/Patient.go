package providers

import (
	"app2/app/models/entitis"
	"app2/app/models/mappers"
	"database/sql"
)

type Patient struct {
	patientMapper *mappers.Patient
}

func (p Patient) Read(sur string) []mappers.Pat2 {

	pat := p.patientMapper.Read(sur)

	return pat

}

func (p *Patient) ReadAll() (*entitis.Patient, error) {

	return nil, nil
}

func (p *Patient) Create(sur string, name string, midname string, city string,
	street string, home string, flat string, tel string, age int) (sql.Result, error) {

	answ, err := p.patientMapper.Create(sur, name, midname, city, street, home, flat,
		tel, age)

	if err != nil {

	}

	return answ, nil
}

func (p *Patient) Update() error {

	return nil
}

func (p *Patient) Delete() error {

	return nil
}
