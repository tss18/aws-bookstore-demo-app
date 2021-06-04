import React from 'react';
import {shallow} from 'enzyme';
import Enzyme from 'enzyme';
import PastPurchase from '../modules/pastPurchases/PastPurchases';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter:new Adapter() })

//tests to see if the Past Purchases page renders without crashing
it("Renders Without Crashing",() => {
    shallow(<PastPurchase/>);
});

//describes what the test is going to do
describe("Past Purchase Title Test", () => {
    test("Past Purchases Render Heading Should Be: 'Past Purchases'", () => {
        const header = <h3>Past Purchases</h3> //this sets the heading to what I want it to be
        const wrapping = shallow(<PastPurchase />); //this renders the page for past purchases
        
        expect(wrapping.contains(header)).toEqual(true); //checks to see if the headings match
    })
})