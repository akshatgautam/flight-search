module.exports = {
  css: {
    loaderOptions: {
      less: {
        prependData: "@import '~@/styles/styles.less';",
      },
    },
  },
};
