import renderer from 'react-test-renderer';
import Quote from './components/Quote';
import Calculator from './components/calculator';
import About from './components/About';

it('renders correctly', () => {
  const tree = renderer
    .create(<Quote />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders 1', () => {
  const tree = renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the about', () => {
  const tree = renderer
    .create(<About />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
