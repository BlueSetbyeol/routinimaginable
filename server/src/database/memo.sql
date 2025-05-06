USE routinimaginable;

CREATE TABLE exercise
(id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(150) NOT NULL,
image VARCHAR(255),
category VARCHAR(150) NOT NULL
);

INSERT into exercise (name,category)
VALUE('flexion', 'travail'),
('jack sauteur', 'travail');

CREATE TABLE routine
(id INT PRIMARY KEY NOT NULL,
name VARCHAR (150) NOT NULL,
is_shared BOOLEAN,
id_user INT NOT NULL,
FOREIGN KEY (id_user) REFERENCES user(id)
);

CREATE TABLE routine_step
(id INT PRIMARY KEY NOT NULL,
name VARCHAR (150) NOT NULL,
time INT,
nb_of_repetition INT,
id_exercise INT NOT NULL,
FOREIGN KEY (id_exercise) REFERENCES exercise (id),
);

CREATE TABLE user
(id INT PRIMARY KEY NOT NULL,
name VARCHAR (150) NOT NULL,
email VARCHAR (250) NOT NULL,
password VARCHAR (150) NOT NULL,
role VARCHAR (100),
profil_picture VARCHAR (250),
);

SELECT * from exercise;