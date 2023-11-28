import { shallow } from "enzyme"
import News from "./News"

describe('News page testing', () => {
    it('instance testing', async () => {
        let wrapper = shallow(<News />);
        let anyfunction = wrapper.instance().checkBox();
        expect(anyfunction).toEqual({ id: 10 })
    })

    it('Load data testing', async () => {
        let wrapper = shallow(<News />);
        let anyfunction = wrapper.instance().loadData();
        return anyfunction.then(data => {
            console.log(data);
            expect(data).toEqual({ me: 12 })
        })
    })

    it('jest spyOn componentDidMount', async () => {
        jest.spyOn(News.prototype, 'componentDidMount');
        shallow(<News />);
        expect(News.prototype.componentDidMount).toHaveBeenCalled();
        expect(News.prototype.componentDidMount).toHaveBeenCalledTimes(1);
        News.prototype.componentDidMount.mockRestore();
    })

    it('jest spyOn func', async () => {
        let wrapper = shallow(<News />);
        let instance = wrapper.instance();
        jest.spyOn(instance, 'fun');
        wrapper.find('button').simulate('click');
        expect(instance.fun).toHaveBeenCalled();
        expect(instance.fun).toHaveBeenCalledWith(90,90);
    })

    it('State', async () => {
        let wrapper = shallow(<News />);
        return wrapper.instance().loadData().then(()=>{
            expect(wrapper.state()).toEqual({newCount: 50});
            expect(wrapper.state().newCount).toEqual(50);
        })
    })


    it('Props', async () => {
        let wrapper = shallow(<News />);
        return wrapper.instance().loadData().then(()=>{
            expect(wrapper.state()).toEqual({newCount: 50});
            expect(wrapper.state().newCount).toEqual(50);
        })
    })
})