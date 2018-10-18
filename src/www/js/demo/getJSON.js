// Cache the result of any async function.
async function withCache(key, f) {
  let cached = sessionStorage.getItem(key);
  if (cached !== null) return JSON.parse(cached || null);

  let result = await f();
  sessionStorage.setItem(key, JSON.stringify(result));

  return result;
}

// Simple wrapper around window.fetch.
function getJSON(url, useCache=true) {
  let f = async function() {
    let response = await fetch(url);
    if (!response.ok) throw "unexpected HTTP status";
    return response.json();
  };

  if (useCache) return withCache(url, f);
  else return f();
}
