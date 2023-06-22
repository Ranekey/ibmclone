import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";


export default function Results({results} : {results: any}) {
  return (
    <div>
        {results.map(
        (
                (            result: { id: Key | null | undefined; original_title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) =>(
            <div key ={result.id}>
                {result.original_title}
            </div>)
        ))}
    </div>
  )
}
