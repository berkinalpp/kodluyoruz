import React from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  Spinner,
  Alert,
  AlertIcon,
  Text,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Flex,
} from "@chakra-ui/react";
import { fetchProductDetail, updateProduct } from "../../../api";
import { Formik, FieldArray } from "formik";
import validationSchema from "./validations";
import { message } from "antd";

const ProductDetail = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { isLoading, isError, data, error } = useQuery(
    ["admin:product", id],
    () => fetchProductDetail(id)
  );

  const updateMutation = useMutation(updateProduct, {
    onSuccess: () => queryClient.invalidateQueries("admin:products"),
  });

  console.log(updateMutation);

  if (isLoading) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }

  if (isError) {
    return (
      <Alert status="error">
        <AlertIcon />
        Error : {error.message}
      </Alert>
    );
  }

  const handleSubmit = async (values, bag) => {
    message.loading({ content: "Loading..", key: "product_update" });
    try {
      await updateProduct(values, id);
      message.success({
        content: "The product successfully updated",
        key: "product_update",
        duration: 2,
      });
      updateMutation.mutate();
    } catch {
      message.error("The product doesn't updated");
    }
  };

  return (
    <div>
      <Text fontSize="2xl" textAlign="center">
        Edit Product
      </Text>
      <Formik
        initialValues={{
          title: data.title,
          description: data.description,
          price: data.price,
          photos: data.photos,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          errors,
          touched,
          handleChange,
          handleBlur,
          values,
          isSubmitting,
        }) => (
          <>
            <Box>
              <Box my="5" textAlign="left">
                <form onSubmit={handleSubmit}>
                  <FormControl>
                    <FormLabel>Title</FormLabel>

                    <Input
                      name="title"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.title}
                      disabled={isSubmitting}
                      width="70%"
                      isInvalid={touched.title && errors.title}
                    />
                    {touched.title && errors.title && (
                      <Text color="red.400" mt="3" ml="2">
                        {errors.title}
                      </Text>
                    )}
                  </FormControl>
                  <FormControl mt="10">
                    <FormLabel>Description</FormLabel>
                    <Textarea
                      variant="outline"
                      size="md"
                      height="40vh"
                      name="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                      disabled={isSubmitting}
                      width="70%"
                      isInvalid={touched.description && errors.description}
                    />
                    {touched.description && errors.description && (
                      <Text color="red.400" mt="3" ml="2">
                        {errors.description}
                      </Text>
                    )}
                  </FormControl>
                  <FormControl mt="10">
                    <FormLabel>Price</FormLabel>
                    <Input
                      name="price"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.price}
                      disabled={isSubmitting}
                      width="70%"
                      isInvalid={touched.price && errors.price}
                    />
                    {touched.price && errors.price && (
                      <Text color="red.400" mt="3" ml="2">
                        {errors.price}
                      </Text>
                    )}
                  </FormControl>
                  <FormControl mt="10">
                    <FormLabel>Photos</FormLabel>
                    <FieldArray
                      name="photos"
                      render={(arrayHelpers) => (
                        <div>
                          {values.photos &&
                            values.photos.map((photo, index) => (
                              <div key={index} style={{ marginTop: "15px" }}>
                                <Input
                                  name={`photos.${index}`}
                                  value={photo}
                                  disabled={isSubmitting}
                                  onChange={handleChange}
                                  width="70%"
                                />
                                <Button
                                  ml="3"
                                  type="button"
                                  colorScheme="red"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  Remove
                                </Button>
                              </div>
                            ))}
                          <Button
                            mt="4"
                            type="button"
                            colorScheme="green"
                            onClick={() => arrayHelpers.push("")}
                          >
                            Add a new photo
                          </Button>
                        </div>
                      )}
                    />
                  </FormControl>
                  <Button
                    mt="4"
                    width="30%"
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    Update
                  </Button>
                </form>
              </Box>
            </Box>
          </>
        )}
      </Formik>
    </div>
  );
};

export default ProductDetail;
