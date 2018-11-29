package providers

import (
	"app2/app/models/entitis"
	"app2/app/models/mappers"
	"database/sql"
)

type MedHistory struct {
	medHistoryMapper *mappers.MedHistory
}

func (p *MedHistory) Read(pid int64) []mappers.Case {

	answ := p.medHistoryMapper.Read(pid)

	return answ
}

func (p *MedHistory) ReadAll() (*entitis.MedHistory, error) {

	return nil, nil
}

func (p *MedHistory) Create(surname string, name string, pid int64, text string) (sql.Result, error) {

	answ, err := p.medHistoryMapper.Create(surname, name, pid, text)

	if err != nil {

	}

	return answ, nil
}

func (p *MedHistory) Update() error {

	return nil
}

func (p *MedHistory) Delete() error {

	return nil
}
