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
      titleTemplate: '%s – Contenthook Docs',
      openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://docs.contenthook.dev',
        siteName: 'Contenthook Docs',
        images: [
          {
            url: "https://www.contenthook.dev/img/banner.png",
            width: 1920,
            height: 1860,
            alt: "Contenthook",
            type: "image/png",
            secureUrl: "https://www.contenthook.dev/img/banner.png",
          },
        ],
      },
      noindex: false,
      nofollow: false,
      twitter: {
        handle: "@contenthook",
        site: "Contenthook - Advanced, flexible, fast, easy and secure CMS",
        cardType: "summary_large_image",
      },
      additionalMetaTags: [
        {
          name: "apple-mobile-web-app-title",
          content: "Contenthook Docs",
        },
        {
          name: "apple-mobile-web-app-capable",
          content: "yes",
        },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black",
        },
        {
          name: "apple-touch-icon",
          content: "https://www.contenthook.dev/img/apple-touch-icon.png",
        },
        {
          name: "msapplication-TileImage",
          content: "https://www.contenthook.dev/img/mstile-150x150.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "https://www.contenthook.dev/img/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "https://www.contenthook.dev/img/favicon-16x16.png",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
        {
          rel: "mask-icon",
          href: "https://www.contenthook.dev/img/safari-pinned-tab.svg",
          color: "#000000",
        },
        {
          property: "dc:creator",
          content: "Contenthook",
        },
        {
          name: "application-name",
          content: "Contenthook Docs",
        },
        {
          name: "msapplication-TileColor",
          content: "#000000",
        },
        {
          name: "theme-color",
          content: "#000000",
        },
      ] as any,
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
    link: 'https://contenthook.dev/redirects/discord',
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
