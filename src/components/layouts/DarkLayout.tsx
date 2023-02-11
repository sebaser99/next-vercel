import { FC, ReactNode } from "react"

interface Props {
children : ReactNode
}


export const DarkLayout: FC<Props> = ({children}) => {
  return (
    <div style={{backgroundColor: 'rgba(0,0,0, 0.3)', 
        padding: '10px',
        minHeight: '400px',
        minWidth: '300px',
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '1rem'
    }}>
        <h3>DarkLayout</h3>
        <div>
            {children}
        </div>
    </div>
    
  )
}
