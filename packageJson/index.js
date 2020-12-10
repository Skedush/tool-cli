const Generator = require('yeoman-generator');
const { basename } = require('path');

class PackageCli extends Generator {
  constructor(opts) {
    super(opts);
    this.opts = opts;
    this.name = basename(opts.env.cwd);
  }

  prompting() {
    //promts是问题集合，在调用this.promt使其在运行yo的时候提出来
    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'package name:',
        default: 'react-ui',
      },
      {
        type: 'input',
        name: 'version',
        message: 'version',
        default: '1.0.0',
      },
      {
        type: 'input',
        name: 'description',
        message: 'description',
        default: 'react ui',
      },
    ];
    return this.prompt(prompts).then(answers => {
      this.props = answers;
    });
  }

  writing() {
    //复制templates目录中的index.html、index.js到目标目录（先在templates里创建这两个文件）
    console.log('this.templatePath', this.templatePath('package.json'));
    console.log('this.destinationPath', this.destinationPath('package.json'));

    this.fs.copyTpl(
      this.templatePath('package.json'),
      // returns './templates/public/index.html'
      this.destinationPath('package.json'),
      this.props,
    );
  }

  // install() {}
}

module.exports = PackageCli;
