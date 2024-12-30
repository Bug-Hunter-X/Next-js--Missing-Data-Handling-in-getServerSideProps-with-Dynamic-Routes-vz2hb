```javascript
// pages/product/[id].js
export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://api.example.com/products/${id}`);

  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const product = await res.json();

  return {
    props: { product },
  };
}

function Product({ product }) {
  if (!product) {
    return <p>Product not found</p>; // Or a more user-friendly component
  }

  // ... renders product information ...
}
```