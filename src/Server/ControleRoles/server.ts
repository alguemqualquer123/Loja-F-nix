import { api } from "@app/config";
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
