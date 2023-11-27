import Blob from './Blog';
import {shallow} from 'enzyme'
describe('Blob Page Testing',()=>{
    it('find Check', ()=>{
        let wrapper = shallow(<Blob/>);
        expect(wrapper.find('.licls').length).toBe(3)
    })

    it('Key && At Check', ()=>{
        let wrapper = shallow(<Blob/>);
        expect(wrapper.find('.licls').at(0).key()).toBe('angular');
    });

    it('Child Check', ()=>{
        let wrapper = shallow(<Blob/>);
        expect(wrapper.find('.Numbers').childAt(0).type()).toBe('span');
    });

    it('Child length Check', ()=>{
        let wrapper = shallow(<Blob/>);
        expect(wrapper.find('ul').children().length).toBe(3);
    });

    // hasClass is used when you have to check the specified class is present among the multiple Classes
    it('hasClass Check', ()=>{
        let wrapper = shallow(<Blob/>);
        expect(wrapper.find('ul').hasClass('btn-primary')).toBe(false);
    });

    it('hasClass Check', ()=>{
        let wrapper = shallow(<Blob/>);
        expect(wrapper.find('.disabled').hasClass('btn-primary')).toBe(true);
    });

    // is class is used to check in the main parent containers only not in the children's
    it('is Check', ()=>{
        let wrapper = shallow(<Blob/>);
        expect(wrapper.is('.hhhh')).toBe(true);
    });
})  