import { useFetch, UseFetchOptions } from '#app'
import IResponse from 'models/IResponse'

export const useServerRequest = async <T>(url: string, options?: UseFetchOptions<IResponse<T>>): Promise<T> => {
    const opts: UseFetchOptions<IResponse<T>> = { baseURL: '/api', ...options }
    const { data, error } = await useFetch<IResponse<T>>(url, opts)
    if (error.value) return Promise.reject(error.value.message)
    return data.value?.code === '1000' ? Promise.resolve(data.value?.data) : Promise.reject(data.value?.tips)
}