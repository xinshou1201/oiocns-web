import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

// 获取目录下所有文件 自动注册
// const modules = import.meta.globEager('./**/*.ts');
// const mockModules: any[] = [];
// Object.keys(modules).forEach((key) => {
//   if (key.includes('/_')) {
//     return;
//   }
//   mockModules.push(...modules[key].default);
// });
/**
 * Used in a production environment. Need to manually import all modules
 */
import data from './data';
export function setupProdMockServer() {
  createProdMockServer([...data]);
}
