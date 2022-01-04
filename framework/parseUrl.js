module.exports = baseURL => (req, res) => {
  const parsedUrl = new URL(req.url, baseURL);
  const params = {};
  parsedUrl.searchParams.forEach((value, key) => (params[key] = value));
  req.params = params;
  req.pathname = parsedUrl.pathname;
};
