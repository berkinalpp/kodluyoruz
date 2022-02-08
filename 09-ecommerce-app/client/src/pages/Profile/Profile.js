import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Heading, Flex, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();
  const { user, logout } = useAuth();
  const handleLogout = async () => {
    logout(() => {
      navigate("/");
    });
  };
  return (
    <div>
      <Flex align="center" flexDirection="column">
        <Heading>Profile</Heading>
        <code>{JSON.stringify(user)}</code>
        <Button
          my="5"
          colorScheme="blue"
          variant="outline"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Flex>
    </div>
  );
};

export default Profile;
