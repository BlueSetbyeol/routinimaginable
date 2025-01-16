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

SELECT * from exercise;