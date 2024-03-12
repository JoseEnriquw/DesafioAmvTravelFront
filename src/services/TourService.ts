import axios from 'axios'
import { type Tour } from '../types/Tour'
import { type TourProps } from '../components/formulary/FormularyAddTour'

const apiUrl = 'https://localhost:7242/api/v1/Tour'

export const fetchTours = async (): Promise<Tour[]> => {
  try {
    const response = await axios.get(apiUrl)
    return response.data
  } catch (error) {
    console.error('Error fetching tours:', error)
    throw error
  }
}

export const AddTour = async (data: TourProps): Promise<Tour> => {
  try {
    console.log('service', data)
    const response = await axios.post(apiUrl, data)
    return response.data
  } catch (error) {
    console.error('Error fetching tours:', error)
    throw error
  }
}
