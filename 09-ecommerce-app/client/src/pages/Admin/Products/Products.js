import { useMemo } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchProductList, deleteProduct } from "../../../api";
import {
  Spinner,
  Alert,
  AlertIcon,
  Button,
  ButtonGroup,
  useToast,
} from "@chakra-ui/react";
import { Table, Popconfirm } from "antd";
import { Link } from "react-router-dom";

const Products = () => {
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery(
    "admin:products",
    fetchProductList
  );
  const toast = useToast();
  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries("admin:products"),
  });

  console.log(deleteMutation);
  const columns = useMemo(() => {
    return [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt",
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => {
          return (
            <ButtonGroup>
              <Button colorScheme="green">
                <Link to={`/admin/products/${record._id}`}>Edit</Link>
              </Button>
              <Button colorScheme="red">
                <Popconfirm
                  title="Are you sure?"
                  onConfirm={() => {
                    deleteMutation.mutate(record._id, {
                      onSuccess: () =>
                        toast({
                          title: "Product deleted",
                          description: "Product was deleted from database",
                          status: "success",
                          duration: 1000,
                          isClosable: true,
                          position: "bottom-right",
                        }),
                    });
                  }}
                  onCancel={() => alert("Cancelled")}
                  okText="Yes, delete please"
                  cancelText="No !"
                  placement="left"
                >
                  <a href="/#">Delete</a>
                </Popconfirm>
              </Button>
            </ButtonGroup>
          );
        },
      },
    ];
  }, []);

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

  return (
    <>
      <Table dataSource={data} columns={columns} rowKey="_id"></Table>
    </>
  );
};

export default Products;
