/**
 * All data coming in and going out will be converted to/from JSON.
 *
 * Promises should be resolved with response data from the server, decoded from JSON.
 *
 * Hints:
 *
 *   - `fetch' returns a promise that yield a response object.
 *
 *   - The response object has a `json' method that returns a promise.
 *
 * The `fetch' API: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */
export const Ajax = (() => {
  const raw = async (url, method, data) => {
    const response = await fetch(
      url,
      { body: JSON.stringify(data), method },
    )
    return response.json()
  }

  // HTTP GET (Fetch resource).
  const get = (url) => {
    return raw(url, 'GET')
  }

  // HTTP POST (Create new resource).
  const post = (url, data) => {
    return raw(url, 'POST', data)
  }

  // HTTP PATCH (Update existing resource).
  const patch = (url, data) => {
    return raw(url, 'PATCH', data)
  }

  // HTTP DELETE (Delete existing resource).
  const del = (url) => {
    return raw(url, 'DELETE')
  }

  // Return the public interface.
  return { get, post, patch, del }
})()
