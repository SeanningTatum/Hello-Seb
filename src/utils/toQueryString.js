/**
 *
 * @param {Object} params
 * @returns {String}
 *
 * Example
 * toQueryString({a: 1, b: 2, c: 3})
 * Output: "a=1&b=2&c=3"
 */

export default function toQueryString(params) {
  return Object.keys(params).map((key) => `${key}=${params[key]}`).join('&');
}
