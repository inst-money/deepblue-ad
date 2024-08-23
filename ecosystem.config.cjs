module.exports = {
    apps: [
      {
        name: 'DeepBlueOffical',
        port: '3000',
        exec_mode: 'cluster',
        instances: '1',
        script: './.output/server/index.mjs',
        log_file : "server.log",
        merge_logs : true,

      }
    ]
  }
  