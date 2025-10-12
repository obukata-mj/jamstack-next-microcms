/**
 * 指定された日付を "YYYY-MM-DD" の形式にフォーマットします。
 *
 * @param {string|Date} date - フォーマットする日付。ISO 8601形式の文字列または Date オブジェクトを指定できます。
 * @returns {string} フォーマットされた日付文字列 ("YYYY-MM-DD" の形式)。
 * @throws {TypeError} 無効な日付文字列や Date オブジェクト以外の値が渡された場合にエラーをスローします。
 */
export const formatDate = (date) => {
  return new Date(date).toISOString().split("T")[0]
}

/**
 * 日付を "YYYY.MM.DD" 形式にフォーマットする関数
 *
 * @param {string|Date} date - フォーマットする対象の日付。文字列または Date オブジェクト。
 * @returns {string} フォーマット済みの日付。例: "2025.01.02"
 *
 * @example
 * // 使用例
 * formatDotSplitDate("2025-01-02T04:06:07.484Z"); // "2025.01.02"
 */
export const formatDotSplitDate = (date) => {
  return new Date(date).toISOString().split("T")[0].replace(/-/g,'.')
}