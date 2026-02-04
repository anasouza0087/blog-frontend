export const PATHS = {
  POSTS: '/posts',
  NEW_POST: '/posts/new',
  POST_DETAILS: (id: string) => `/posts/${id}`,
  EDIT_POST: (id: string) => `/posts/${id}/edit`,
}
