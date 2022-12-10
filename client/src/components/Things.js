import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchThings } from '../store/thingSlice';

const Things = () => {
  const dispatch = useDispatch()
  const { things } = useSelector(state => state.thing)

  useEffect(() => {
    dispatch(fetchThings())
  }, [])

  return (
    <div>
      {things.map(thing => (
        thing.name
      ))}
    </div>
  )
}

export default Things