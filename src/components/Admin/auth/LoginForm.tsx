import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  InputAdornment,
  outlinedInputClasses,
  TextField,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { prefixer } from "stylis";
import email from "assets/icons/email.svg";
import eye from "assets/icons/eye.svg";
import lock from "assets/icons/lock password.svg";
import { login } from "services/Admin/authService";
import { ACCESS_TOKEN } from "utils/Admin/constant";
import { loginSchema } from "validation-schema/loginSchema";
import rtlPlugin from "stylis-plugin-rtl";
const theme = createTheme({
  direction: "rtl",

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "--TextField-brandBorderColor": "#9ea0a5",
          "--TextField-brandBorderHoverColor": "#9ea0a5",
          "--TextField-brandBorderFocusedColor": "#9ea0a5",
          "&  .MuiFormHelperText-root.Mui-error": {
            position: "absolute",
            bottom: -25,
          },
          "& label.Mui-focused": {
            color: "#9ea0a5",
          },
          "& label": {
            color: "#9ea0a5",
          },
        },
      },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#1A1D1F",
          borderRadius: "20px",
        },
        root: {
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "#1A1D1F",
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: "#1A1D1F",
          },
        },
      },
    },

    MuiInput: {
      styleOverrides: {
        root: {
          "&::before": {
            borderBottom: "2px solid #1A1D1F",
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: "2px solid #1A1D1F",
          },
          "&.Mui-focused:after": {
            borderBottom: "2px solid #1A1D1F",
          },
        },
      },
    },
  },
});

const cacheRtl = createCache({
  key: "muirtl",
  //@ts-ignore
  stylisPlugins: [prefixer, rtlPlugin],
});

const LoginForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      setIsSubmitting(true);
      const res = (await login(data.email, data.password)) as {
        token: string;
      };
      localStorage.setItem(ACCESS_TOKEN, res.token);
      localStorage.setItem("user-role", "admin");
      navigate("/AdminDashboard");
    } catch (err: any) {
      console.error("Error: ", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  return (
    <>
      <form className="w-11/12 sm:w-9/12 xl:w-6/12 h-fit rounded-[25px] flex flex-col items-center justify-around gap-6 px-5 pb-14 lg:px-20 md:pt-10 bg-[#2B2424] z-10 relative mb-10">
        <div className="w-4/12 h-[14px] bg-gradient-to-t from-red-500 from-80% via-transparent absolute top-[-2px] rounded-md "></div>
        <h1 className="text-white text-2xl md:text-4xl font-bold mb-5 pt-10">
          تسجيل الدخول
        </h1>

        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <div className="flex flex-col gap-8 w-full " dir="rtl">
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={{
                      input: { color: "#9EA0A5", paddingLeft: 5 },
                    }}
                    InputLabelProps={{
                      style: { fontWeight: "400", marginRight: 30 },
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <img
                            src={email}
                            alt="mail icon"
                            className="absolute right-2 "
                          />
                        </InputAdornment>
                      ),
                    }}
                    className="bg-black-950 rounded-[20px] relative"
                    error={errors.email && true}
                    helperText={errors.email && errors.email.message}
                    label="البريد الإلكتروني "
                    variant="outlined"
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={{
                      input: { color: "#9EA0A5", paddingLeft: 5 },
                    }}
                    InputLabelProps={{
                      style: { fontWeight: "400", marginRight: 30 },
                    }}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <img
                            src={lock}
                            alt="lock icon"
                            className="absolute right-2 "
                          />
                          <img
                            src={eye}
                            alt="eye icon"
                            onClick={handleClickShowPassword}
                          />
                        </InputAdornment>
                      ),
                    }}
                    className="bg-black-950 rounded-[20px]"
                    error={errors.password && true}
                    helperText={errors.password && errors.password.message}
                    type={showPassword ? "text" : "password"}
                    label="كلمة المرور"
                    variant="outlined"
                  />
                )}
              />
              <Link to="#" className="text-white w-fit">
                هل نسيت كلمة المرور ؟
              </Link>
            </div>
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#F23A3A",
                fontSize: 18,
                fontWeight: "bold",
                fontFamily: "IBM Plex Sans Arabic",
                padding: 2,
                borderRadius: "px",
                ":hover": { backgroundColor: "#F23A3A" },
              }}
              className=" w-full p-5"
              onClick={handleSubmit(onSubmit)}
              disabled={!isValid || isSubmitting}
            >
              تسجيل الدخول
            </Button>
          </ThemeProvider>
        </CacheProvider>
      </form>
    </>
  );
};

export default LoginForm;
