<?php
// ----------------------
// 設定
// ----------------------

// microCMS側で設定したSecret Key
$SECRET_KEY = 'db66c03de1e4ffe1c6bc2dff59588d71b056d74a45d8848a2975bd8827114051';

// プロジェクトのルートディレクトリ
$PROJECT_PATH = __DIR__ . '/..'; // /api の1つ上がNext.jsプロジェクトルート
$BRANCH = 'main';                // Gitブランチ

// ビルドコマンド
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
    file_put_contents($LOG_FILE, date('Y-m-d H:i:s') . " - Invalid method: {$_SERVER['REQUEST_METHOD']}" . PHP_EOL, FILE_APPEND);
    exit;
}

// Secretチェック
$headers = function_exists('getallheaders') ? getallheaders() : [];
$secret = $headers['X-MICROCMS-SECRET'] ?? ($_SERVER['HTTP_X_MICROCMS_SECRET'] ?? '');
if ($secret !== $SECRET_KEY) {
    http_response_code(403);
    echo "Forbidden: Invalid Secret";
    file_put_contents($LOG_FILE, date('Y-m-d H:i:s') . " - Invalid secret received" . PHP_EOL, FILE_APPEND);
    exit;
}

// ペイロード取得＆ログ保存
$payload = file_get_contents('php://input');
file_put_contents($LOG_FILE, date('Y-m-d H:i:s') . " - Payload: " . $payload . PHP_EOL, FILE_APPEND);

// ----------------------
// ビルド処理
// ----------------------
chdir($PROJECT_PATH);

// Git pull（必要なら有効化）
// exec("git checkout $BRANCH && git pull origin $BRANCH 2>&1", $output, $return_var);

// npm build
exec($BUILD_COMMAND . " 2>&1", $output, $return_var);

// ビルド結果ログ
file_put_contents($LOG_FILE, date('Y-m-d H:i:s') . " - Build output:\n" . implode("\n", $output) . PHP_EOL, FILE_APPEND);
file_put_contents($LOG_FILE, date('Y-m-d H:i:s') . " - Build exit code: $return_var" . PHP_EOL, FILE_APPEND);

if ($return_var === 0) {
    echo "Build succeeded";
} else {
    http_response_code(500);
    echo "Build failed";
}
