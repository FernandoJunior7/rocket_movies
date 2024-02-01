const { Router } = require('express');

const usersRoutes = Router();

usersRoutes.post('/', (request, response) => response.json({
  "message": "opa, tudo bom? Sou a raiz do projeto"
}));
usersRoutes.put('/:id', (request, response) => response.json({
  "message": "opa, tudo bom? To atualizando um usuário"
}));

module.exports = usersRoutes;