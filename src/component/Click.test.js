import Click from "./Click";
import { mount, shallow } from 'enzyme';
import Table from "./Table";
import { createRoot } from 'react-dom/client';

describe.skip('click page testing', () => {
    it('Clicks Check', () => {
        let wrapper = shallow(<Click />);
        expect(wrapper.find('.clicks-0').length).toEqual(1)
    });

    // simulate is used to click the button the page  
    it('Simulate Check', () => {
        let wrapper = shallow(<Click />);
        wrapper.find('button').simulate('click');
        expect(wrapper.find('.clicks-1').length).toEqual(1)
    });

    // dive is used to dive in to the component in the same page  
    it('Dive Check', () => {
        let wrapper = shallow(<Click />);
        wrapper.find('button').simulate('click');
        expect(wrapper.find(Table).dive().find('.custom-border').length).toEqual(1)
    });

    it('Snapshot Check', () => {
        let wrapper = shallow(<Table />);
        expect(wrapper).toMatchSnapshot();
    });
});

describe('Click Page testing', () => {
    it('Shallow vs Mount', () => {
        // let wrapper = shallow(<Click />);
        const root = createRoot(document.createElement('div'));
        root.render(<Click />);
        let wrapper = root.render(<Click />)
        console.log(wrapper);
    })
})