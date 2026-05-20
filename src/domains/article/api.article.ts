import axios from 'axios'

import type { ArticleResponse } from './types.article'

class ArticleApi {
  async getAll(): Promise<ArticleResponse> {
    // @ts-ignore - This is a mock API, so we ignore TypeScript errors for demonstration purposes
    const { data } = axios.get('/articles')
    return data
  }
}

export const aricleApi = new ArticleApi()
