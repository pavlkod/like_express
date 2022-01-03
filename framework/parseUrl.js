module.exports = baseURL => (req, res) => {
  const parsedUrl = new URL(req.url, baseURL);
  req.pathname = parsedUrl.pathname;
};
