import {shallow} from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';
import React from 'react'

describe('Pruebas en GifGridItem', () => {

    const title = 'Test';
    const url = 'http://localhost:5000/test.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    expect(wrapper).toMatchSnapshot();
    test('debe de mostrar el título correctamente', () => {
        expect(wrapper.find('p').text().trim()).toBe(title);
    });
});