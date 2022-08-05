# learn-relay-graphql

[Relay Introduction](https://www.newline.co/fullstack-react/p/relay)

[GraphQL & Relay in the Front End](https://www.telerik.com/blogs/graphql-relay-front-end)


[Explaining GraphQL Connections](https://www.apollographql.com/blog/graphql/explaining-graphql-connections/)

[In GraphQL what's the meaning of "edges" and "node"?](https://stackoverflow.com/questions/42622912/in-graphql-whats-the-meaning-of-edges-and-node)

## Resources

[awesome-graphql](https://github.com/chentsulin/awesome-graphql)

## Public GraphQL

[8 Free to Use GraphQL APIs for Your Projects and Demos](https://www.apollographql.com/blog/community/backend/8-free-to-use-graphql-apis-for-your-projects-and-demos/)


[SpaceX-pxxbxen@current](https://studio.apollographql.com/public/SpaceX-pxxbxen/home?variant=current)


## Example 

[Github Issue: Relay: loadQuery should not be called inside a React render function. #3449](https://github.com/facebook/relay/issues/3449)

loadQuery cannot be used in a function component

```js
/*define appQuery*/

const Header = ({appQueryRef}:Props)=>{
    const data = usePreloadedQuery(appQuery, appQueryRef)
    return <h1>data.user</h1>
}

const App = () => {
    const [appQueryRef, loadQuery] = useQueryLoader<AppQueryType>(appQuery);

    if appQueryRef === null: return null;

    return <Suspense fallback={<Loading...>}>
        <Header appQueryRef = {appQueryRef} />
    </Suspense>
}

```

