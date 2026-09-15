SHOW DATABASES;

CREATE DATABASE turmads1b;


CREATE TABLE alunos(
	id INT AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	curso VARCHAR(100) NOT NULL
	);
	
	SHOW TABLES;

SELECT * FROM alunos;

INSERT INTO alunos (nome, curso)
VALUES ('Brenda', 'Desenvolvimento de sistemas'),
('Demi','Redes de computador'),
('Larissa', 'Banco de dados'),
('Carlos', 'Adm'),
('Dimenos', 'DCb');

SELECT * FROM alunos;