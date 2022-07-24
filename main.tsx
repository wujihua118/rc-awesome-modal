import React from 'react'
import { createRoot } from 'react-dom/client'
import 'packages/styles/index.scss'

// import { OverlayDemo } from 'packages/components/overlay/__example__'
import { ModalDemo } from 'packages/components/modal/__example__'

const root = createRoot(document.getElementById('root')!)
root.render(<ModalDemo />)