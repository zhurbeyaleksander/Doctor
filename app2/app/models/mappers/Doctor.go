package mappers

import (
	"app2/app/models/entitis"
	"database/sql"

	_ "github.com/lib/pq"
)

type Doctor struct {
}

type Doc struct {
	Id      int64
	Surname string
	Name    string
	Midname string
	Spec    string
}

type patient struct {
	id      int
	surname string
	name    string
	midname string
	city    string
	streer  string
	home    string
	flat    string
	tel     string
	age     int
}

func (m *Doctor) Read(sur string) (*Doc, error) {

	connStr := "user=postgres password=123 dbname=testBD sslmode=disable"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		return nil, err
	}
	defer db.Close()

	rows := db.QueryRow("SELECT id, surname, name, midname, spec FROM doctors where surname = $1", sur)
	//var idType sql.NullInt64
	var id sql.NullInt64
	var surname sql.NullString
	var name sql.NullString
	var midname sql.NullString
	var spec sql.NullString

	err = rows.Scan(&id, &surname, &name, &midname, &spec)
	if err != nil {
		return nil, err
	}

	doco := &Doc{Id: id.Int64, Surname: surname.String, Name: name.String, Midname: midname.String, Spec: spec.String}

	return doco, nil
}

func (m *Doctor) Create(*entitis.Doctor) error {
	//Соответственно тут будет INSERT

	return nil
}

func (m *Doctor) ReadAll() (*entitis.Doctor, error) {
	//Тут у нас SELECT выбирает все строки таблицы
	doc := &entitis.Doctor{}
	return doc, nil
}

func (m *Doctor) Update(*entitis.Doctor) error {
	// Берём по ID строку в БД и обновляем её
	//Возвращаем обновлённый объект

	return nil
}

func (m *Doctor) Delete(*entitis.Doctor) error {
	//Удаляем из БД

	return nil
}
