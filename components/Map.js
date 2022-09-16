import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

const style = {
    wrapper: 'h-screen flex flex-col justify-center items-center',
}
const Map = () => {

    useEffect(() => {
        mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-74.5, 40],
            zoom: 9
        })

    }, [])
  return (
    <div className={style.wrapper}>Map</div>
  )
}

export default Map