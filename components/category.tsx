'use client'
import {  useState } from "react"
import Menu from "./menu"

export default function Category({onEmit}:any) {

  interface MenuItem {
      id: number,
      route: string,
      name: string,
      icon?: string,
      children: MenuItem[],
      open?:boolean
    }

  const _menus:MenuItem[] = [
    {
      id: 2, route: '#', name: 'Electronics', icon: '',open:false, children: [
        { id: 3, route: '#', name: 'Camera', children: [] },
        { id: 4, route: '#', name: 'Accessories', children: [] }
      ]
    },
    {
      id: 5, route: '#', name: 'Fashion', icon: 'settings',open:false, children: [
        { id: 6, route: '#', name: 'Mens\' Wear', children: [] },
        { id: 7, route: '#', name: 'Womens\' Wear', children: [] }
      ]
    },
    
  ]

  const [menu, setMenu] = useState<MenuItem[]>(_menus);

  
  

  return (
    <>
      <Menu menus={_menus} path={[]} />
    </>
  )
}