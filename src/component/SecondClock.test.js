import { shallow } from "enzyme"
import SecondClock from "./SecondClock"

describe('second clock testing', () => {
    it('state', () => {
        let wrapper = shallow(<SecondClock />);
        let state = wrapper.state().second;
        console.log('state', state);
        wrapper.find('button').simulate('click');
        expect(wrapper.state().second).toBe(1);
    })
})