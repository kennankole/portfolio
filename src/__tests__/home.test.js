/* eslint-disable import/no-extraneous-dependencies */
import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Home from '../features/Home';
import { wrap } from '@cfaester/enzyme-adapter-react-18/dist/enzyme-adapter-utils';

Enzyme.configure({ adapter: new Adapter() });

it('renders the home page correctly', () => {
  const wrapper = shallow(<Home />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
