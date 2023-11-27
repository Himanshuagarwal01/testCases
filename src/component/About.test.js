import About from "./About";
import { shallow } from 'enzyme';

describe('About Page Testing', () => {
    it('Class Check', () => {
        let wrapper = shallow(<About />);
        // console.log(wrapper.debug());
        expect(wrapper.exists('.h1cls')).toEqual(true);
    });

    it('State Check', () => {
        let wrapper = shallow(<About />);
        // console.log(wrapper.debug());
        expect(wrapper.state()).toEqual({ name: 'Himanshu Agarwal', id: 10 });
    });

    // this test case is use to check the display and check the success and error msg in the code.
    it('Html Contain Check', () => {
        let wrapper = shallow(<About />);
        // console.log(wrapper.debug());
        expect(wrapper.contains(<div className='h1cls'> Hello</div>)).toEqual(true);
    });

    // containsAllMatchingElements wants every Elements must contain in the html and use can pass the multiple html
    it('Only msg Contain Check', () => {
        let wrapper = shallow(<About />);
        // console.log(wrapper.debug());
        expect(wrapper.containsAllMatchingElements([<div> Hello</div>])).toEqual(true);
    });

    // containsAnyMatchingElements wants any elements can present in the html and use can pass the multiple html
    it('any Contain Check', () => {
        let wrapper = shallow(<About />);
        // console.log(wrapper.debug());
        expect(wrapper.containsAnyMatchingElements([<div> Hello</div>, <div> Help</div>])).toEqual(true);
    });
})