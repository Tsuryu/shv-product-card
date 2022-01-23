import * as React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';

const { act } = renderer;

describe('ProductCard', () => {
  test('should render component', () => {
    const wrapper = renderer.create(
      <ProductCard
        title="Test product"
        className="custom class"
        id={product1.id}
      >
        {() => <h1>Product card</h1>}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should increment counter', () => {
    const wrapper = renderer.create(
      <ProductCard
        title="Test product"
        className="custom class"
        id={product1.id}
      >
        {({ count, increaseBy }) => (
          <>
            <h1>Product card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(2)} />
          </>
        )}
      </ProductCard>
    );

    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick();
    });
    tree = wrapper.toJSON();

    expect((tree as any).children[1].children[0]).toBe('0');
  });
});
