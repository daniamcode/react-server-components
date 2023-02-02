import { Suspense } from 'react';
import Comments from './Comments'

// to fake the backend
const fetchDescription = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("Product information ready for SEO"), 250)
  );

// with React Server Components (by default in Nextjs 13), we can await inside components
export default async function Home() {
  const description = await fetchDescription()
  return (
    <>
      <header>Header</header>
      
      <h2>Product description</h2>
      {/* <p>{description}</p> */}

      <h2>Comments</h2>
      {/* we add Suspense to watch the delay of 2 seconds */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* The Comments component is not returning JSX; is returning a Promise instead, that's 
        why we get an error that we need to skip for the purpose of this backend fake example */}
        {/* @ts-expect-error Async Server Component */}
        <Comments/>
      </Suspense>
      
      <footer>Footer</footer>
    </>
  )
}
