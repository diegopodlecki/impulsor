<?php
/**
 * Impulsor Web - Webhook PHP simple
 *
 * Guarda leads en `leads.csv` (misma carpeta) con columnas:
 * fecha, nombre, email, negocio, mensaje, source, path, referrer, userAgent, id
 *
 * Producción: agrega autenticación (token), validaciones, rate limiting y protección anti-spam.
 */

header('Content-Type: application/json; charset=utf-8');

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);

if (!is_array($data)) {
  http_response_code(400);
  echo json_encode(['ok' => false, 'error' => 'Invalid JSON']);
  exit;
}

$row = [
  $data['fecha'] ?? gmdate('c'),
  $data['nombre'] ?? '',
  $data['email'] ?? '',
  $data['negocio'] ?? '',
  preg_replace("/\\r?\\n/", " ", $data['mensaje'] ?? ''),
  $data['source'] ?? '',
  $data['path'] ?? '',
  $data['referrer'] ?? '',
  $data['userAgent'] ?? '',
  $data['id'] ?? '',
];

$file = __DIR__ . DIRECTORY_SEPARATOR . 'leads.csv';
$isNew = !file_exists($file);
$fp = fopen($file, 'a');

if (!$fp) {
  http_response_code(500);
  echo json_encode(['ok' => false, 'error' => 'Cannot write leads.csv']);
  exit;
}

if ($isNew) {
  fputcsv($fp, ["fecha", "nombre", "email", "negocio", "mensaje", "source", "path", "referrer", "userAgent", "id"]);
}

fputcsv($fp, $row);
fclose($fp);

echo json_encode(['ok' => true]);

