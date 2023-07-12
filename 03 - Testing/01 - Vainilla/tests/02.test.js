const obtenerPosteo = require('../Ejercicio 02');

jest.mock('axios');
describe('02 - AsyncRequest', () => {
   // Aquí van tus tests
   
      test('Si la función recibe un parámetro que no sea un número del 1 al 100, entonces debe devolver un status 404 y el valor null', async () => {
        const postID = 101; // Valor fuera del rango esperado
        const expectedError = '404 Not Found';
    
        axios.mockRejectedValueOnce({ response: { status: 404, data: expectedError } });
    
        const post = await obtenerPosteo(postID);
    
        expect(post).toBeNull();
        expect(axios).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/posts/${postID}`);
        expect(console.error).toHaveBeenCalledWith(404, expectedError);
      });
    
      test('Si la función recibe un número del 1 al 100, entonces debe devolver un status 200 y un objeto con las propiedades userID, id, title y body', async () => {
        const postID = 1; // Valor dentro del rango esperado
        const expectedPost = {
          userID: 1,
          id: 1,
          title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit' +
            ' molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        };
    
        axios.mockResolvedValueOnce({ data: expectedPost });
    
        const post = await obtenerPosteo(postID);
    
        expect(post).toEqual(expectedPost);
        expect(axios).toHaveBeenCalledWith(`https://jsonplaceholder.typicode.com/posts/${postID}`);
        expect(console.error).not.toHaveBeenCalled();
      });
   
});
