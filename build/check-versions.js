//check-version.js完成对node和npm的版本检测
var chalk = require('chalk');// 用于在控制台输出带颜色字体的插件
var semver = require('semver');// 语义化版本检查插件（The semantic version parser used by npm
var packageConfig = require('../package.json');// 引入package.json
var shell = require('shelljs');// 执行Unix命令行的插件
function exec (cmd) {// 开辟子进程执行指令cmd并返回结果
  return require('child_process').execSync(cmd).toString().trim();
}

var versionRequirements = [// node和npm版本需求
  {
    name: 'node',
    currentVersion: semver.clean(process.version),
    versionRequirement: packageConfig.engines.node
  },
];

if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
  })
}

module.exports = function () {
  var warnings = [];
  for (var i = 0; i < versionRequirements.length; i++) {// 依次判断版本是否符合要求
    var mod = versionRequirements[i];
    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
    }
  }

  if (warnings.length) {// 如果有警告则将其输出到控制台
    console.log('');
    console.log(chalk.yellow('To use this template, you must update following to modules:'));
    console.log();
    for (var i = 0; i < warnings.length; i++) {
      var warning = warnings[i];
      console.log('  ' + warning)
    }
    console.log();
    process.exit(1)
  }
};
