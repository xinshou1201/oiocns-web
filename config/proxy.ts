/**
 * @name 代理的配置
 * @see 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * @doc https://umijs.org/docs/guides/proxy
 */
export default {
  dev: {
    '/orginone': {
      // target: 'http://localhost:800', // 后台接口
      target: 'http://anyinone.com:888', // 后台接口
      changeOrigin: true, // 是否允许跨域
      ws: true,
    },
  },
  /**
   * @name 详细的代理配置
   * @doc https://github.com/chimurai/http-proxy-middleware
   */
  test: {
    '/api/': {
      target: 'https://proapi.azurewebsites.net',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
