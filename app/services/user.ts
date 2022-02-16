import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';

export default function User() {
  return apiClient.get(ApiConfig.USER);
}
