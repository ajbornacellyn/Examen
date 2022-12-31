

create schema bd;
USE bd;
CREATE TABLE producto(
	id_fabricante varchar(25),
	id_producto varchar(25),
    descripcion varchar(25),
    precio int,
    existencias int
);
drop table producto;

INSERT INTO producto
values ("Aci", "41001", "Arandela", 58, 277),
("Aci", "41002", "Bisagra", 80, 150),
("Aci", "41003", "Perno", 112, 80),
("Aci", "41004", "Extractor", 110, 50),
("Bic", "41003", "Perno", 120, 20),
("Inc", "41089", "Clavos", 500, 30),
("Qsa", "Xk47", "Red", 150, 200),
("Bic", "Xk47", "Red", 200, 200);

# consula 1
select CONCAT(id_fabricante, '-', id_producto) as id, descripcion, precio, existencias, precio*0.20+ precio as precio_con_IVA  from producto order by precio, descripcion;



CREATE TABLE departamento(
	codigo int not 	null,
    nombre nvarchar(100),
    presupuesto int,
    primary key(codigo)
);
CREATE TABLE empleado(
	DNI varchar(8),
    nombre nvarchar(100),
    apellido nvarchar(255),
    departamento int,
    foreign key (departamento) references departamento(codigo),
    primary key(DNI)
);

drop table empleado;
drop table departamento;

INSERT INTO departamento (codigo, nombre, presupuesto)
VALUES 
(1, 'Sales', 100000),
(2, 'Marketing', 50000),
(3, 'IT', 80000),
(4, 'HR', 30000),
(5, 'Finance', 200000),
(6, 'Operations', 150000),
(7, 'Research and Development', 100000),
(8, 'Customer Support', 40000),
(9, 'Legal', 60000),
(10, 'Purchasing', 50000);

INSERT INTO empleado (DNI, nombre, apellido, departamento)
VALUES 
('12345678', 'John', 'Doe', 1),
('87654321', 'Jane', 'Doe', 2),
('11111111', 'Bob', 'Smith', 3),
('22222222', 'Alice', 'Johnson', 4),
('33333333', 'Mike', 'Williams', 5),
('44444444', 'Samantha', 'Jones', 6),
('55555555', 'Chris', 'Brown', 7),
('66666666', 'Emma', 'Davis', 8),
('77777777', 'David', 'Miller', 9),
('88888888', 'Sara', 'Garcia', 10),
('99999999', 'Daniel', 'Rodriguez', 1),
('00000000', 'Emilia', 'Martinez', 2),
('12344321', 'Jacob', 'Gonzalez', 3),
('54321098', 'Jessica', 'Perez', 4),
('76543210', 'William', 'Sanchez', 5),
('98765432', 'Ashley', 'Davis', 6),
('98765412', 'James', 'Rodriguez', 7),
('98765492', 'Emily', 'Johnson', 8),
('98765434', 'Michael', 'Garcia', 9),
('98765512', 'Sofia', 'Martinez', 10);


#1
select nombre, apellido from empleado;
#2
select distinct apellido from empleado;
#3
SELECT count(*) from empleado where apellido = "lopez" or "perez";
#4
SELECT SUM(presupuesto) from departamento;
#5

SELECT d.nombre as 'Department Name', COUNT(e.DNI) as 'Number of Employees'
FROM departamento d
JOIN empleado e ON e.departamento = d.codigo
GROUP BY d.nombre;

# 6
SELECT e.nombre, e.apellido, d.nombre 
from departamento d 
JOIN empleado e ON e.departamento = d.codigo
where d.presupuesto >30000 and d.presupuesto <60000;
# 7
UPDATE  empleado 
SET departamento = 14
WHERE departamento = 77;

# 8
DELETE FROM empleado
WHERE departamento = 3;

select * from empleado;



