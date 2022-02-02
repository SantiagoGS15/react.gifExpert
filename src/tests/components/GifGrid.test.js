import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <AddCategory>', () => {
    const category = 'One Punch';
    

    test('Debe mostrarse correctamente', () => {
        useFetchGifs.mockReturnValue(
            {
                data: [],
                loading: true
            }
        );
        const wrapper = shallow(<GifGrid category={category}></GifGrid>);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
        const mockDataImages = [
            {
                id: 1,
                url: 'http://localhost/q.png',
                title: 'cualquier cosa'
            }
        ]
        useFetchGifs.mockReturnValue(
            {
                data: mockDataImages,
                loading: false
            }
        );
        const wrapper = shallow(<GifGrid category={category}></GifGrid>);
        expect(wrapper).toMatchSnapshot();

        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(mockDataImages.length);
    });

    
});