import React, { useEffect, useState } from 'react'
import { type Tour } from '../../types/Tour'
import TourTable from '../../components/table/TableTour'
import { fetchTours } from '../../services/TourService'
import { Box } from '@material-ui/core'
import { TourModal } from '../../components/modal/TourModal'

const TourPage: React.FC = () => {
  const [tours, setTours] = useState<Tour[]>([])
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
  return (
    <Box style={{ width: '1920px', height: '1080px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10%' }}>
      <Box style={{ width: '600px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <h1>Tour Table</h1>
        </Box>
        <Box style={{ marginBottom: '-20px' }}>
          <TourModal/>
        </Box>
      </Box>

    {tours.length > 0
      ? (
      <Box >
        <TourTable tours={tours} />
      </Box>
        )
      : (
      <p>Loading tours...</p>
        )}
  </Box>
  )
}

export default TourPage
