import { app, start } from 'server/server';
import { routes } from 'routes/route';

app.register(routes);

start();