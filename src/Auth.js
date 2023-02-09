import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import LoginOutlinedIcon from '@mui/icons-material/Login';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';

function Auth() {
    const [isSignUp, setIsSignUp] = useState(false);
    const[input , setInput] = useState({
        name:'',
        email:'',
        password:''
    });
    const handleChange = (e) =>{
        setInput((prevState)=>({
            ...prevState,[e.target.name] : e.target.value
        }))
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(input);
    }
    const resetSignup = () =>{
        setIsSignUp(!isSignUp);
        setInput({name:'',email:'',password:''});
    }
   
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent="center"
          margin="auto"
          marginTop={5}
          padding={5}
          borderRadius={5}
          boxShadow="5px 5px 10px #ccc"
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignUp ? "SignUp" : "Login"}
          </Typography>
          <TextField
          name="name"
          value={input.name}
          onChange={handleChange}
            margin="normal"
            type={"text"}
            variant="outlined"
            placeholder="Name"
          />
          {isSignUp && <TextField
          name="email"
          value={input.email}
          onChange={handleChange}
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="Email"
          />}
          <TextField
          name="password"
          value={input.password}
          onChange={handleChange}
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
          />
          <Button endIcon={isSignUp ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon />}
          type="submit"
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="warning"
          >
            {isSignUp ? "SignUp" : "Login"}
          </Button>
          <Button endIcon={isSignUp ? <LoginOutlinedIcon /> : <HowToRegOutlinedIcon />}
          onClick={resetSignup} sx={{ marginTop: 3, borderRadius: 3 }}>
            Click Here to {isSignUp ? "Login" : "SignUp"}
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Auth;
