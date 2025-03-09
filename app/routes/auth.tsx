import { Outlet } from "react-router";
import type { Route } from "./+types/auth";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Authentication" },

  ];
}

export default function Auth() {
  return <Outlet />;
}
