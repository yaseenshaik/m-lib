import { noImports } from '../a';

export const withLocalImports = () => {
  console.log('hello from withLocalImports!');
  return noImports();
};

export const unusedLocalImports = () => {
  console.log('hello from unusedLocalImports!');
};
