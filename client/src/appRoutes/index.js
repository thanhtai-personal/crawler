import authRoutes from './auth'
import crawlerRoutes from './crawler'
export default {
  home: '/home',
  ...authRoutes,
  ...crawlerRoutes
}