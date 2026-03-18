function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("contactos");

  // Lee tanto JSON como form-urlencoded
  let data = {};
  try {
    data = JSON.parse(e.postData.contents);
  } catch (_) {
    data = e && e.parameter ? e.parameter : {};
  }

  if (!sheet) {
    return ContentService.createTextOutput(
      JSON.stringify({
        result: "error",
        message: 'No existe la hoja/pestaña "contactos" en este Spreadsheet.',
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  }

  const fecha = new Date();

  sheet.appendRow([
    fecha,
    data.nombre || "",
    data.email || "",
    data.telefono || "",
    data.mensaje || "",
    data.origen || "",
    "nuevo",
    "",
  ]);

  try {
    enviarNotificacion(data);
  } catch (_) {
    // No bloquear el guardado por un error de notificación.
  }

  return ContentService.createTextOutput(JSON.stringify({ result: "success" })).setMimeType(ContentService.MimeType.JSON);
}

function enviarNotificacion(data) {
  const email = "TUEMAIL@gmail.com";
  const asunto = "🔥 Nuevo lead desde WebApp Impulsor";
  const mensaje =
    "Nuevo contacto recibido:\n\n" +
    "Nombre: " +
    (data.nombre || "-") +
    "\n" +
    "Email: " +
    (data.email || "-") +
    "\n" +
    "Teléfono: " +
    (data.telefono || "-") +
    "\n" +
    "Mensaje: " +
    (data.mensaje || "-") +
    "\n" +
    "Origen: " +
    (data.origen || "-");

  MailApp.sendEmail(email, asunto, mensaje);
}

