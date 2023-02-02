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
      
      <footer>Footer</footer>
    </>
  )
}
