module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Name of component',
        default: 'Example',
      },
      {
        type: 'list',
        name: 'type',
        message: 'Type of component',
        default: 'Page',
        choices: () => ['Page', 'Component'],
      },
      {
        type: 'input',
        name: 'hook',
        default: false,
        message: 'Do you want a hook?',
      },
      {
        type: 'input',
        name: 'validation',
        default: false,
        message: 'Do you want a validation?',
      },
    ],
    actions: (data) => {
      let path;
      switch (data.type) {
        case 'Component':
          path = '../src/components/{{camelCase name}}/';
          break;
        default:
          path = '../src/pages/{{camelCase name}}/';
          break;
      }
      const actions = [
        {
          type: 'add',
          path: `${path}{{camelCase name}}.tsx`,
          templateFile: './templates/component.tsx.hbs',
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `${path}styles.ts`,
          templateFile: './templates/styles.ts.hbs',
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `${path}props.ts`,
          templateFile: './templates/props.ts.hbs',
          abortOnFail: true,
        },
        {
          type: 'add',
          path: `${path}index.ts`,
          templateFile: './templates/index.ts.hbs',
          abortOnFail: true,
        },
      ];
      if (data.validation) {
        actions.push({
          type: 'add',
          path: `${path}validation.ts`,
          templateFile: './templates/validation.ts.hbs',
          abortOnFail: true,
        });
      }
      if (data.hook) {
        actions.push({
          type: 'add',
          path: '../src/hooks/use{{pascalCase name}}.ts',
          templateFile: './templates/hook.ts.hbs',
          abortOnFail: true,
        });
      }
      return actions;
    },
  });
};
