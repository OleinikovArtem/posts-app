const baseURL = 'https://jsonplaceholder.typicode.com'


export const getPosts = async (
  callBack = () => { },
  { activePage = 1, limit = 6, search = null, order = 'asc' },
  setLoading,
  setCount) => {
  setLoading(true)
  const searchValue = search ? `?q=${search}&_` : '?_'
  const res = await fetch(`${baseURL}/posts${searchValue}page=${activePage}&_limit=${limit}&_order=${order}`)
  const total = res.headers.get('X-Total-Count')
  setCount(total)
  const data = await res.json()
  setLoading(false)
  callBack(data)
}

export const getPost = async (
  callBack = () => { },
  id
) => {
  const res = await fetch(`${baseURL}/posts/${id}?_embed=comments`)
  const data = await res.json()

  callBack(data)
}

export const postComment = async (
  callBack = () => { },
  comment
) => {

  const res = await fetch(`${baseURL}/posts`, {
    method: 'POST',
    body: JSON.stringify({
      ...comment
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  const status = await res.status
  callBack(status)
}