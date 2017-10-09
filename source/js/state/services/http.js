import axios from 'axios'
import { API_BASE_URL, FILE_UPLOAD_URL } from 'constants/urls'

const http = axios.create({
  baseURL: API_BASE_URL,
})

export const upload = ({ file }) => {
  const formData = new FormData()
  formData.append('file', file)

  return http.post(FILE_UPLOAD_URL, formData)
    .then(({ data }) => data)
    .catch((err) => err)
}

export default http
