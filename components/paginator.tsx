import { ChevronLeft, ChevronRight } from "lucide-react";
import PageBtn from "./button/page-btn";

export default function Paginator() {
    return (
        <div className="flex ">
            <PageBtn><ChevronLeft/></PageBtn>
            <PageBtn><span>1</span></PageBtn> 
            <PageBtn><span>2</span></PageBtn> 
            <PageBtn><ChevronRight/></PageBtn> 
        </div>
    )
}