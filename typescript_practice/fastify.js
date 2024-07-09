"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fastify_1 = require("fastify");
var app = (0, fastify_1.default)();
app.get('/', function (request, reply) {
    reply.send({ hello: 'world' });
});
app.listeningOrigin = 'http://localhost:3000';
