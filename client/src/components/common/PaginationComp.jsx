import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationNext, PaginationLink, } from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";


function PaginationComp({page, setPage, totalPages, limit}) {
   
  return (
    <Pagination>
  <PaginationContent className="flex justify-center items-center mt-10 space-x-2">
    <PaginationItem>
      <PaginationPrevious
        onClick={() => setPage((p) => Math.max(1, p - 1))}
        aria-disabled={page === 1}
        className={`flex items-center px-3 py-1 border rounded hover:bg-gray-50 ${
          page === 1 ? "pointer-events-none opacity-50" : ""
        }`}
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Previous
      </PaginationPrevious>
    </PaginationItem>
    {Array.from({ length: totalPages }).map((_, idx) => (
      <PaginationItem key={idx + 1}>
        <PaginationLink
          isActive={page === idx + 1}
          onClick={() => setPage(idx + 1)}
          className={`px-3 py-1 border rounded ${
            page === idx + 1
              ? "bg-orange-500 text-white"
              : "hover:bg-gray-50"
          }`}
        >
          {idx + 1}
        </PaginationLink>
      </PaginationItem>
    ))}
    <PaginationItem>
      <PaginationNext
        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
        aria-disabled={page === totalPages}
        className={`flex items-center px-3 py-1 border rounded hover:bg-gray-50 ${
          page === totalPages ? "pointer-events-none opacity-50" : ""
        }`}
      >
        Next
        <ChevronRight className="h-4 w-4 ml-1" />
      </PaginationNext>
    </PaginationItem>
  </PaginationContent>
</Pagination> 
  )
}

export default PaginationComp
