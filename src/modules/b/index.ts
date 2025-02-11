// This file imports a npm lib and exports two functions
// one that uses the imported lib
// and another that doesn't
import { connect } from 'socket.io-client';

export const withImports = () => {
  console.log('hello from b!');
  const socket = connect(`http://127.0.0.1:8080`);
  return new Promise((resolve) => {
    socket.on('connect', () => {
      resolve(socket);
    });
    socket.on('disconnect', () => {
      resolve(null);
    });
  });
};

export const unusedImports = () => {
  console.log('hello from c!');
};
