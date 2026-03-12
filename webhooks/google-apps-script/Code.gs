/**
 * Impulsor Web - Webhook para Google Apps Script (Google Sheets)
 *
 * Guarda leads en una hoja con columnas:
 * fecha, nombre, email, negocio, mensaje, source, path, referrer, userAgent, id
 *
 * Deploy:
 * - Deploy > New deployment > Web app
 * - Execute as: Me
 * - Who has access: Anyone
 * - Usa la URL /exec como VITE_LEADS_WEBHOOK_URL
 */

const SHEET_ID = "REEMPLAZA_POR_TU_SHEET_ID";
const SHEET_NAME = "Leads";

function doPost(e) {
  try {
    const raw = (e && e.postData && e.postData.contents) ? e.postData.contents : "{}";
    const data = JSON.parse(raw || "{}");

    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME) || SpreadsheetApp.openById(SHEET_ID).insertSheet(SHEET_NAME);

    // Header (solo si está vacío).
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["fecha", "nombre", "email", "negocio", "mensaje", "source", "path", "referrer", "userAgent", "id"]);
    }

    sheet.appendRow([
      data.fecha || new Date().toISOString(),
      data.nombre || "",
      data.email || "",
      data.negocio || "",
      data.mensaje || "",
      data.source || "",
      data.path || "",
      data.referrer || "",
      data.userAgent || "",
      data.id || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

