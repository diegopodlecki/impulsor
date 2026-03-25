function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('contactos');

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
        result: 'error',
        message: 'No existe la hoja/pestana "contactos" en este Spreadsheet.',
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  }

  const fecha = new Date();

  sheet.appendRow([
    fecha,
    data.nombre || '',
    data.email || '',
    data.telefono || '',
    data.mensaje || '',
    data.origen || '',
    'nuevo',
    '',
  ]);

  try {
    enviarNotificacion(data);
  } catch (_) {
    // No bloquear el guardado por un error de notificacion.
  }

  return ContentService.createTextOutput(JSON.stringify({ result: 'success' })).setMimeType(ContentService.MimeType.JSON);
}

function enviarNotificacion(data) {
  const emailDestino = getConfig_('CONTACT_TO_EMAIL', 'diego.podlecki@gmail.com');
  const resendApiKey = getConfig_('re_BAfjGrH5_6BcfZijw49h35sYXiYCcg3ju', '');
  const asunto = 'Nuevo lead desde WebApp Impulsor';
  const mensaje =
    'Nuevo contacto recibido:\n\n' +
    'Nombre: ' +
    (data.nombre || '-') +
    '\n' +
    'Email: ' +
    (data.email || '-') +
    '\n' +
    'Telefono: ' +
    (data.telefono || '-') +
    '\n' +
    'Mensaje: ' +
    (data.mensaje || '-') +
    '\n' +
    'Origen: ' +
    (data.origen || '-');

  if (!resendApiKey) {
    MailApp.sendEmail(emailDestino, asunto, mensaje);
    return;
  }

  const response = UrlFetchApp.fetch('https://api.resend.com/emails', {
    method: 'post',
    contentType: 'application/json',
    headers: {
      Authorization: 'Bearer ' + resendApiKey,
    },
    payload: JSON.stringify({
      from: 'WebApp Impulsor <onboarding@resend.dev>',
      to: [emailDestino],
      subject: asunto,
      html:
        '<h2>Nuevo contacto</h2>' +
        '<p><strong>Nombre:</strong> ' + escapeHtml_(data.nombre || '-') + '</p>' +
        '<p><strong>Email:</strong> ' + escapeHtml_(data.email || '-') + '</p>' +
        '<p><strong>Telefono:</strong> ' + escapeHtml_(data.telefono || '-') + '</p>' +
        '<p><strong>Mensaje:</strong> ' + escapeHtml_(data.mensaje || '-') + '</p>' +
        '<p><strong>Origen:</strong> ' + escapeHtml_(data.origen || '-') + '</p>',
    }),
    muteHttpExceptions: true,
  });

  if (response.getResponseCode() >= 400) {
    throw new Error('Resend error: ' + response.getContentText());
  }
}

function getConfig_(key, fallback) {
  return PropertiesService.getScriptProperties().getProperty(key) || fallback;
}

function escapeHtml_(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
