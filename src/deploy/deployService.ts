const cmd = require("node-cmd");

export const deployGitHub = async (github: string, name: string) => {
  const runScript = `
  cd /Users/conteo/Documents/FiveDrive &&
  git clone ${github} &&
  cd ${name} &&
  npm install &&
  pm2 start npm --name ${name} -- start`;

  const response = cmd.runSync(runScript);

  return response ? "Exito manos arriba" : "Error running"
};
