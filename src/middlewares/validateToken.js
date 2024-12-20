import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {

    const { token } = req.cookies;

    if (!token)
      return res.status(401).json({ message: "No token, Autorizacion denegado" });

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
      if (err)
        return res.status(401).json({ message: "El Token no es valido" });
        req.user = user;
      next();
    });
};