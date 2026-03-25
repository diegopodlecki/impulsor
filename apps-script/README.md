# Google Apps Script (Google Sheets)

Este repo no puede modificar tu Apps Script automaticamente, pero dejamos el codigo versionado aca para que lo pegues en tu proyecto de Apps Script.

## Importante

- El **Spreadsheet** se llama `leads-webappimpulsor` (nombre del archivo).
- La **hoja/pestana** dentro del Spreadsheet donde se escriben los leads se llama `contactos`.

En Apps Script, `getSheetByName(...)` siempre recibe el **nombre de la pestana**, no el nombre del archivo.

## Configuracion Resend

En Apps Script, andá a **Project Settings** -> **Script Properties** y agregá:
- `RESEND_API_KEY` = tu API key de Resend
- `CONTACT_TO_EMAIL` = el email que recibira los contactos

Si `RESEND_API_KEY` no esta, el script usa `MailApp` como fallback.

## Que pegar

- Copiá y pegá `apps-script/Code.gs` en tu proyecto de Apps Script.
- Luego **Deploy -> New deployment -> Web app**.
  - Execute as: `Me`
  - Who has access: `Anyone`
