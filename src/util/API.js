const config = {
  method: 'GET',
}

export const getPosts = async (callBack = () => {}, {page = 1, limit = 6}) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?page=${page}&_limit=${limit}`)
  const data = await res.json()
  callBack(data)
}