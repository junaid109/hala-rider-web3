import React, { useState } from 'react'

const style = {
    wrapper: 'pt-2',
    searchHeader: 'w-full font-bold text-left items-center text-3x1 p-4 overflow:hidden',
    inputBoxes: 'flex flex-col mb-4 relative',
    inputBox: 'h-10 mx-4 border-2 bg-[#eeeeee]',
    focusedInputBox: 'border-black',
    svgContainer: 'mx-1',
    input: 'my-2 rounded-2 p-2 outline-none border-none bg-transparent h-full w-full',
    verticalLine: 'w-0 h-[2rem] border-black border absolute z-10 left-[2.3rem]'
}
const LocationSelector = () => {
  const [inFocus, setInFocus] = useState('from')
  const [pickUp, setPickUp] = useState('')
  const [dropOff, setDropOff] = useState('')

  return (
    <div className={style.wrapper}>
    <div className={style.searchHeader}> 
        <div className={style.wrapper}>
            {inFocus === 'from' ? 'Where can we you pick you up?' : 'Where can we drop you off?'}
        </div>
        <div className={style.inputBoxes} >
          <div className={`${style.inputBox} ${
            inFocus === 'from' && style.focusedInputBox
            }`}
            >
            <div className={style.svgContainer}>
              <svg viewBox='0 0 24 24' width='1em' height='1em'>
                <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 14a2 2 0 100-4 2 2 0 000 4zm5-2a5 5 0 11-10 0 5 5 0 0110 0z'>
                </path>
              </svg>
            </div>
            <input 
            className={style.input} 
            placeholder="Enter pickup location"
            value={pickUp}
            onChange={(e) => setPickUp(e.target.value)}
            onFocus={() => setInFocus('from')}
            >
            </input>
          </div>
          <div className={style.verticalLine}>
          </div>
          <div className={`${style.inputBox} ${
            inFocus === 'to' && style.focusedInputBox
          }`}
          >
          <div className={style.svgContainer}>
            <svg viewBox='0 0 24 24' width='1em' height='1em'>
              <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M14 10h-4v4h4v-4zM7 7v10h10VHXH7z'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}



export default LocationSelector