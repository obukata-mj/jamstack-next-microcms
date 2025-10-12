<?php
// ----------------------
// 設定
// ----------------------

// microCMS側で設定したSecret Key
$SECRET_KEY = 'db66c03de1e4ffe1c6bc2dff59588d71b056d74a45d8848a2975bd8827114051';

// プロジェクトのルートディレクトリ
$PROJECT_PATH = __DIR__ . '/..'; // public/ の1つ上がNext.jsプロジェクトルート
$BRANCH = 'main';                // Gitブランチ

// ビルドコマンド（npm installは含めない）
$BUILD_COMMAND = "npm run build";

// ログファイル
$LOG_FILE = $PROJECT_PATH . '/log/webhook.log';

// ----------------------
// Webhook受信
// ----------------------

// POSTのみ許可
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo "Method Not Allowed";
    exit;
}

// Secretチェック
$headers = getallheaders();
$secret = $headers['X-MICROCMS-SECRET'] ?? '';
if ($secret !== $SECRET_KEY) {
    http_response_code(403);
    echo "Forbidden: Invalid Secret";
    exit;
}

// ペイロード取得（必要に応じてログ保存）
$payload = file_get_contents('php://input');
file_put_contents($LOG_FILE, date('Y-m-d H:i:s') . " - Payload: " . $payload . PHP_EOL, FILE_APPEND);

// ----------------------
// ビルド処理
// ----------------------

// プロジェクトディレクトリへ移動
chdir($PROJECT_PATH);

// Git pullで最新を取得
exec("git checkout {$BRANCH} && git pull origin {$BRANCH} 2>&1", $output, $return_var);
file_put_contents($LOG_FILE, date('Y-m-d H:i:s') . " - Git Output: " . implode("\n", $output) . PHP_EOL, FILE_APPEND);

if ($return_var !== 0) {
    http_response_code(500);
    echo "Git pull failed";
    exit;
}

// ビルド実行
exec($BUILD_COMMAND . " 2>&1", $output, $return_var);
file_put_contents($LOG_FILE, date('Y-m-d H:i:s') . " - Build Output: " . implode("\n", $output) . PHP_EOL, FILE_APPEND);

if ($return_var !== 0) {
    http_response_code(500);
    echo "Build failed";
    exit;
}

// 成功レスポンス
http_response_code(200);
echo "Build successful";
