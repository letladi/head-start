import axios from 'axios'
import { FILE_UPLOAD_URL, HOST, PORT } from 'constants/urls'

const buildURL = (endpoint) => `${ HOST }:${ PORT }/api${ endpoint }`

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
