import Click from "./Click";
import { shallow } from 'enzyme';
import Table from "./Table";

describe('click page testing', () => {
    it('Clicks Check', () => {
        let wrapper = shallow(<Click />);
        expect(wrapper.find('.clicks-0').length).toEqual(1)
    })

    // simulate is used to click the button the page  
    it('Simulate Check', () => {
        let wrapper = shallow(<Click />);
        wrapper.find('button').simulate('click');
        expect(wrapper.find('.clicks-1').length).toEqual(1)
    })

    // dive is used to dive in to the component in the same page  
    it('Dive Check', () => {
        let wrapper = shallow(<Click />);
        wrapper.find('button').simulate('click');
        expect(wrapper.find(Table).dive().find('.custom-border').length).toEqual(1)
    }) 
})