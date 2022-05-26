const consultarTabla = async (pool) => {
  await pool.connect(async (error_conexion, client, release) => {
    if (error_conexion)
      return console.error("error de conexión!!! código:", error_conexion.code)
    const SQLQuery = {
      name: "consultarTabla",
      rowMode: "array",
      text: "SELECT * FROM estudiantes",
      values: [],
    }
    const res = await client.query(SQLQuery, (error_consulta, res) => {
      if (error_consulta)
        return console.error(
          "error en la consulta, código:",
          error_consulta.code
        )
      console.log("Registros: ", res.rows)
      release()
      pool.end()
    })
  })
}

module.exports = consultarTabla
