import { mkdir, mkfile } from '@hexlet/immutable-fs-trees';

function treeGenerator() {
  const root = 'nodejs-package';
  const meta = { hidden: true };
  const structure = [
    mkfile('Makefile'),
    mkfile('README.md'),
    mkdir('dist', []),
    mkdir('__tests__', [mkfile('half.test.js', { type: 'text/javascript' })]),
    mkfile('babel.config.js', { type: 'text/javascript' }),
    mkdir(
      'node_modules',
      [mkdir('@babel', [mkdir('cli', [mkfile('LICENSE')])])],
      { owner: 'root', hidden: false },
    ),
  ];

  return mkdir(root, structure, meta);
}

const tree = treeGenerator();
console.log(JSON.stringify(tree, null, '  ')); // разворачивает структуру дерева
// console.log(tree);
