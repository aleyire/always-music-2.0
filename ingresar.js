const ingresar = async (pool, rut, nombre, curso, nivel) => {
  await pool.connect(async (error_conexion, client, release) => {
    if (error_conexion)
      return console.error("error de conexión!!!, código:", error_conexion.code)
    const SQLQuery = {
      name: "ingresar",
      text: "insert into estudiantes (rut, nombre, curso, nivel) values ($1, $2, $3, $4) RETURNING *",
      values: [rut, nombre, curso, nivel],
    }
    const res = await client.query(SQLQuery, (error_consulta, res) => {
      if (error_consulta)
        return console.error(
          "error en la consulta, código:",
          error_consulta.code
        )

      console.log("Registro agregado", res.rows[0])
      console.log("Último rut", res.rows[0].rut)
      console.log("Cantidad de registros afectados", res.rowCount)
      console.log(
        "Campos del registro: ",
        res.fields.map((r) => r.name).join(" - ")
      )
      release()
      pool.end()
    })
  })
}

module.exports = ingresar
