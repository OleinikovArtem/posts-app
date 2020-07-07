const config = {
  method: 'GET',
}

export const getPosts = async (
  callBack = () => { },
  { activePage = 1, limit = 6, search = null, order = 'asc' },
  setLoading,
  setCount) => {
  setLoading(true)
  const searchValue = search ? `?q=${search}&_` : '?_'
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts${searchValue}page=${activePage}&_limit=${limit}&_order=${order}`)
  const total = res.headers.get('X-Total-Count')
  setCount(total)
  const data = await res.json()
  setLoading(false)
  callBack(data)
}

