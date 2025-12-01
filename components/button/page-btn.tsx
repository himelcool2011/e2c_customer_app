export default function PageBtn({children}:{children:React.ReactNode}){
    return (
        <button className="ml-2 cursor-pointer border font-semibold text-gray-700 border-gray-200 px-3" type="button">{children}</button>
    )
}