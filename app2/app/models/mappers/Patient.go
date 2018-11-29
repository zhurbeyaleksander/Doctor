package mappers

import (
	"app2/app/models/entitis"
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

type Patient struct {
}

type Pat2 struct {
	Id      int64
	Surname string
	Name    string
	Midname string
	City    string
	Streer  string
	Home    string
	Flat    string
	Tel     string
	Age     int64
}

func (m *Patient) Read(sur string) []Pat2 {

	connStr := "user=postgres password=123 dbname=testBD sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		return nil
	}
	defer db.Close()

	
	

	rows, err := db.Query("select id, surname, name, midname,  city, streer, home, flat, tel, age from patients where surname = $1", sur)
	if err != nil {
		panic(err)
	}

	pa := []Pat2{}

	for rows.Next() {
		p := Pat2{}
		err := rows.Scan(&p.Id, &p.Surname, &p.Name, &p.Midname, &p.City, &p.Streer, &p.Home, &p.Flat, &p.Tel, &p.Age)
		if err != nil {
			fmt.Println(err)
			continue
		}

		pa = append(pa, p)
	}

	return pa
}

func (m *Patient) ReadAll(sur string) (*Pat2, error) {

	connStr := "user=postgres password=123 dbname=testBD sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		return nil, err
	}
	defer db.Close()

	rows := db.QueryRow("SELECT id, surname FROM patients where surname = $1 ", sur)
	//var idType sql.NullInt64
	var id sql.NullInt64
	var surname sql.NullString

	err = rows.Scan(&id, &surname)
	if err != nil {
		return nil, err
	}

	//id = idType.Int64

	pati := &Pat2{Id: id.Int64, Surname: surname.String}

	return pati, nil
}

func (m *Patient) Update(*entitis.Patient) error {

	return nil
}

func (m *Patient) Create(sur string, name string, midname string, city string,
	street string, home string, flat string, tel string, age int) (sql.Result, error) {

	connStr := "user=postgres password=123 dbname=testBD sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {

		return nil, err
	}
	defer db.Close()

	answ, err := db.Exec("insert into patients (surname, name, midname, city, streer, home, flat, tel, age) values ($1, $2, $3, $4, $5, $6, $7, $8, $9)", sur, name, midname, city, street, home, flat,
		tel, age)

	if err != nil {

		return nil, err
	}

	return answ, nil

}

func (m *Patient) Delete(*entitis.Patient) error {

	return nil
}
