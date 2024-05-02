import { DivAdminLoja, NavButton } from '../../css/AdminLoja'
import { useState, useEffect } from 'react'
export const AdminLoja = () => {
    const [CarItens, SetCarItens] = useState(null)

    return (
        <>
            <DivAdminLoja >
                <div id='ListButtons'>
                    <NavButton>aaaaa</NavButton>
                    <NavButton>aaaaa</NavButton>
                    <NavButton>aaaaa</NavButton>
                    <NavButton>aaaaa</NavButton>
                    <NavButton>aaaaa</NavButton>
                </div>
                <div className='StoreBase'>
                    <span>aaaaaaaaaaaaaaa</span>
                </div>
            </DivAdminLoja>
        </>
    )
}