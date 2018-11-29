package mappers

import (
	"app2/app/models/entitis"
	"database/sql"
	"fmt"
)

type MedHistory struct{}

type Case struct {
	Id      int64
	Surname string
	Name    string
	Pid     int64
	Text    string
}

func (m *MedHistory) Read(pid int64) []Case {

	connStr := "user=postgres password=123 dbname=testBD sslmode=disable"
	db, err := sql.Open("postgres", connStr)

	defer db.Close()

	rows, err := db.Query("select id, surname, name, pid, text from cases where pid = $1", pid)
	if err != nil {
		panic(err)
	}

	cas := []Case{}

	for rows.Next() {
		p := Case{}
		err := rows.Scan(&p.Id, &p.Surname, &p.Name, &p.Pid, &p.Text)
		if err != nil {
			fmt.Println(err)
			continue
		}

		cas = append(cas, p)
	}

	return cas
}

func (m *MedHistory) ReadAll() (*entitis.MedHistory, error) {

	mHistory := &entitis.MedHistory{}
	return mHistory, nil
}

func (m *MedHistory) Create(surname string, name string, pid int64, text string) (sql.Result, error) {

	connStr := "user=postgres password=123 dbname=testBD sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {

		return nil, err
	}
	defer db.Close()

	answ, err := db.Exec("insert into cases (surname, name, pid, text) values ($1, $2, $3, $4)", surname, name, pid, text)

	if err != nil {

		return nil, err
	}

	return answ, nil

}

func (m *MedHistory) Update(*entitis.MedHistory) error {

	return nil
}

func (m *MedHistory) Delete(*entitis.MedHistory) error {

	return nil
}
