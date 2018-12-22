import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

// @TODO: Anthony - out of order import should be causing tests to fail
import HelloWorld from '../index';

describe('<HelloWorld/>', () => {
  it('renders and matches the snapshot', () => {
    const wrapper = shallow(<HelloWorld />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
