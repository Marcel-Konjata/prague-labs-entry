import {FC} from 'react'
import {Header} from "./Header";


export const Layout: FC = ({children}) => {

    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
