CREATE DATABASE dbaProyectoWeb;
USE dbaProyectoWeb;

-- Tabla Usuarios
CREATE TABLE dbo.Usuarios (
    id_usuario UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    contraseña UNIQUEIDENTIFIER NOT NULL DEFAULT NEWID(),
    telefono VARCHAR(20),
    direccion VARCHAR(255),
    ciudad VARCHAR(50),
    estado VARCHAR(50),
    pais VARCHAR(50),
    fecha_registro DATETIME DEFAULT GETDATE(),
    activo BIT DEFAULT 1
);

-- Tabla Categorías
CREATE TABLE dbo.Categorias (
    id_categoria INT PRIMARY KEY IDENTITY(1,1),
    nombre_categoria VARCHAR(100) NOT NULL,
    activo BIT DEFAULT 1
);

-- Tabla Productos 
CREATE TABLE dbo.Productos (
    id_producto INT PRIMARY KEY IDENTITY(1,1),
    nombre_producto VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    id_categoria INT,
    fecha_creacion DATETIME DEFAULT GETDATE(),
    activo BIT DEFAULT 1,
    FOREIGN KEY (id_categoria) REFERENCES Categorias(id_categoria)
);

-- Tabla Carrito
CREATE TABLE dbo.Carrito (
    id_carrito INT PRIMARY KEY IDENTITY(1,1),
    id_usuario UNIQUEIDENTIFIER,
    id_producto INT,
    cantidad INT NOT NULL,
    fecha_agregado DATETIME DEFAULT GETDATE(),
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);

-- Tabla Transacciones
CREATE TABLE dbo.Transacciones (
    id_transaccion INT PRIMARY KEY IDENTITY(1,1),
    id_usuario UNIQUEIDENTIFIER,
    fecha_transaccion DATETIME DEFAULT GETDATE(),
    monto_total DECIMAL(10, 2) NOT NULL,
    estado VARCHAR(20) NOT NULL,
    activo BIT DEFAULT 1,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);

CREATE TABLE dbo.DetalleTransaccion (
    id_detalle_transaccion INT PRIMARY KEY IDENTITY(1,1),
    id_transaccion INT,
    id_producto INT,
    cantidad INT NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_transaccion) REFERENCES Transacciones(id_transaccion),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);




INSERT INTO dbo.Usuarios (nombre, apellido, email, telefono, direccion, ciudad, estado, pais, rol)
VALUES ('camilo', 'perez', 'perezc24@gmail.com', '123', 'calle28', 'medellin', '3','colombia', 'visual')