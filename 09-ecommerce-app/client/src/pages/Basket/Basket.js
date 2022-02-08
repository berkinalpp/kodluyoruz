import { useRef, useState } from "react";
import { useBasket } from "../../context/BasketContext";
import {
  Alert,
  AlertIcon,
  Image,
  Button,
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import { postOrder } from "../../api";
import { Link } from "react-router-dom";

const Basket = () => {
  const toast = useToast();
  const [address, setAdress] = useState("");
  const { items, removeFromBasket, clearBasket } = useBasket();
  const initialRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const total = items.reduce((acc, obj) => acc + obj.price, 0);

  const handleSubmit = async () => {
    const itemsID = items.map((item) => item._id);
    const input = {
      items: JSON.stringify(itemsID),
      address: address,
    };
    try {
      const response = await postOrder(input);
      toast({
        title: "Order Created !",
        description: "We've created your order for you ",
        status: "success",
        duration: 2500,
        isClosable: true,
      });
      clearBasket();
      onClose();
      console.log(response);
    } catch (e) {
      toast({
        title: "Opps!, An error",
        description: e.message,
        status: "error",
        duration: 2500,
        isClosable: true,
      });
      onClose();
      console.log(e);
    }
  };

  return (
    <Box p="5">
      {items.length < 1 && (
        <Alert status="warning">
          <AlertIcon />
          You have not any items in your basket
        </Alert>
      )}

      {items.length > 0 && (
        <>
          <ul>
            {items.map((item) => (
              <li key={item._id} style={{ marginBottom: 15 }}>
                <Link to={`/product/${item._id}`}>
                  <Text fontSize="18">
                    {item.title} - {item.price} ₺
                  </Text>
                  <Image
                    htmlWidth={200}
                    src={item.photos[0]}
                    alt="basket item"
                    loading="lazy"
                  ></Image>
                </Link>
                <Button
                  mt="4"
                  size="sm"
                  colorScheme="pink"
                  onClick={() => removeFromBasket(item._id)}
                >
                  Remove from basket
                </Button>
              </li>
            ))}
          </ul>
          <Box mt="10">
            <Text fontSize="22">Total : {total} ₺</Text>
          </Box>

          <Button mt="4" colorScheme="green" onClick={onOpen}>
            Order
          </Button>

          <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Create a order</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Address</FormLabel>
                  <Textarea
                    ref={initialRef}
                    placeholder="Adress"
                    value={address}
                    onChange={(e) => setAdress(e.target.value)}
                  />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                  Order
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </Box>
  );
};

export default Basket;
