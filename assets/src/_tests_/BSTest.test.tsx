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



