/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type Tour } from '../types/Tour'
import { type ActionTour } from '../types/ActionTour'
import { fetchTours } from '../services/TourService'
import { useEffect, useState } from 'react'
import { type TourTableProps } from '../components/table/TableTour'

export const initialState: TourTableProps = {
  tours: []
}

export const TourReducer = (state: Tour[], action: ActionTour) => {
  const [tours, setTours] = useState<Tour[]>([])

  switch (action.type) {
    case 'AddTour':

      break

    case 'UpdateTour':
      break

    case 'GetTours':
      useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        const fetchData = async () => {
          try {
            const toursData = await fetchTours()
            setTours(toursData)
          } catch (error) {
            console.log(error)
          }
        }

        void fetchData()
      }, [])
      return {
        ...state,
        ...tours
      }

    default:
      break
  }
}
