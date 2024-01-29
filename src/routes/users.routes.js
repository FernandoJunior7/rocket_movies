const { Router } = require('express');

const notesRoutes = Router();

notesRoutes.post('/', () => console.log('opa, sou a raiz do caminho users'));
notesRoutes.put('/:id', () => console.log('opa, to atualizando as informações do usuário via id'));

module.exports = notesRoutes;