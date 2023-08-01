
interface MenuProps {
    options: string[]
}

const Menu: React.FC<MenuProps> = ({ options }) => {

    return (
        <div className="hidden md:flex justify-center gap-4">
            {options.map((option) => (
                <a key={option} href={`#${option}`} className="text-lg font-bold">{option}</a>
            ))}
        </div>
    )
}

export default Menu;