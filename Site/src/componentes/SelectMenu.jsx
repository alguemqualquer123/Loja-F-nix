import { SelectMenus } from '../css/NavBar';


const SelectMenu = ({ active }) => {
    return (
        <>
            {active && (
                <SelectMenus>
                    <ul className="dropdown-menu">
                        <li onClick={() => handleSelectOption('Opção 1')}>Opção 1</li>
                        <li onClick={() => handleSelectOption('Opção 2')}>Opção 2</li>
                        <li onClick={() => handleSelectOption('Opção 3')}>Opção 3</li>
                    </ul>
                </SelectMenus>
            )}
        </>
    )
}
export default  SelectMenu