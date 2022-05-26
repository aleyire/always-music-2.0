const eliminar = async (pool, rut) => {
  await pool.connect(async (error_conexion, client, release) => {
    if (error_conexion)
      return console.error("error de conexión!!! código:", error_conexion.code)
    const SQLQuery = {
      name: "eliminar",
      text: "DELETE FROM estudiantes WHERE rut =$1",
      values: [rut],
    }
    const res = await client.query(SQLQuery, (error_consulta, res) => {
      if (error_consulta)
        return console.error(
          "error en la consulta, código:",
          error_consulta.code
        )
      console.log("Cantidad de registros afectados", res.rowCount)
      release()
      pool.end()
    })
  })
}

module.exports = eliminar
