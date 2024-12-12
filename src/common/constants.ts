import ListIcon from '@/assets/icons/List.svg'
import ClockIcon from '@/assets/icons/Clock.svg'
import BoardIcon from '@/assets/icons/Board.svg'
import SearchIcon from '@/assets/icons/Search.svg'

import { TMenuItemProps } from "./types";

export const MENU_ITEMS: TMenuItemProps[] = [
  { icon: ListIcon, label: "My templates" },
  { icon: SearchIcon, label: "Search" },
  { icon: "star", label: "Software engineer" },
  { icon: "star", label: "Computer hardware engineer" },
  { icon: "star", label: "Network engineer" },
  { icon: "star", label: "Technical support" },
  { icon: "star", label: "Network administrator" },
  { icon: "star", label: "Management" },
  { icon: "star", label: "Data analysis" },
  { icon: "star", label: "Computer vision" },
  { icon: ClockIcon, label: "Past search 1" },
  { icon: ClockIcon, label: "Past search 2" },
  { icon: ClockIcon, label: "Computers and information..." },
  { icon: ClockIcon, label: "Database administrator" },
  { icon: ClockIcon, label: "Computer security" },
  { icon: ClockIcon, label: "Computer Systems Analyst" },
  { icon: BoardIcon, label: "My boards" },
  { icon: "board", label: "Board 1" },
  { icon: "board", label: "Board 2" },
  { icon: "board", label: "Board 3" },
  { icon: "lock", label: "Board agent 1" },
  { icon: "lock", label: "Board agent 1" },
  { icon: "lock", label: "Board agent 1" },
];
