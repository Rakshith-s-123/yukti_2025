const authenticate = (req, res, next) => {
    const token = req.cookies.token;
    console.log("Token: ", token); // Log token to verify
    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      console.error(err.message);
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
  

module.exports = authenticate;
