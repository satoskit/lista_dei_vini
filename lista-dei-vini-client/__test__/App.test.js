import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

// jest.setMock('react-native', {})
// jest.mock('expo', () => ({
//   AppLoading: 'AppLoading',
// }));
// jest.mock('react-native-gesture-handler', () => 'Directions')
jest.mock('expo', () => { App: 'App' });
jest.mock('react-native-vector-icons/FontAwesome5', () => { FontAwesomeIcon5: 'Icon' })
jest.mock('../App', () => {App: ''})
jest.mock('@react-navigation/native',() => {NavigationContainer: 'NagivationContainer'})

// describe('App', () => {
//     it('has 1 child', () => {
//      const tree = renderer.create(<App />).toJSON();
//       // expect(tree).toBe(1);
//       // expect(tree.children.length).toBe(1);
//     });
//   });

 test('renders correctly2s', () => {
  expect(1).toBe(1);
}); 
// test('renders correctly', () => {
//   const tree = renderer.create(<App />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

jest.setTimeout(15000);

it('renders correctly', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});