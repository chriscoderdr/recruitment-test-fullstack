"use client";
import { authService } from "@app/service/auth";
import { Button } from "@components/button/button";

export const LogoutContainer = () => {
  const onLogout = () => {
    authService.logout();
  };

  return <Button value="Logout" onClick={onLogout} />;
};
