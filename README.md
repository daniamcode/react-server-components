# react-server-components
Playing with React Server Components in Nextjs

In this example we will have a Product Description, server side rendered, because we need speed for SEO purposes, and a Comments component that will be client side rendered because it needs freshness, and we don't care if it loads later. But all the logic is done in the server (the server keeps the connection open all the time while waiting for the comments to be served) 

We also will have an input and a button to introduce comments, so we will have to manage state, thus use client side components!