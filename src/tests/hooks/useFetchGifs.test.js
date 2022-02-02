import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => {
    test('Debe retornar el estado inicial', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('One Punch'));
        const {data: images, loading} = result.current;
        await waitForNextUpdate();
        expect(images).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe retornar un arreglo de imágenes', async() => {
        const {result, waitForNextUpdate} = renderHook(() => useFetchGifs('M Punch'));
        const {data: images, loading} = result.current;
        await waitForNextUpdate();
        expect(images).toEqual([]);
        expect(loading).toBe(true);
    });
    
});