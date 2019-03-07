// __tests__/Intro-test.js
import React from 'react';
import Intro from '../App';

import renderer from 'react-test-renderer';

test('App renders correctly', () => {
  const tree = renderer.create(<Intro />).toJSON();
  expect(tree).toMatchSnapshot();
});



// test('snapshot testing for test component', () => {
//     let homeData = renderer.create(<HomeComponent />).getInstance();
//     console.log("home" + homeData);
//   //  expect(homeData.state.data).toEqual(50);
// });