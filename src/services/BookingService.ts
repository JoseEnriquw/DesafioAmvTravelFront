import axios from 'axios'
import { type Booking } from '../types/Booking'
import { type BookingProps } from '../components/formulary/FormularyAddBooking'

const apiUrl = 'https://localhost:7242/api/v1/Booking'

export const fetchBookings = async (): Promise<Booking[]> => {
  try {
    const response = await axios.get(apiUrl)
    return response.data
  } catch (error) {
    console.error('Error fetching Bookings:', error)
    throw error
  }
}

export const AddBooking = async (data: BookingProps): Promise<Booking> => {
  try {
    console.log('service', data)
    const response = await axios.post(apiUrl, data)
    return response.data
  } catch (error) {
    console.error('Error fetching Bookings:', error)
    throw error
  }
}

export const UpdateBooking = async (id: number, data: BookingProps): Promise<Booking> => {
  try {
    console.log('service', data)
    const response = await axios.put(apiUrl + '/' + id, data)
    return response.data
  } catch (error) {
    console.error('Error update tours:', error)
    throw error
  }
}
