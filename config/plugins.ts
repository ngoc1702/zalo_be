// export default () => ({});

module.exports = ({ env }) => ({
  upload: {
    config: {
      providerOptions: {
        sizeLimit: 10000000, // 10MB
      },
    },
  },
});
