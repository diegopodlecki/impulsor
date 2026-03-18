# Google Apps Script (Google Sheets)

Este repo no puede modificar tu Apps Script automáticamente, pero dejamos el código versionado acá para que lo pegues en tu proyecto de Apps Script.

## Importante

- El **Spreadsheet** se llama `leads-webappimpulsor` (nombre del archivo).
- La **hoja/pestaña** dentro del Spreadsheet donde se escriben los leads se llama `contactos`.

En Apps Script, `getSheetByName(...)` siempre recibe el **nombre de la pestaña**, no el nombre del archivo.

## Qué pegar

- Copiá y pegá `apps-script/Code.gs` en tu proyecto de Apps Script.
- Luego **Deploy → New deployment → Web app**.
  - Execute as: `Me`
  - Who has access: `Anyone`

