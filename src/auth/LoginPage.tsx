import { useEffect, useState } from "react";
import { Get, Post } from "./api/v1/api";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import { InstanceSettings } from "@app/Server/Auth/server";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [password, setpassword] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [InvalidPass, setInvalidPass] = useState<string>("");
  const [logued, setLogued] = useState<boolean>(false);

  const finallyz = (data: boolean) => {
    // console.log("finallyz: ", data);
  };
  const invalid = (data: any) => {
    // console.log("invalid: ", data);
    setInvalidPass(data);
  };
  const result = (data: any) => {
    if (data === "loged") {
      InstanceSettings.setLogin(email, password);
      navigate("/dashboard");
      setpassword("");
      setemail("");
      return;
    }
    console.log("result: ", data);
    setInvalidPass(data);
    setpassword("");
    setemail("");
  };

  const SingIn = async () => {
    if (email === "" || password === "") {
      alert("Preencha os campos antes de enviar um formulario !!!");
      return;
    }
    // await Get("users", {}, finallyz, invalid,result);
    await Get(
      "user",
      { email: email, password: password },
      finallyz,
      invalid,
      result
    );
  };

  const ResetPassword = async () => {
    if (email === "" || password === "") {
      alert("Preencha os campos antes de enviar um formulario !!!");
      return;
    }

    await Get(
      "user",
      {
        email: email,
        password: password,
      },
      finallyz,
      invalid,
      result
    );

    const templateParams = {
      from_name: "",
      message: "",
      email: email,
    };
    emailjs
      .send(
        "service_37uo86h",
        "template_myopetv",
        templateParams,
        "S924UBEvw-sG6c5Pk"
      )
      .then(
        (response) => {
          setpassword("");
          setemail("");
          console.log("Email enviado", response.status, response.text);
        },
        (error) => {
          console.log("ERROR:", error);
        }
      );
  };
  const Register = async () => {
    if (email === "" || password === "") {
      alert("Preencha os campos antes de enviar um formulario !!!");
      return;
    }
    await Post(
      "setUser",
      {
        email: email,
        password: password,
      },
      finallyz,
      invalid,
      result
    );
    setpassword("");
    setemail("");
  };

  return (
    <section className="w-[100vw] h-[100vh] flex  justify-center items-center bg-gradient-to-l from-[#2d2d2d] to-[#0a0a0a]">
      <div className="w-[90vw] h-[90vh] flex flex-col justify-start items-center  rounded mt-20">
        <div className="w-[529px] h-[215px] flex flex-col  justify-center items-center ">
          <h1 className="text-white text-[30px] lg:text-[40px] font-lalezar">
            Sign in
          </h1>
          <div className="flex flex-row justify-center items-center gap-4 pt-6">
            {/* <button className="border-[1rem] border-black rounded-custom  p-4">
              <svg
                width="30"
                height="30"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_12_33)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M30 0C46.569 0 60 13.7698 60 30.7588C60 44.3458 51.414 55.8719 39.501 59.9429C37.98 60.2459 37.44 59.2853 37.44 58.4663C37.44 57.4523 37.476 54.1404 37.476 50.0244C37.476 47.1564 36.516 45.2846 35.439 44.3306C42.12 43.5686 49.14 40.9673 49.14 29.1533C49.14 25.7933 47.976 23.0515 46.05 20.8975C46.362 20.1205 47.391 16.9919 45.756 12.7559C45.756 12.7559 43.242 11.9317 37.515 15.9097C35.118 15.2287 32.55 14.886 30 14.874C27.45 14.886 24.885 15.2287 22.491 15.9097C16.758 11.9317 14.238 12.7559 14.238 12.7559C12.609 16.9919 13.638 20.1205 13.947 20.8975C12.03 23.0515 10.857 25.7933 10.857 29.1533C10.857 40.9373 17.862 43.5785 24.525 44.3555C23.667 45.1235 22.89 46.4783 22.62 48.4673C20.91 49.2533 16.566 50.6136 13.89 45.9126C13.89 45.9126 12.303 42.9572 9.291 42.7412C9.291 42.7412 6.366 42.7024 9.087 44.6104C9.087 44.6104 11.052 45.5554 12.417 49.1104C12.417 49.1104 14.178 54.6002 22.524 52.7402C22.539 55.3112 22.566 57.7343 22.566 58.4663C22.566 59.2793 22.014 60.2308 20.517 59.9458C8.59499 55.8808 0 44.3488 0 30.7588C0 13.7698 13.434 0 30 0Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_12_33">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button> */}
            <button className="border-[1rem] border-black rounded-custom p-4">
              <svg
                width="30"
                height="30"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M55.875 30.6037C55.875 28.8187 55.7287 27.0262 55.4212 25.2712H30.5212V35.3775H44.7787C44.4846 36.9948 43.8653 38.5356 42.9584 39.9066C42.0515 41.2776 40.8758 42.4503 39.5025 43.3537V49.9162H48.0112C53.0062 45.3412 55.875 38.5912 55.875 30.6037Z"
                  fill="#4285F4"
                />
                <path
                  d="M30.525 56.25C37.6425 56.25 43.6462 53.925 48.0187 49.9125L39.5137 43.3537C37.1475 44.955 34.0913 45.8625 30.5325 45.8625C23.6475 45.8625 17.8088 41.2425 15.7125 35.0325H6.9375V41.7937C9.1485 46.1483 12.5234 49.8047 16.6874 52.3567C20.8513 54.9087 25.6412 56.2564 30.525 56.25Z"
                  fill="#34A853"
                />
                <path
                  d="M15.7013 35.0324C14.5954 31.7737 14.5954 28.2412 15.7013 24.9824V18.2212H6.93375C5.08742 21.8758 4.12549 25.913 4.12549 30.0074C4.12549 34.1019 5.08742 38.1391 6.93375 41.7937L15.7013 35.0324Z"
                  fill="#FBBC04"
                />
                <path
                  d="M30.525 14.1374C34.2849 14.0765 37.9192 15.4898 40.65 18.0749L48.1875 10.5787C43.3971 6.11642 37.0712 3.67203 30.525 3.75369C25.6399 3.7475 20.8488 5.09649 16.6846 7.65063C12.5204 10.2048 9.14627 13.8639 6.9375 18.2212L15.6975 24.9749C17.7825 18.7574 23.6325 14.1374 30.5175 14.1374H30.525Z"
                  fill="#EA4335"
                />
              </svg>
            </button>
            <button className="border-[1rem] border-black rounded-custom p-4">
              <svg
                width="30"
                height="30"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.25 43.125L18.75 48.125C15.5656 46.7981 12.2681 45.4712 8.7625 43.1875C7.54 42.3909 6.79875 41.0375 6.76938 39.5788C6.61688 32.09 8.37375 24.5613 12.8222 16.6013C13.4044 15.5594 14.3744 14.7956 15.4994 14.3963C18.1831 13.4438 20.005 12.7075 23.125 12.1875L25 15.625C25 15.625 26.875 15 30 15C33.125 15 35 15.625 35 15.625L36.875 12.1875C39.995 12.7075 41.8169 13.4438 44.5006 14.3963C45.6256 14.7956 46.5956 15.5594 47.1778 16.6013C51.6263 24.5613 53.3831 32.09 53.2309 39.5788C53.2013 41.0375 52.46 42.3909 51.2375 43.1875C47.7319 45.4712 44.4347 46.7981 41.25 48.125L38.75 43.125M17.5 40.625C17.5 40.625 23.75 43.75 30 43.75C36.25 43.75 42.5 40.625 42.5 40.625"
                  stroke="white"
                  stroke-width="3.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22.1875 36.25C24.4312 36.25 26.25 34.1513 26.25 31.5625C26.25 28.9737 24.4312 26.875 22.1875 26.875C19.9438 26.875 18.125 28.9737 18.125 31.5625C18.125 34.1513 19.9438 36.25 22.1875 36.25Z"
                  fill="white"
                />
                <path
                  d="M37.8125 36.25C40.0562 36.25 41.875 34.1513 41.875 31.5625C41.875 28.9737 40.0562 26.875 37.8125 26.875C35.5688 26.875 33.75 28.9737 33.75 31.5625C33.75 34.1513 35.5688 36.25 37.8125 36.25Z"
                  fill="white"
                />
              </svg>
            </button>
            {/* <button className="border-[1rem] border-black rounded-custom p-4">
              <svg
                width="20"
                height="20"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.94837 57.404H9.74847C10.8246 57.404 11.6968 56.5316 11.6968 55.4555V21.3615C11.6968 20.2852 10.8246 19.4131 9.74847 19.4131H1.94837C0.872153 19.4131 0 20.2852 0 21.3615V55.4555C0 56.5315 0.872153 57.404 1.94837 57.404Z"
                  fill="white"
                />
                <path
                  d="M1.94837 13.4192H9.74847C10.8246 13.4192 11.6968 12.547 11.6968 11.4709V4.54432C11.6968 3.46821 10.8246 2.59595 9.74847 2.59595H1.94837C0.872153 2.59595 0 3.46821 0 4.54432V11.4709C0 12.547 0.872153 13.4192 1.94837 13.4192Z"
                  fill="white"
                />
                <path
                  d="M57.0652 23.3677C55.9691 21.9249 54.3529 20.7384 52.2158 19.8084C50.0788 18.8791 47.7199 18.4141 45.1391 18.4141C39.8999 18.4141 35.4604 20.4136 31.8208 24.4133C31.0966 25.2091 30.5701 25.0352 30.5701 23.9589V21.3616C30.5701 20.2854 29.6977 19.4132 28.6216 19.4132H21.6539C20.5777 19.4132 19.7056 20.2854 19.7056 21.3616V55.4557C19.7056 56.5318 20.5778 57.4041 21.6539 57.4041H29.454C30.5302 57.4041 31.4024 56.5318 31.4024 55.4557V43.5986C31.4024 38.659 31.7007 35.2732 32.2972 33.4417C32.8936 31.6102 33.997 30.1396 35.6065 29.0295C37.2162 27.9194 39.0337 27.3641 41.0598 27.3641C42.6415 27.3641 43.9945 27.7527 45.1186 28.53C46.2426 29.3071 47.0544 30.3958 47.5539 31.7976C48.0536 33.1991 48.3033 36.2863 48.3033 41.0596V55.4555C48.3033 56.5317 49.1754 57.404 50.2515 57.404H58.0516C59.1277 57.404 59.9999 56.5317 59.9999 55.4555V36.1475C59.9999 32.7343 59.7847 30.1117 59.355 28.2802C58.9253 26.4487 58.1619 24.8112 57.0652 23.3677Z"
                  fill="white"
                />
              </svg>
            </button> */}
          </div>
        </div>
        <h1 className="font-lalezar text-[20px] lg:text-[20px]">
          Or use your email password
        </h1>
        <div className="flex flex-col justify-center items-start mt-20 gap-2">
          <label htmlFor="" className="text-[15px]">
            Email
          </label>
          <input
            onChange={(e: any) => setemail(e.target.value)}
            value={email}
            type="email"
            name=""
            id=""
            className="w-[17rem] h-[3rem] rounded bg-gray-400/20 hover:bg-gray-400 placeholder:text-gray-800 text-gray-800 font-lalezar text-4xl placeholder:text-start p-1 pl-4 placeholder:text-[14px] text-[18px] outline-none transition-all duration-500"
          />
          <label htmlFor="" className="text-[15px]">
            Password
          </label>
          <input
            onChange={(e: any) => setpassword(e.target.value)}
            value={password}
            type="password"
            name=""
            id=""
            className="w-[17rem] h-[3rem] rounded bg-gray-400/20 hover:bg-gray-400 placeholder:text-gray-800 text-gray-800 font-lalezar text-4xl placeholder:text-start p-1 pl-4 placeholder:text-[14px] text-[18px] outline-none transition-all duration-500"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-2 p-4 ">
          {InvalidPass && (
            <a
              className={`${
                InvalidPass !== "loged" && "text-red-700"
              } text-green-700 transition-all duration-500`}
            >
              {InvalidPass}
            </a>
          )}
          <a
            // href=""
            className="hover:text-blue-900 transition-all duration-500 mt-6"
            onClick={ResetPassword}
          >
            forget your password ?
          </a>
          <div className="flex flex-row justify-center items-center mt-8 gap-4 p-4 ">
            <button
              className="w-[6rem] h-[3rem] bg-blue-700 rounded hover:scale-[1.005] hover:shadow-md hover:shadow-blue-700 drop-shadow-sm transition-all duration-500"
              onClick={SingIn}
            >
              SIGN IN
            </button>
            <button
              className="w-[6rem] h-[3rem] bg-blue-700 rounded hover:scale-[1.005] hover:shadow-md hover:shadow-blue-700 drop-shadow-sm transition-all duration-500"
              onClick={Register}
            >
              REGISTER
            </button>
          </div>
        </div>
      </div>
      {/* <div className="w-[0vw] h-[100vh] bg-gradient-to-l from-blue-900/90 to-transparent rounded-ss"></div> */}
    </section>
  );
};
