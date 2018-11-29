package mappers

import (
	//"app2/app/models/entitis"
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

type Appoitment struct {
}

type Apo struct {
	Id    int64
	SurP  string
	NameP string
	IdP   int64
	IdD   int64
	Date  string
}

func (m *Appoitment) Create(surnameP string, nameP string, idP int64, idD int64, date string) (sql.Result, error) {

	connStr := "user=postgres password=123 dbname=testBD sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {

		return nil, err
	}
	defer db.Close()

	answ, err := db.Exec("insert into appoitment (surp, namep, idp, idd, date) values ($1, $2, $3, $4, $5)", surnameP, nameP, idP, idD, date)

	if err != nil {

		return nil, err
	}

	return answ, nil
}

func (m *Appoitment) Read(idD int64) []Apo {

	connStr := "user=postgres password=123 dbname=testBD sslmode=disable"
	db, err := sql.Open("postgres", connStr)

	defer db.Close()

	rows, err := db.Query("select id, surp, namep, idp, idd, date from appoitment where idd = $1", idD)
	if err != nil {
		panic(err)
	}

	appo := []Apo{}

	for rows.Next() {
		p := Apo{}
		err := rows.Scan(&p.Id, &p.SurP, &p.NameP, &p.IdP, &p.IdD, &p.Date)
		if err != nil {
			fmt.Println(err)
			continue
		}

		appo = append(appo, p)
	}

	return appo
}
