import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://countries.trevorblades.com/graphql"
})

type Props = {
    children: React.ReactElement
}

const ABApolloClient = ({ children }: Props) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}

export default ABApolloClient;