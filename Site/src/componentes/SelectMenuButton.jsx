import { useState,useEffect } from "react"
import { config } from ".././config.js"
import { SelectMenu } from '../css/NavBar.ts'

export const SelectMenuButton = ({prop}) => {
    return (
        <>
         <SelectMenu>
            <div label="Gêneros" cols="3" className="nfDropDown open theme-lakira">
              <div role="menu" className="sub-menu theme-lakira" style={{ opacity: 1, transitionDuration: '150ms' }}>
                <ul className="sub-menu-list multi-column">
                  {prop.map((option, i) => (
                    <li key={i} className="sub-menu-item" role="none" onClick={() => { location.href = option.href }}>
                      <a className="sub-menu-link">{option.title ? option.title : ''}</a>
                      <span>{option.description ? option.description : ''}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div >
          </SelectMenu>
        </>
    )
} 