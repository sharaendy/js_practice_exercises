module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  presets: [['@babel/preset-react', {targets: {node: 'current'}}]],
};

//! это из тестов hexlet
// module.exports = {
//   presets: [
//     '@babel/preset-react',
//     ['@babel/env', {
//       targets: {
//         node: 'current',
//       },
//     }],
//   ],
//   plugins: [
//     '@babel/plugin-proposal-class-properties',
//   ],
// };
