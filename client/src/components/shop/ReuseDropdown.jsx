import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

function ReuseDropdown({ trigger, option,sort,setSort}) {
  //  const [selected, setSelected] = useState(option[0]?.id || "");
  
  const handleSort = (value) => {
    setSort(value); // Update the sort state in the parent component

  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
      <DropdownMenuContent side="bottom" align="end">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup onValueChange={handleSort} value={sort}>
          {option.map((item) => (
            <DropdownMenuRadioItem key={item.id} value={item.id}>
              {item.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ReuseDropdown;