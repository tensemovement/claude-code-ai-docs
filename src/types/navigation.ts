export interface NavCategory {
  label: string;
  href: string;
}

export interface NavItem {
  title: string;
  href: string;
  icon?: string;
}

export interface NavSection {
  category: string;
  items: NavItem[];
}
