/* eslint-disable import/no-extraneous-dependencies */
import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@cfaester/enzyme-adapter-react-18';
import Home from '../features/Home';

Enzyme.configure({ adapter: new Adapter() });

it('renders the home page correctly', () => {
  const wrapper = shallow(<Home />);

  expect(toJson(wrapper)).toMatchSnapshot();
});
