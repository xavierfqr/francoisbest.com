import React from 'react'
import Stack, { StackProps } from '@chakra-ui/core/dist/Stack'
import IconButton from '@chakra-ui/core/dist/IconButton'
import { useColorMode } from '@chakra-ui/core/dist/ColorModeProvider'
import { Logo } from 'src/components/Logo'
import { NavLink, RouteLink, navLinkMatch } from '@47ng/chakra-next'
import { FiTwitter, FiSun, FiMoon } from 'react-icons/fi'
import { OutgoingIconButtonLink } from './OutgoingIconButtonLink'
import { AccentPicker } from 'src/components/Accent'

export interface NavHeaderProps extends StackProps {}

const navLinkProps = {
  flexShrink: 0,
  active: {
    textDecoration: 'underline'
  }
}

export const NavHeader: React.FC<NavHeaderProps> = ({ ...props }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Stack
      as="nav"
      isInline
      spacing={[4, 6]}
      alignItems="center"
      gridRowGap={1}
      flexWrap="wrap"
      {...props}
    >
      <RouteLink to="/" rounded="full">
        <Logo size={8} aria-label="François Best" />
      </RouteLink>
      <NavLink to="/" {...navLinkProps} shouldBeActive={navLinkMatch.exact}>
        About
      </NavLink>
      <NavLink to="/open-source" {...navLinkProps}>
        Open Source
      </NavLink>
      <NavLink to="/posts" {...navLinkProps}>
        Blog
      </NavLink>
      <Stack ml="auto" isInline spacing={0}>
        <OutgoingIconButtonLink
          icon={FiTwitter}
          aria-label="Follow me on Twitter"
          href="https://twitter.com/fortysevenfx"
          variant="ghost"
          isRound
        />
        <AccentPicker
          aria-label="Accent Color Picker"
          variant="ghost"
          zIndex={1} // Allow the outline to display over siblings
        />
        <IconButton
          aria-label={colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
          icon={colorMode === 'dark' ? FiMoon : FiSun}
          isRound
          variant="ghost"
          onMouseDown={toggleColorMode}
        />
      </Stack>
    </Stack>
  )
}
