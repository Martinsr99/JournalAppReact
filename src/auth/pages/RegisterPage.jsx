
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useState } from "react";

const formData = {
  // email: 'martin@google.com',
  // password: '123456',
  // displayName: 'Martin Siles'
}

const formValidations = {
  email: [(value) => value?.includes('@'),'El correo debe de tener una @'],
  password: [(value) => value?.length >=6 ,'La contraseña debe de tener 6 caracteres'],
  displayName: [(value) => value?.length >=1 ,'El nombre es obligatorio']
}

export const RegisterPage = () => {

  const [formSubmitted, setFormSubmitted] = useState(false)

  const {
    displayName,email,password,onInputChange,formState,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData,formValidations)

  const onSubmit = () => {
    event.preventDefault();
    setFormSubmitted(true)
    if(!isFormValid) return
    console.log(formState)
  }

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Tu nombre"
              fullWidth={true}
              name='displayName'
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@google.com"
              fullWidth={true}
              name='email'
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            ></TextField>
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth={true}
              name='password'
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            ></TextField>
          </Grid>
          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={12}>
              <Button type="submit" variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{mr:1}}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
