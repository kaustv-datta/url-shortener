import React from 'react';
import { shallow } from 'enzyme';
import { APP_STATUS } from '../../reducers';
import URLList from './index';

const dummyList = [
  {
    shortcode: 'abc',
    shortDomain: 'shortDomain',
    longUrl: 'longUrl',
    visits: 0,
    lastVisit: 'lastVisit',
  },
];

const dummyProps = {
  onClearClick: () => {},
  onCellClick: () => {},
};

it('renders without crashing', () => {
  shallow(<URLList {...dummyProps} />);
});

it('initially renders empty icon if app is empty', () => {
  const wrapper = shallow(<URLList {...dummyProps} appState={APP_STATUS.EMPTY} />);

  expect(wrapper.contains(<div id="app-empty-status" className="app-status-icon" />)).toEqual(true);
});

it('initially renders loading icon if app is loading', () => {
  const wrapper = shallow(<URLList {...dummyProps} appState={APP_STATUS.LOADING} />);

  expect(wrapper.contains(<div id="app-loading-status" className="app-status-icon" />)).toEqual(true);
});

it('initially renders error icon if app is in error state', () => {
  const wrapper = shallow(<URLList {...dummyProps} appState={APP_STATUS.ERROR} />);

  expect(wrapper.contains(<div id="app-error-status" className="app-status-icon" />)).toEqual(true);
});

it('renders url items', () => {
  const wrapper = shallow(<URLList {...dummyProps} list={dummyList} />);

  expect(wrapper.find('#url-list-container').length).toEqual(1);
});

it('clears cache on click', () => {
  const clear = jest.fn();
  const wrapper = shallow(<URLList {...dummyProps} list={dummyList} onClearClick={clear} />);

  wrapper.find('#clear-history-btn').simulate('click');
  expect(clear).toHaveBeenCalled();
});

it('highlights active link', () => {
  const wrapper = shallow(<URLList
    {...dummyProps}
    list={dummyList}
    activeShortcode={dummyList[0].shortcode}
  />);

  expect(wrapper.find('.new-link').length).toEqual(1);
});
