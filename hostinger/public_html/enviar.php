<?php
declare(strict_types=1);

require_once __DIR__ . '/config.php';

header('Content-Type: text/plain; charset=utf-8');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo 'METHOD_NOT_ALLOWED';
    exit;
}

// Basic validation
$nombre = trim((string)($_POST['nombre'] ?? ''));
$telefono = trim((string)($_POST['telefono'] ?? ''));
$email = trim((string)($_POST['email'] ?? ''));
$mensaje = trim((string)($_POST['mensaje'] ?? ''));
$origen = trim((string)($_POST['origen'] ?? 'landing webappimpulsor'));

if ($nombre === '' || $telefono === '' || $email === '') {
    http_response_code(400);
    echo 'INVALID';
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo 'INVALID_EMAIL';
    exit;
}

try {
    $pdo = db();
    $stmt = $pdo->prepare(
        'INSERT INTO leads (nombre, telefono, email, mensaje, origen, created_at, ip, user_agent, referrer, path)
         VALUES (:nombre, :telefono, :email, :mensaje, :origen, NOW(), :ip, :user_agent, :referrer, :path)'
    );
    $stmt->execute([
        ':nombre' => $nombre,
        ':telefono' => $telefono,
        ':email' => $email,
        ':mensaje' => $mensaje,
        ':origen' => $origen,
        ':ip' => (string)($_SERVER['REMOTE_ADDR'] ?? ''),
        ':user_agent' => (string)($_SERVER['HTTP_USER_AGENT'] ?? ''),
        ':referrer' => (string)($_SERVER['HTTP_REFERER'] ?? ''),
        ':path' => (string)($_SERVER['REQUEST_URI'] ?? ''),
    ]);

    echo 'OK';
} catch (Throwable $e) {
    http_response_code(500);
    echo 'ERROR';
}

