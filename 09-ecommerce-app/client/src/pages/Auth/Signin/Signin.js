import React from "react";
import {
  Flex,
  Box,
  Heading,
  Button,
  FormControl,
  Input,
  FormLabel,
  Text,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import validateSchema from "./validation";
import { fetchLogin } from "../../../api";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const { login } = useAuth();
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: async (values, bag) => {
      try {
        const loginResponse = await fetchLogin({
          email: values.email,
          password: values.password,
        });
        login(loginResponse, () => {
          navigate("/profile");
        });
      } catch (e) {
        bag.setErrors({ general: e.response.data.message });
      }
    },
    validationSchema: validateSchema,
  });
  return (
    <div>
      <Flex align="center" justifyContent="center" width="full">
        <Box pt={10}>
          <Box>
            <Heading>Sign In</Heading>
          </Box>
          <Box my="5">
            {formik.errors.general && (
              <Alert status="error">
                <AlertIcon />
                {formik.errors.general}
              </Alert>
            )}
          </Box>
          <Box my="5" textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl mt="5">
                <FormLabel>E-Mail</FormLabel>
                <Input
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  isInvalid={formik.touched.email && formik.errors.email}
                />
              </FormControl>
              <FormControl mt="5">
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  isInvalid={formik.touched.password && formik.errors.password}
                />
              </FormControl>

              <Button w="full" mt="5" type="submit">
                Login
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
};

export default Signin;
