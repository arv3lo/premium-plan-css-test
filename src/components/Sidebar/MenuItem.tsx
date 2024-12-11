import { TMenuItemProps } from "@/common/types";

const MenuItem = ({ label, icon }: TMenuItemProps) => {
    const renderIcon = (itemIcon: string) => {
        switch (itemIcon) {
            case "star":
                return <span>⭐️</span>
            case "board":
                return <span>🗂️</span>
            case "lock":
                return <span>🔒</span>
            default:
                return <img src={itemIcon} alt="menu icon" height="10%" />
        }
    }
    return (
        <div className="menuItem">
            {renderIcon(icon)}
            <p className="menuItemLabel">{label}</p>
        </div>
    );
}

export default MenuItem;