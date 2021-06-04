import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import Bestseller from '../modules/bestSellers/BestSellers';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter:new Adapter() })

//tests to see if the Bestsellers page renders without crashing
it("Renders Without Crashing",() => {
    shallow(<Bestseller/>);
});

//describes what the test is set to do - it tests the title of the best sellers in h3
describe("Bestseller Title Test", () => {
  test("BestSellers Render Heading Should Be: 'Top 20 Best Sellers'", () => {
      const header = <h3>Top 20 Best Sellers</h3> //this sets the heading to what I want it to be
      const wrapping = shallow(<Bestseller />); //this renders the page for bestsellers
      
      expect(wrapping.contains(header)).toEqual(true); //does a check to see if the heading matches
  })
})

