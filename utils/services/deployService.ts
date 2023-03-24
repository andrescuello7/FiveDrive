const cmd = require("node-cmd");

export const deployGitHub = (github: string, name: string) => {
  const runScript = `
  cd /Users/conteo/Documents/FiveDrive &&
  git clone ${github} &&
  cd ${name} &&
  npm install &&
  pm2 start npm --name ${name} -- start`;

  cmd.runSync(runScript);
};
