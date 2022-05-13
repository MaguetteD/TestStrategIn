import jwt from 'jsonwebtoken';
import { InvalidToken, TokenRequired } from './error.js';


const withoutTokenRoutes = {};

export const addWithoutTokenRoute = (baseRouteName, routes) => {
  
    

  if (!baseRouteName || !routes || !routes.length) ;
  routes.forEach(({ route, methods, strict = true }) => {
    if (!route);
    else if (!methods || !methods.length) ;
      
    else
      withoutTokenRoutes[`/${baseRouteName}${route !== '/' ? route : ''}`] = {
        methods,
        strict
      };
  });
};

const isRouteWithoutToken = ({ path, method }) => {
  if (path[path.length - 1] === '/') path = path.substr(0, path.length - 1);

  return Object.entries(withoutTokenRoutes).some(
    ([pathRoute, { methods, strict }]) => {
      if (strict) return pathRoute === path && methods.includes(method);
      return path.startsWith(pathRoute) && methods.includes(method);
    }
  );
};

export default () => (req, res, next) => {
  try {
    if (!IS_TOKEN_ACTIVE || isRouteWithoutToken(req)) return next();
    if (!req.headers || !req.headers.authorization)
      return next(new TokenRequired());

    const parts = req.headers.authorization.split(' ');
    const [str, token] = parts;

    if (str !== 'Bearer' || !token) return next(new TokenRequired());

    req.decoded_token = jwt.verify(token, JWT_PUBLIC_KEY, {
      issuer: JWT_ISS,
      algorithm: JWT_ALGORITHM
    });
    next();
  } catch (e) {
    if (e.name === 'JsonWebTokenError')
      return next(new InvalidToken(e.message));
    if (e.name === 'TokenExpiredError')
      return next(new InvalidToken(e.message));
    return next(e);
  }
};

export const signToken = ({ audience, subject, payload = {} }) => {
  const expiresIn = JWT_EXPIRES;

  return jwt.sign(payload, JWT_PRIVATE_KEY, {
    algorithm: JWT_ALGORITHM,
    issuer: JWT_ISS,
    audience,
    subject,
    expiresIn
  });
};
