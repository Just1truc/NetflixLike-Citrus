const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log(req.headers);
  const token = authHeader && authHeader.split(' ')[1];
  console.log(token);
  if (token === undefined) return res.status(200).send({"msg" : "No token, authorization denied"});

  jwt.verify(token, process.env.SECRET, (err, user) => {
    if (err) return res.status(200).send({"msg" : "Token is not valid"});
    else {
      req.id = user.id;
      next();
    }
  })
};
