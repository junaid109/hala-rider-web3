import React from 'react'
import RiderSelector from './RiderSelector'

const style = {
    wrapper: 'flex-1 h-full w-full flex flex-col justify-between',
    rideSelectorContainer: 'flex-1 h-full w-full flex flex-col justify-between overflow-scroll',
    confirmButtonContainer: 'border-t-2 cursor-pointer z-10',
    confirmButton: 'h-[4rem] w-full flex items-center justify-center text-2xl font-bold text-white bg-black',
}

const Confirm = () => {

  const storeTripDetails = async () => {}

  return (
    <div className={style.wrapper}>
        <div className={style.rideSelectorContainer}>
            <RiderSelector />   
            <div className={style.confirmButtonContainer}>
                <div className={style.confirmButton}>Confirm UberX</div>
                <div className={style.confirmButton}
                onClick={() => storeTripDetails()}>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Confirm