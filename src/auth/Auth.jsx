// import { Copyright, Visibility, VisibilityOff } from "@mui/icons-material";
// import {
//   Box,
//   Button,
//   Container,
//   Grid,
//   IconButton,
//   InputAdornment,
//   OutlinedInput,
//   TextField,
//   Typography,
// } from "@mui/material";
// import React from "react";
// import { useAuth } from "../context/AuthContextProvider";

// const Auth = () => {
//   const [showPassword, setShowPassword] = React.useState(false);
//   const handleClickShowPassword = () => setShowPassword((show) => !show);
//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//   };
//   const {
//     email,
//     password,
//     emailError,
//     passwordError,
//     setEmail,
//     setPassword,
//     setPasswordError,
//     user,
//     setUser,
//     handleRegister,
//     handleLogin,
//     handleLogOut,
//     authListener,
//     hasAccount,
//     setHasAccount,
//   } = useAuth();
//   return (
//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           {hasAccount ? "Login form" : "Register Now"}
//         </Typography>
//         <Box
//           onSubmit={handleSubmit}
//           noValidate
//           component="form"
//           sx={{
//             mt: 1,
//           }}
//         >
//           <TextField
//             label="Email Address"
//             name="email"
//             autoFocus
//             autoComplete="email"
//             required
//             fullWidth
//             margin="normal"
//             onChange={(e) => setEmail(e.target.value)}
//             value={email}
//             helperText={emailError}
//           />
//           <OutlinedInput
//             autoComplete="current-password"
//             id="outlined-adornment-password"
//             fullWidth
//             required
//             onChange={(e) => setPassword(e.target.value)}
//             value={password}
//             helperText={passwordError}
//             type={showPassword ? "text" : "password"}
//             endAdornment={
//               <InputAdornment position="end">
//                 <IconButton
//                   aria-label="toggle password visibility"
//                   onClick={handleClickShowPassword}
//                   onMouseDown={handleMouseDownPassword}
//                   edge="end"
//                 >
//                   {showPassword ? <VisibilityOff /> : <Visibility />}
//                 </IconButton>
//               </InputAdornment>
//             }
//             label="Password"
//           />
//           {hasAccount ? (
//             <Button
//               fullWidth
//               type="submit"
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//               onClick={handleLogin}
//             >
//               Login
//             </Button>
//           ) : (
//             <Button
//               fullWidth
//               type="submit"
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//               onClick={handleRegister}
//             >
//               Register Now
//             </Button>
//           )}
//           <Grid container>
//             <Grid item>
//               <Typography
//                 variant="body2"
//                 onClick={() => setHasAccount(!hasAccount)}
//                 sx={{
//                   cursor: "pointer",
//                   textDecoration: "underline",
//                   marginBottom: "50px",
//                 }}
//               >
//                 {hasAccount
//                   ? "Don't have an account?  Register now"
//                   : "Already have an account? Login"}
//               </Typography>
//             </Grid>
//             {/* <Copyright sx={{ mt: 0, mb: 4 }} /> */}
//           </Grid>
//         </Box>
//       </Box>
//     </Container>
//   );
// };
// export default Auth;
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useAuth } from "../context/AuthContextProvider";
import "./Auth.css"; // Import the CSS for styling

const Auth = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const {
    email,
    password,
    emailError,
    passwordError,
    setEmail,
    setPassword,
    handleRegister,
    handleLogin,
    hasAccount,
    setHasAccount,
  } = useAuth();

  return (
    <div className="auth-container">
      <div className="ring">
        <i style={{ "--clr": "#00ff0a" }}></i>
        <i style={{ "--clr": "#ff0057" }}></i>
        <i style={{ "--clr": "#fffd44" }}></i>
        <div className="login">
          <h2>{hasAccount ? "Login" : "Register Now"}</h2>
          <Box
            onSubmit={handleSubmit}
            component="form"
            sx={{ width: "100%", mt: 1 }}
          >
            <TextField
              label="Email Address"
              name="email"
              autoFocus
              autoComplete="email"
              required
              fullWidth
              margin="normal"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              helperText={emailError}
              variant="outlined"
              InputLabelProps={{
                style: { color: "#111" },
              }}
              InputProps={{
                style: { color: "#111" },
                notchedOutline: {
                  borderColor: "#111 !important",
                },
              }}
            />
            <OutlinedInput
              autoComplete="current-password"
              fullWidth
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              placeholder="Password"
              sx={{
                marginTop: 2,
                marginBottom: 2,
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#111",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#111",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#111",
                },
                "& input": {
                  color: "#111",
                },
              }}
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{
                background: hasAccount ? "#0078ff" : "#ff357a",
                background: hasAccount
                  ? "linear-gradient(45deg, #0078ff, #00ff0a)"
                  : "linear-gradient(45deg, #ff357a, #fff172)",
                mt: 3,
                mb: 2,
                color: "white",
              }}
              onClick={hasAccount ? handleLogin : handleRegister}
            >
              {hasAccount ? "Login" : "Register Now"}
            </Button>
            <Typography
              variant="body2"
              onClick={() => setHasAccount(!hasAccount)}
              sx={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "#111",
                textAlign: "center",
                display: "block",
                marginTop: "10px",
              }}
            >
              {hasAccount
                ? "Don't have an account? Register now"
                : "Already have an account? Login"}
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Auth;
