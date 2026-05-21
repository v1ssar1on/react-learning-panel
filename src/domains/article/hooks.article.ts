import { useQuery } from '@tanstack/react-query'

import { articleApi } from './api.article'

export const articleKeys = {
  all: ['articles'] as const,
}

export const useGetArticles = () => {
  return useQuery({
    queryKey: articleKeys.all,
    queryFn: () => articleApi.getAll(),
  })
}
