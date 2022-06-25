import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [productDetails, setProductDetails] = React.useState({});

  // basis this id: a network

  React.useEffect(() => {
    let isSubscribed = true;
    setIsLoading(true);
    fetch(`http://localhost:8000/products/${productId}`)
      .then((res) => res.json())
      .then((res) => {
        setIsError(false);
        return isSubscribed ? setProductDetails(res) : null;
      })
      .catch((err) => setIsError(true))
      .finally(() => setIsLoading(false));

    return () => {
      isSubscribed = false;
    };
  }, [productId]);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (isError) {
    return <h1>SOMETHING WENT WRONG</h1>;
  }
  return productDetails.id ? <div>{JSON.stringify(productDetails)}</div>: <h1>Product not found</h1>
};

export default ProductDetails;
