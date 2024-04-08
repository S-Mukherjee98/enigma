'use client'

import store from '@/redux/store'
import React, { Children,  } from 'react'
import { Provider } from 'react-redux'
function StoreProvider({children}:{children:React.ReactNode}) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default StoreProvider