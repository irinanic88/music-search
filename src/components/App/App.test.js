import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
    it('should render', () => {
        const wrapper = mount(<App />);
        expect(wrapper.find('[data-id="app"]').length).toBe(1);
    })
})