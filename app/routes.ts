import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("auth", "routes/auth.tsx", [
    route("login", "pages/auth/login.tsx"),
    route("register", "pages/auth/register.tsx"),
  ]),
] satisfies RouteConfig;
