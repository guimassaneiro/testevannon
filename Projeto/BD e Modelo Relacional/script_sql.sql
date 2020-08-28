CREATE TABLE users (
    cpf varchar(12) NOT NULL,
    nome varchar(100) NOT NULL,
    email varchar(100) NOT NULL,
    telefone varchar(12),
    PRIMARY KEY (cpf)
)
SELECT * FROM users;

INSERT INTO users (cpf, nome, email, telefone) values ('12345678912', 'Ana', 'ana@gmail.com', '11912341234');
SELECT * FROM users;

CREATE TABLE dvd (
	id_dvd int NOT NULL,
    nome_dvd varchar(200) NOT NULL,
    estoque varchar(10) NOT NULL,
    PRIMARY KEY (id_dvd)
)
SELECT * FROM dvd;
INSERT INTO dvd (id_dvd, nome_dvd, estoque) values (1, 'Iluminado', '10');
SELECT * FROM dvd;

CREATE TABLE emprestimo (
	id_emp int,
    cpf varchar(12) NOT NULL,
    id_dvd int,
    data_retirada datetime,
    data_devolucao datetime,
    PRIMARY KEY (id_emp)
)

SELECT * FROM emprestimo;
INSERT INTO emprestimo (id_emp, cpf, id_dvd, data_retirada, data_devolucao) values (1, '12345678911', 1, '010101', '020101');
SELECT * FROM emprestimo;


