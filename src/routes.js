import bareRoutes from './routes/bare';
export default (store) => {
  const routes = bareRoutes({ store });
  return routes;
};
