import express from "express";
const app = express();
const PORT = 5000;

/* app.get('/', function (req, res) {
    res.send('Saludos desde express');
  });
app.post('/hola', function (req, res) {
    res.send('[POST]Saludos desde express');
  }); */
app.get("/client=111", function (req, res) {
  res.json({
    DatosBeneficiario: {
      paisDocumentoId: 845,
      tipoDocumentoId: 1,
      nroDocumento: "41875255",
      nacionalidad: "CHILENA",
      primerNombre: "ALEJANDRO",
      segundoNombre: "sddsss",
      primerApellido: "VAZQUEZ",
      segundoApellido: "LÓPEZ",
      telefonoCelular: "9882872",
      fechaNacimiento: "1976-02-26",
      correoElectronico: "AV@GMAIL.COM",
      numeroCotización: "99999999",
    },
    DatosVehiculo: {
      marca: "MARCA",
      modelo: "MODELO",
      version: "VERSION",
      placaPatenteUnica: "XXXX99",
      anyoFabricacion: "2010",
      estado: "nuevo",
      cantidad: "999",
      valorVehiculo: 999999,
    },
    DatosVenta: {
      cod_Distribuidor: 0,
      distribuidor: "Bruno Fritz",
      cod_Sucursal: 0,
      sucursal: "cantagallo",
      cod_Vendedor: "4187525",
      vendedor: "nombre vendedor",
      cod_Ejecutivo: "418752",
      ejecutivo: "nombre ejecutivo",
    },
    DatosUsuario: {
      cod_usuario: "418752",
    },
  });
});

app.get("/", function (req, res) {
  res.json({
    token: "G6943LMReKj_kqdAVrAiPbpRloAfE1fqp0eVAJ-IChQcV-kv3gW-gBAzWztBEdFY",
    vendedor: "nombre vendedor",
    rol: "rol",
    sucursal: "cantagallo",
    distribuidora: "Bruno Fritz",
    operacionId: 100,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
