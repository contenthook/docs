import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { DocsThemeConfig } from 'nextra-theme-docs'

const useDark = () => {
  const { resolvedTheme } = useTheme()
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    setIsDark(resolvedTheme === 'dark')
    return () => false
  }, [resolvedTheme])
  return isDark
}

const theme: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Contenthook Resources'
    }
  },
  primaryHue: 196,
  primarySaturation: 100,
  banner: {
    dismissible: true,
    key: 'contenthook',
    text: 'Welcome to ContentHook! Keep in mind, we are still in beta.',
  },
  logo: function Logo() {
    const isDark = useDark()

    return (<>
    {isDark && (
      <img
        src='http://localhost:3000/img/logo.png'
        alt='Contenthook'
        draggable='false'
        style={{ width: 50 }}
      />
    )}
    <span style={{font: "bold 20px sans-serif"}}>Contenthook</span>
  </>)
  },
  project: {
    link: 'https://github.com/contenthook/docs',
  },
  chat: {
    link: 'https://discord.gg/contenthook',
  },
  docsRepositoryBase: 'https://github.com/contenthook/docs',
  editLink: {
    text: 'Edit this page on GitHub',
  },
  footer: {
    text: 'Powered by Nextra, used by ContentHook',
  },
  sidebar: {
    autoCollapse: true,
    toggleButton: true,
  },
  themeSwitch: {
    useOptions() {
      return {
        light: 'Light',
        dark: 'Dark',
        system: 'System',
      }
    }
  }
}

export default theme;
