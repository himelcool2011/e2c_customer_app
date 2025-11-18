
import MenuItem from "./menu-item";

 interface MenuItem {
    id: number,
    route: string,
    name: string,
    icon?: string,
    children: MenuItem[],
    open?:boolean
  }

export default function MenuList({menus, onEmit }:any) {
    
    return (
        <aside className="mt-2 ">
            {/* <!-- Top logo --> */}


            {/* <!-- Collapsible lower menu --> */}
            <div className="h-auto">
                <ul className="space-y-2">
                    {menus && menus.map((menuItem:MenuItem) => 
                        
                        <MenuItem key={menuItem.id}  menuItem={menuItem} />
                    )}
      
                </ul>
            </div>
        </aside>

    );
}