<?php
// Hostinger / PHP config
// Completar estos datos con los de tu hosting.

declare(strict_types=1);

const DB_HOST = 'localhost';
const DB_NAME = 'TU_BASE_DE_DATOS';
const DB_USER = 'TU_USUARIO';
const DB_PASS = 'TU_PASSWORD';
const DB_CHARSET = 'utf8mb4';

function db(): PDO
{
    static $pdo = null;
    if ($pdo instanceof PDO) {
        return $pdo;
    }

    $dsn = sprintf('mysql:host=%s;dbname=%s;charset=%s', DB_HOST, DB_NAME, DB_CHARSET);
    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);

    return $pdo;
}

