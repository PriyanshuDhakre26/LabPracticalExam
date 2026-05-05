function isAuthenticated(req, res, next) {
  if (req.session.user) {
    next(); 
  } else {
    res.send("Access Denied! Please login first.");
  }
}

module.exports = isAuthenticated;
