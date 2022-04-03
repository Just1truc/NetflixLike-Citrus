const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.status(401).send({"msg" : "No token, authorization denied"});

  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) return res.status(403).send({"msg" : "Token is not valid"});
    else {
      req.id = user.id;
      next();
    }
  })
};
