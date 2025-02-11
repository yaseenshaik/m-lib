// This file imports a npm lib and exports two functions
// one that uses the imported lib
// and another that doesn't
import { Server } from 'socket.io';

export const withImports = () => {
  console.log('hello from withImports!');
  const server = new Server();
  return server;
};

export const unusedImports = () => {
  console.log('hello from unusedImports!');
};
