import React, { useState } from 'react'

const style = {
    wrapper: 'pt-2',
    searchHeader: 'w-full font-bold text-left items-center text-3x1 p-4 overflow:hidden',
    inputBoxes: 'flex flex-col mb-4 relative',
    inputBox: 'h-10 mx-4 border-2 bg-[#eeeeee]',
    focusedInputBox: 'border-black',
    input: 'my-2 rounded-2 p-2 outline-none border-none bg-transparent h-full w-full'
}
const LocationSelector = () => {
    const [inFocus, setInFocus] = useState('')

  return (
    <div className={style.wrapper}>
    <div className={style.searchHeader}> 
        <div className={style.wrapper}>
            {inFocus === 'from' ? 'Where can we you pick you up?' : 'Where can we drop you off?'}
        </div>
    </div></div>
  )
}

export default LocationSelector