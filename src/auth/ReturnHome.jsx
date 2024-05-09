import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InstanceSettings } from "@app/Server/Auth/server";
export const Return = ({ path }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (path === "gerenciar" && !InstanceSettings.getUserProfile()) {
      return;
    } else {
      navigate(path);
      return;
    }
  }, []);
  return <></>;
};
