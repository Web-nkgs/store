/* template vs layout example, 
Layout --> The interaction is fast cause they share the
 same layout, this is due to that everytime you change route 
 the layout doesn't get re-mounted. 

 Template --> Does get re-mounted. (you use it by naming a file template)
 Everytime it gets re-mounted, it's children get re-mounte as well.
 Useful when we have dynamic components (animation on route change, react hooks, 
    metrics registration (google analytics, amplitud) etc.) */
export default function Page() {
    return <h1>test</h1>
}