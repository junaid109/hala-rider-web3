import LocationSelector from '../components/LocationSelector'
import Map from '../components/Map'
import NavBar from '../components/NavBar'

const style = {
  wrapper: 'h-screen flex flex-col justify-center items-center',
  color: 'red',
  fontSize: '2rem',
  main: 'h-full w-screen flex-1 x-10',
  mapContainer: 'flex1-1 h-full w-full',
  riderRequestContainer: 'h-full w-[400px] m1-[1rem] py-[3rem] absolute left-0 top-0 flex flex-col justify-end', 
  rideRequest: 'h-full max-h-[700px] bg-white rounded-[1rem] shadow-lg flex flex-col overflow-y-auto',
}


export default function Home() {
  return (
    <div className={style.wrapper}>
    <NavBar />
      <div className={style.main}>
      <Map/>
      </div>
      <div className={style.riderRequestContainer}>
      <div className={style.rideRequest}> 
      <LocationSelector/>
          </div> 
      </div>
    </div>

  )
}
