import axios from "axios";

const api = axios.create({
  baseURL: 'https://authdinamic.fenixdevelopment.com.br/',
  // baseURL: "http://localhost:3000/",
  timeout: 5000,
  headers: {
    "X-Custom-Header": "foobar",
    "Content-Type": "application/json; charset=utf-8",
  },
});

export const Post = (
  route: string,
  params: any,
  finallyz: (data: boolean) => void,
  _invalid: (data: any) => void,
  result: (data: any) => void
) => {
  api
    .post(`${route}`, { params: params })
    .then((response: { data: any; }) => {
      console.log(response.data);
      result(response.data);
    })
    .catch((error: { response: { data: { error: any; }; }; }) => {
      finallyz(true);
      result(error.response.data.error);
      return error;
    })
    .finally(() => {
      finallyz(true);
    });
};

// type GetTypes = {
//   route: string;
//   params?: any;
//   finallyz?: () => void;
//   invalid?: () => void;
//   result?: () => void;
// };
export const Get = (
  route: string,
  params: { email: string; password: string },
  finallyz: (data: boolean) => void,
  invalid: (data: any) => void,
  result: (data: any) => void
) => {
  api
    .get(`${route}`, { params: params })
    .then((response: any) => {
      if (response.data === "Invalid password.") {
        invalid(response.data);
        return;
      }
      result(response.data);
      return response.data;
    })
    .catch((error: { response: { data: { error: any; }; }; }) => {
      invalid(error.response.data.error);
      finallyz(true);
      return error;
    })
    .finally(() => {
      finallyz(true);
    });
};
