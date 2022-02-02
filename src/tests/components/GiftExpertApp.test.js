import { shallow } from 'enzyme';
import { GiftExpertApp } from '../../components/GiftExpertApp';
import React from 'react';

describe('Pruebas en GiftExpertApp', () => {

    test('Se debe mostrar correctamente', () => {
        const wrapper = shallow(<GiftExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Se debe mostrar una lista de caterogías', () => {
        const categories = ['One Punch', 'Dragon Ball']
        const wrapper = shallow(<GiftExpertApp defaultCategories={categories}/>);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    
});