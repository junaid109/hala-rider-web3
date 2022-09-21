import React from 'react'

const style = {
    wrapper: 'flex-1 h-full w-full flex flex-col justify-between',
    title: 'flex-1 h-full w-full flex flex-col justify-between overflow-scroll',
    carList: 'flex-1 h-full w-full flex flex-col justify-between overflow-scroll',
    car: 'flex p-3 m-2 items-center border-2 border-white',

}

const carList = [ 
    {
        id: 1,
        name: 'UberX',
        image: 'https://links.papareact.com/3pn',
        time: '8:03PM Drop off',
        price: 'UGX 10,000',
        star: 4.5,
    },
    {
        id: 2,
        name: 'UberXL',
        image: 'https://links.papareact.com/5w8',
        time: '8:03PM Drop off',
        price: 'UGX 15,000',
        star: 4.5,
    },
    {
        id: 3,
        carName: 'UberLUX',
        carImage: 'https://links.papareact.com/7pf',
        time: '8:03PM Drop off',
        price: 'UGX 20,000',
        star: 4.5,
    },
]

const basePrice = 1542.5;
const priceMultiplier = 1.5;

const RiderSelector = () => {

  return (
    <div className={style.wrapper}>
        <div className={style.title}>
            Choose a ride, or swipe up for more options
            <div className={style.carList}>
                {carList.map((car) => (
                    <div key={car.id}>
                        <div className={style.carImage}>
                            <img src={car.image} alt={car.name} />
        
            </div>
            <div className={style.carName}>
                <h3>{car.name}</h3>
            </div>
            <div className={style.carTime}>
                <p>{car.time}</p>
            </div>
            <div className={style.carPrice}>
                <p>{((car.price /10 ** 5) * car.priceMultiplier).toFixed(5)}</p>
            </div>
            <div className={style.carStar}>
                <p>{car.star}</p>
            </div>
        </div>
    ))}
            {/* <div className={style.carInfo}>
                <div className={style.carName}>{carList.}</div>
                <div className={style.carTime}>{carInfo.time}</div>
                <div className={style.carPrice}>{carInfo.price}</div>
                <div className={style.carStar}>{carInfo.star}</div> */}

                
        {/* </div> */}
        
    </div>
    </div>
    </div>


  )
}


export default RiderSelector