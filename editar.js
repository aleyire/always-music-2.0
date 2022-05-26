const editar = async (pool, rut, nivel) => {
  await pool.connect(async (error_conexion, client, release) => {
    if (error_conexion)
      return console.error("error de conexión!!! código:", error_conexion.code)
    const SQLQuery = {
      name: "editar",
      text: "UPDATE estudiantes SET nivel =$2 WHERE rut =$1 RETURNING *",
      values: [rut, nivel],
    }
    const res = await client.query(SQLQuery, (error_consulta, res) => {
      if (error_consulta)
        return console.error(
          "error en la consulta, código:",
          error_consulta.code
        )
      console.log("Registro modificado", res.rows[0])
      console.log("Cantidad de registros afectados", res.rowCount)
      release()
      pool.end()
    })
  })
}

module.exports = editar
