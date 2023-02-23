import terser from '@rollup/plugin-terser'
import typescript from '@rollup/plugin-typescript'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/pubsub.cjs.js',
        format: 'cjs'
      },
      {
        file: 'dist/pubsub.cjs.min.js',
        format: 'cjs',
        plugins: [
          terser()
        ]
      },
      {
        file: 'dist/pubsub.esm.js',
        format: 'es'
      },
      {
        file: 'dist/pubsub.esm.min.js',
        format: 'es',
        plugins: [
          terser()
        ]
      },
      {
        file: 'dist/pubsub.iife.js',
        format: 'iife',
        name: 'PubSubLib'
      },
      {
        file: 'dist/pubsub.iife.min.js',
        format: 'iife',
        name: 'PubSubLib',
        plugins: [
          terser()
        ]
      },
      {
        file: 'dist/pubsub.min.js',
        format: 'umd',
        name: 'PubSubLib',
        plugins: [
          terser()
        ]
      }
    ],
    plugins: [
      typescript()
    ]
  }
]