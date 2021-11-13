import React, { useEffect, useState } from 'react'
import moment from 'moment'
import './index.less'

const FORMAT = 'YYYY-MM-DD HH:mm:ss'
const GlobalFooter = () => {
  const [currTime, setCurrTime] = useState(moment().format(FORMAT))

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrTime(moment().format(FORMAT))
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return <div className="global_footer">{`©time ${currTime}`}</div>
}
export default GlobalFooter
