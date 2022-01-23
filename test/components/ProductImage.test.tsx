import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('should render component', () => {
    const wrapper = renderer.create(
      <ProductImage img="test" className="custom class" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should render with product name', () => {
    const wrapper = renderer.create(
      <ProductCard
        title={product2.title}
        className="custom class"
        img={product2.img}
        id={product2.id}
      >
        {() => <ProductImage />}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
