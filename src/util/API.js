export const getPosts = async (callBack = () => {}) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  callBack(data)
}