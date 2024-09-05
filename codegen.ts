import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    overwrite: true,
    schema: 'https://api.storebm.com/graphql',
    documents: ['src/**/*.query.ts', 'src/**/*.mutation.ts'],
    generates: {
        'src/common/gql-generated/': {
            preset: 'client',
            plugins: [],
        },
        './graphql.schema.json': {
            plugins: ['introspection'],
        },
    },
}

export default config
