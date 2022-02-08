import React from "react";
import { Grid, Flex, Box, Button } from "@chakra-ui/react";
import Card from "../../components/Card/Card";
import { fetchProductList } from "../../api";
import { useInfiniteQuery } from "react-query";

const Products = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("products", fetchProductList, {
    getNextPageParam: (lastGroup, allGroups) => {
      const morePagesExist = lastGroup?.length === 12;
      if (!morePagesExist) {
        return;
      }
      return allGroups.length + 1;
    },
  });
  if (status === "loading") return "Loading...";
  if (status === "error") return "An error has occured: " + error.message;
  console.log(data);
  return (
    <div>
      <Grid templateColumns="repeat(3,1fr)" gap={3}>
        {/* {data.map((product, key) => (
          <Card key={key} product={product} />
        ))} */}

        {data.pages.map((group, key) => (
          <React.Fragment key={key}>
            {group.map((product) => (
              <Box w="100%" key={product._id}>
                <Card product={product}></Card>
              </Box>
            ))}
          </React.Fragment>
        ))}
      </Grid>
      <Flex mt="10" justifyContent="center">
        <Button
          isLoading={isFetchingNextPage}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading More..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </Button>
      </Flex>
    </div>
  );
};

export default Products;
