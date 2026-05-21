import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  Sidebar as SidebarUI,
} from '@/shared/ui/sidebar'
import { Link } from 'react-router-dom'

import { sidebarConstants } from '../common/constants.sidebar'
import { SearchForm } from '../ui/search-form'
import { VersionSwitcher } from '../ui/version-switcher'

export const Sidebar = () => {
  return (
    <SidebarUI>
      <SidebarHeader>
        <VersionSwitcher
          versions={sidebarConstants.versions}
          defaultVersion={sidebarConstants.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        {sidebarConstants.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </SidebarUI>
  )
}
