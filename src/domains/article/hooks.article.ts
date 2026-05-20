import { useQuery } from '@tanstack/react-query'

import { articleApi } from './api.article'

export const useGetArticles = () => {
  return useQuery({
    queryKey: ['articles'],
    queryFn: async () => articleApi.getAll,
  })
}
