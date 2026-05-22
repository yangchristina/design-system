'use client'
import React from 'react'
import { NumberInput } from '../../../src'

const Page = () => {
  const [value, setValue] = React.useState<number | undefined>(undefined)
  // <NumberInput allowUndefined debounceWait={0} precision={2} min={0} max={6000} {...field} />
  return (
    <div>
      {value}
      <NumberInput debounceWait={500} precision={2} min={0} max={10} value={value} onChange={setValue} />
    </div>
  )
}

export default Page
