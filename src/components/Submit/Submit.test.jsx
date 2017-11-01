import React from 'react';
import { shallow } from 'enzyme';
import Submit from './index';

it('renders without crashing', () => {
  shallow(<Submit handleSubmit={() => {}} />);
});

it('initially renders empty text', () => {
  const wrapper = shallow(<Submit handleSubmit={() => {}} />);

  expect(wrapper.state('value')).toEqual('');
});

it('calls submit handler on form submit', () => {
  const submit = jest.fn();
  const wrapper = shallow(<Submit handleSubmit={submit} />);

  wrapper.setState({ value: 'https://www.google.co.in' });
  wrapper.find('#submit-form').simulate('submit');

  expect(submit).toHaveBeenCalled();
});
