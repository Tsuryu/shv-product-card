# SHV-Product-Card

Material de despliegue

### Sergio Velazquez

## Ejemplo

```
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "shv-product-card";
```

```
<ProductCard
  key={product.id}
  id={product.id}
  title={product.title}
  img={product.img}
  initialValues={{
    count: 4,
    maxCount: 10,
  }}
>
  {({ reset, count, isMaxReached, increaseBy, maxCount }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
