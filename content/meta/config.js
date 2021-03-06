const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "theAnubhav - Anubhav's Personal blog", // <title>
  shortSiteTitle: "theAnubhav - Anubhav's Personal blog", // <title> ending for posts and pages
  siteDescription: "theAnubhav - Anubhav's Personal blog",
  siteUrl: "https://theanubhav.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  disqusShortname: "theanubhav",
  // author
  authorName: "Anubhav Srivastava",
  authorTwitterAccount: "onlyanubhav",
  // info
  infoTitle: "Anubhav Srivastava",
  infoTitleNote: "Personal blog",
  // manifest.json
  manifestName: "theAnubhav - Anubhav's Personal blog",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.accent,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "anubhav.srivastava00@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/anubhavsrivastava" },
    { name: "twitter", url: "https://twitter.com/onlyanubhav" },
    { name: "facebook", url: "https://facebook.com/theanubhav" }
  ]
};
