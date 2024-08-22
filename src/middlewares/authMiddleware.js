import jwt from 'jsonwebtoken';

export const authenticate = (req, res) => {
    const {token} = req.cookies;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, userData) => {
          if (err) return res.status(403).json({ message: 'Unauthorized' });
          req.user = userData;
          next();
        });
      } else {
        res.status(403).json({ message: 'Unauthorized' });
      }
};

