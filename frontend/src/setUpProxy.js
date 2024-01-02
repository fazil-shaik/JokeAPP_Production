import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';
dotenv.config();
export default function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: `${process.env.BASE}`,
      changeOrigin: true,
    })
  );
};
