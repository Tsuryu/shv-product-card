import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('should render component', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Test product" className="custom class" />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should render with product name', () => {
    const wrapper = renderer.create(
      <ProductCard
        title={product1.title}
        className="custom class"
        id={product1.id}
      >
        {() => <ProductTitle />}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
