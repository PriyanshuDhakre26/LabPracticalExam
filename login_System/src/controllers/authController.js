
const USER = {
  username: "admin",
  password: "1234",
};


exports.login = (req, res) => {
  const { username, password } = req.body;

 
  if (username === USER.username && password === USER.password) {
    
    req.session.user = username;

    res.send("Login Successful");
  } else {
    res.send("Invalid Credentials");
  }
};


exports.dashboard = (req, res) => {
  res.send("Welcome to Dashboard");
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.send("Logged out successfully");
  });
};
