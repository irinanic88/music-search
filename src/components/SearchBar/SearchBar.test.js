import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import SearchBar from './SearchBar';

Enzyme.configure({ adapter: new Adapter() });

describe('SearchBar', () => {
    it('should render', () => {
        const wrapper = mount(<SearchBar />);
        expect(wrapper.find('[data-id="search-bar"]').length).toBe(1);
    });
})