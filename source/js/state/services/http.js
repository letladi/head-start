import axios from 'axios'

import { FILE_UPLOAD_URL } from 'constants/urls'

const HOST = 'http://localhost:8080/api'
const buildURL = (endpoint) => `${ HOST }${ endpoint }`

export const get = ({ url, endpoint, params }) => axios.get(url || buildURL(endpoint), { params })

export const post = ({ url, endpoint, data }) => axios.post(url || buildURL(endpoint), { ...data })

export const put = ({ url, endpoint, data }) => axios.put(url || buildURL(endpoint), { ...data })

export const upload = ({ file }) => {
  const formData = new FormData()
  formData.append('file', file)

  return axios.post(FILE_UPLOAD_URL, formData)
    .then(({ data }) => data)
    .catch((err) => err)
}
