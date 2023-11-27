import Home from './Home';
import { shallow } from 'enzyme';

describe('Shallow Check ', () => {
    // it('this is my second test casse', () => {
    //     expect(sum(1, 2)).toBe(3)
    // });
    it('this is my second test casse', () => {
        let wrapper = shallow(<Home />);
        // console.log(wrapper.debug()); // debug is used to get the html in the variable and the present data .
        expect(wrapper.exists('.homeclass')).toEqual(true);
    })

    // it('object check', () => {
    //     let data = sum(1,2);
    //     expect(data).toEqual({name: 'code'})
    // })
})
