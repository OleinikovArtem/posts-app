// const config = {
//   method: 'GET',
// }

export const getPosts = async (
    callBack = () => { },
    { page = 1, limit = 6, search = null, order = 'asc' }, 
    setLoading) => {
  setLoading(true)
  const searchValue = search ? `?q=${search}&` : '?_'
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts${searchValue}page=${page}&_limit=${limit}&_order=${order}`)
  const data = await res.json()
  setLoading(false)
  callBack(data)
}

