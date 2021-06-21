//TODO: update locales on line 12, 13, and domains on line 16, 17

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  i18n: {
    locales: ["en-CA", "fr"],
    defaultLocale: "en-CA",
    domains: [
      {
        domain: "ljtech.ca",
        defaultLocale: "en-CA",
      },
    ],
  },
};
