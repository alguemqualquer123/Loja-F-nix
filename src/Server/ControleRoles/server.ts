import { api } from "@app/config";
import { useEffect, useState } from "react";
import { InstanceSettings } from "@app/Server/Auth/server";

export const ControleRoles = () => {
  api
    .get("getAdmins")
    .then((response: any) => {
      InstanceSettings.setAllAdmins(response.data);
    })
    .catch((error) => console.error("Failed to load admin data", error));
};
export const CheckUserAdmin = () => {
  const allAdmins = InstanceSettings.getAllAdmins();
  const getUser = InstanceSettings.getUserProfile();
  const loggedInAdmin = allAdmins.some(
    (item) => item.discordId === getUser?.id
  );
  return loggedInAdmin;
};
