import React from "react";
import moment from "moment";
import { Box, Image, Button, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useBasket } from "../../context/BasketContext";

const Card = ({ product }) => {
  const { addToBasket, items } = useBasket();
  const toast = useToast();
  const findBasketItem = items.find((item) => item._id === product._id);
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link to={`/product/${product._id}`}>
        <Image
          src={product.photos[0]}
          width="500px"
          height="500px"
          alt="product image"
          loading="lazy"
        ></Image>
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {moment(product.createdAt).format("MMM, D YYYY")}
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {product.title}
          </Box>
          <Box>{product.price} ₺</Box>
        </Box>
      </Link>
      <Button
        colorScheme={findBasketItem ? "pink" : "green"}
        onClick={async () => {
          await addToBasket(product, findBasketItem);
          !findBasketItem
            ? toast({
                title: "Product added",
                description: "Product was added to basket succesfully",
                status: "success",
                duration: 1000,
                isClosable: true,
                position: "bottom-right",
              })
            : toast({
                title: "Product deleted",
                description: "Product was removed to basket succesfully",
                status: "warning",
                duration: 1000,
                isClosable: true,
                position: "bottom-right",
              });
        }}
      >
        {findBasketItem ? "Remove from basket" : "Add to basket"}
      </Button>
    </Box>
  );
};

export default Card;
