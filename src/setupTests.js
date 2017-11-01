// TODO: Remove this `raf` polyfill once the below issue is sorted
// https://github.com/facebookincubator/create-react-app/issues/3199#issuecomment-332842582

/* eslint-disable no-unused-vars */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import raf from './tempPolyfills';

configure({ adapter: new Adapter() });
