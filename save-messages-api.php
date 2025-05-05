<?php
// Configurar CORS para permitir peticiones desde cualquier origen
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Verificar que sea una petición POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

// Verificar que se ha proporcionado la contraseña correcta
$password = isset($_POST['password']) ? $_POST['password'] : '';
$correctPassword = "suyvic2023"; // Cambia esto por la misma contraseña que usaste en el JavaScript

if ($password !== $correctPassword) {
    echo json_encode(['success' => false, 'message' => 'Contraseña incorrecta']);
    exit;
}

// Verificar que se ha subido un archivo
if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
    echo json_encode(['success' => false, 'message' => 'No se ha subido ningún archivo']);
    exit;
}

// Ruta donde guardar el archivo JSON
$targetFile = __DIR__ . '/messages.json';

// Mover el archivo subido a la ubicación final
if (move_uploaded_file($_FILES['file']['tmp_name'], $targetFile)) {
    echo json_encode(['success' => true, 'message' => 'Archivo guardado correctamente']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error al guardar el archivo']);
}