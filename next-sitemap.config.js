/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://abhai-surti-pm.vercel.app", // your deployed site
  generateRobotsTxt: true, // generate robots.txt file
  sitemapSize: 7000, // optional, splits if huge
  changefreq: "weekly", // how often your pages update
  priority: 0.7, // default priority
};
