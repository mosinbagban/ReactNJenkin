import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

test('snapshot testing for App component', () => {
 const tree = renderer.create(<App />).toJSON();
 expect(tree).toMatchSnapshot();
});



// test('snapshot testing for test component', () => {
//     let homeData = renderer.create(<HomeComponent />).getInstance();
//     console.log("home" + homeData);
//   //  expect(homeData.state.data).toEqual(50);
// });