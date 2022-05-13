import { Router } from 'express';
import fs from 'fs';
import { addWithoutTokenRoute } from '../outils/jwt-service.js';


  const router = Router();
export default async (app) => {
  await Promise.all(
    fs
      .readdirSync('./routes')
      .filter((routeName) =>routeName !== 'routesInitializer.js' )
      .map(async (routeName) => {
        try {
          const { default: route, withoutTokenRoutes } = await import(
            `./${routeName}`
          );
          route(router);
          if (withoutTokenRoutes)addWithoutTokenRoute(routeName, withoutTokenRoutes);
          app.use(`/${routeName}`, router);
        } catch (e) {
          //return e;
        }
      })
  );
};
