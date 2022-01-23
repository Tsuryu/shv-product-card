import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Coffee - Mug',
  img: './coffee-mug.png',
};

const App = () => {
  return (
    <div>
      <ProductCard
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
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
