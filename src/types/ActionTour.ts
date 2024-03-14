import { type Tour } from './Tour'

export type ActionTour = | { type: 'AddTour', tour: Tour }
| { type: 'UpdateTour', tour: Tour }
| { type: 'GetTours' }
