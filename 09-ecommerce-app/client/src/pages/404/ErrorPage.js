import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <div>
      <Alert status="error">
        <AlertIcon />
        <AlertTitle mr={2}>404 Not Found !</AlertTitle>
        <AlertDescription>Page is not available</AlertDescription>
        <CloseButton position="absolute" right="8px" top="8px" />
      </Alert>
    </div>
  );
};

export default ErrorPage;
