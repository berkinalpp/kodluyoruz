import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchProductDetail } from "../../api";
import { Box, Text, Button, Center, useToast } from "@chakra-ui/react";
import moment from "moment";
import ImageGallery from "react-image-gallery";
import { useBasket } from "../../context/BasketContext";

const ProductDetail = () => {
  const { addToBasket, items } = useBasket();
  const toast = useToast();
  const { product_id } = useParams();
  const { isLoading, error, data } = useQuery(["product", product_id], () =>
    fetchProductDetail(product_id)
  );
  if (isLoading) return "Loading...";
  if (error) return "An error has occured: " + error.message;

  const findBasketItem = items.find((item) => item._id === product_id);
  const images = data.photos.map((url) => ({ original: url }));
  console.log(data);
  return (
    <div>
      <Center>
        <Box w="70%">
          <Text as="h2" fontSize="2xl">
            {data.title}
          </Text>
          <Text as="h2" fontSize="2xl">
            {moment(data.createdAt).format("MMM, DD YYYY")}
          </Text>
          <p>{data.description}</p>
          <Text as="h2" fontSize="2xl">
            {`${data.price} ₺`}
          </Text>
          <Button
            colorScheme={findBasketItem ? "pink" : "green"}
            variant="outline"
            mt="20px"
            onClick={async () => {
              await addToBasket(data, findBasketItem);
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
      </Center>

      <Box mt="50px">
        <ImageGallery items={images}></ImageGallery>
      </Box>
    </div>
  );
};

export default ProductDetail;
