package providers

import (
	//"app2/app/models/entitis"
	"app2/app/models/mappers"
	"database/sql"
)

type Appoitment struct {
	appoMappers *mappers.Appoitment
}

func (p *Appoitment) Create(surnameP string, nameP string, idP int64, idD int64, date string) (sql.Result, error) {

	answ, err := p.appoMappers.Create(surnameP, nameP, idP, idD, date)

	if err != nil {

	}

	return answ, nil

}

func (p *Appoitment) Read(idD int64) []mappers.Apo {

	answ := p.appoMappers.Read(idD)

	return answ
}
