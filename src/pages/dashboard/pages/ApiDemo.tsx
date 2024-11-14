// Import node module libraries
import React, { Fragment, useEffect, useState } from "react";
import { Card } from "react-bootstrap";

// Define types
interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: Dimensions;
}

interface ErrorState {
  status_code: string;
  message: string;
}

const ApiDemo: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorState | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://dummyjson.com/products/1");

        if (!response.ok) {
          setError({
            status_code: "400",
            message: "Something went wrong, please try again.",
          });
          throw new Error("Unable to fetch product, Please try again later");
        }

        const data: Product = await response.json();
        setProduct(data);
      } catch (error) {
        if (error instanceof Error) {
          setError({
            status_code: "500",
            message: error.message,
          });
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, []);

  return (
    <Fragment>
      {isLoading && (
        <Card className="m-5">
          <Card.Body>
            <div className="d-flex justify-content-center align-items-center">
              <p className="fs-4">Loading...</p>
            </div>
          </Card.Body>
        </Card>
      )}

      {error && (
        <Card className="m-5">
          <Card.Body>
            <h4>Error: {error.status_code}</h4>
            <p>{error.message}</p>
          </Card.Body>
        </Card>
      )}

      {product && !isLoading && !error && (
        <Card className="m-5">
          <Card.Body>
            <pre>{JSON.stringify(product, null, 2)}</pre>
          </Card.Body>
        </Card>
      )}
    </Fragment>
  );
};

export default ApiDemo;
