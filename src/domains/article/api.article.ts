import axios from 'axios'

import type { IArticle } from './types.article'

class ArticleApi {
  async getAll(): Promise<IArticle[]> {
    const { data } = await axios.get<IArticle[]>(
      'https://jsonplaceholder.typicode.com/posts',
    )
    return data
  }
}

export const articleApi = new ArticleApi()
