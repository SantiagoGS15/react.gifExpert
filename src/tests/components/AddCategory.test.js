import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";
import '@testing-library/jest-dom';

describe('Pruebas en <AddCategory>', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories}></AddCategory>);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories}></AddCategory>);
    });

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', 
        {
            target: {
                value: value
            }
        });
        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('No debe postear la info con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe postear la info con submit', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change', 
        {
            target: {
                value: value
            }
        });
        expect(wrapper.find('p').text().trim()).toBe(value);
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        expect(wrapper.find('p').text().trim()).toBe('');
        expect(setCategories).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toBe('');
    });
});