/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/// <reference types="@welldone-software/why-did-you-render" />

import React from 'react'
import Recoil from 'recoil'

if (
  process.env.NODE_ENV === 'development' &&
  process.env.ENABLE_WDYR === 'true'
) {
  const whyDidYouRender = require('@welldone-software/why-did-you-render')
  whyDidYouRender(React, {
    trackAllPureComponents: true, // track all pure components, memo,... instead of manually pass whyDidYouRender prop
    trackHooks: true,
    trackExtraHooks: [
      [Recoil, 'useRecoilValue'],
      [Recoil, 'useRecoilState'],
    ],
  })
}
