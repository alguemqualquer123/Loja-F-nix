import { api } from "@app/config";
import { InstanceSettings } from "@app/Server/Auth/server";
import axios from "axios";
import { useQuery } from "react-query";

export const ControleRoles = async () => {
  const response = await api.get(
    // "https://api.github.com/users/alguemqualquer123/repos"
    "https://authdinamic.fenixdevelopment.com.br/getAdmins"
  );
  InstanceSettings.setAllAdmins(response.data);
};
export const CheckUserAdmin = () => {
  const allAdmins = InstanceSettings.getAllAdmins();
  const getUser = InstanceSettings.getUserProfile();
  const loggedInAdmin = allAdmins.some(
    (item: { discordId: string | undefined }) => item.discordId === getUser?.id
  );
  return loggedInAdmin;
};

const Hyerarqui = ["Gerente", "Vendedor", "Postador", "Membro"];

export const getRoleIndex = (role: string) => {
  return Hyerarqui.indexOf(role);
};

export const HyerarquiList = (name: string | any): number | undefined => {
  if (Hyerarqui[name]) {
    return Hyerarqui.indexOf(name);
  }
  return;
};
