module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/asuku1510/Semantic-V.git",
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/git',
      '@semantic-release/github']
 }