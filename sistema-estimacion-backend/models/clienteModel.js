const db = require('../config/database');

async function getAllClientes() {
  console.log('Modelo: solicitando todos los clientes');
  const result = await db.query(
    `SELECT cliente_id, nombre, direccion, correo_electronico, tipo_persona
     FROM "clientes"
     ORDER BY cliente_id ASC`
  );

  console.log('Modelo: clientes obtenidos:', result.rows.length);
  return result.rows;
}

async function createCliente({ nombre, direccion, correo_electronico, tipo_persona }) {
  console.log('Modelo: creando cliente:', { nombre, direccion, correo_electronico, tipo_persona });
  const result = await db.query(
    `INSERT INTO "clientes" (nombre, direccion, correo_electronico, tipo_persona)
     VALUES ($1, $2, $3, $4)
     RETURNING cliente_id, nombre, direccion, correo_electronico, tipo_persona`,
    [nombre, direccion, correo_electronico, tipo_persona]
  );

  console.log('Modelo: cliente creado:', result.rows[0]);
  return result.rows[0];
}

module.exports = {
  getAllClientes,
  createCliente,
};
