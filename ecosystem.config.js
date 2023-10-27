module.exports = {
  apps : [{
    script: 'npm start'
  }],

  deploy : {
    production : {
      key  : 'API.pem',
      user : 'ubuntu',
      host : '54.84.85.196',
      ref  : 'origin/master',
      repo : 'git@github.com:codecallogic/absolutePrivateInvestigationLLC.git',
      path : '/home/ubuntu/client',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install --legacy-peer-deps && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};