const ingresar = require("./ingresar")
const consultar = require("./consultar")
const editar = require("./editar")
const consultarTabla = require("./consultar_tabla")
const eliminar = require("./eliminar")
const { Pool } = require("pg")

const config = {
  user: "postgres",
  host: "localhost",
  database: "estudiante",
  password: "alejandra",
  port: 5432,
  max: 20,
  idleTimeoutMillis: 5000,
  connectionTimeoutMillis: 2000,
}
const pool = new Pool(config)

const argumentos = process.argv.slice(2)
const accion = argumentos[0]
const valor1 = argumentos[1]
const valor2 = argumentos[2]
const valor3 = argumentos[3]
const valor4 = argumentos[4]

const programa = async () => {
  if (accion === "rut") {
    const rut = valor1
    await consultar(pool, rut)
  }
  if (accion === "ingresar") {
    const rut = valor1
    const nombre = valor2
    const curso = valor3
    const nivel = valor4
    await ingresar(pool, nombre, rut, curso, nivel)
  }
  if (accion === "consultar tabla") {
    const rut = valor1
    const nombre = valor2
    const curso = valor3
    const nivel = valor4
    await consultarTabla(pool, nombre, rut, curso, nivel)
  }
  if (accion === "editar") {
    const rut = valor1
    const nivel = valor2
    await editar(pool, rut, nivel)
  }
  if (accion === "eliminar") {
    const rut = valor1
    await eliminar(pool, rut)
  }
}
programa()
