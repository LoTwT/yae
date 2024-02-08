import { useAtom } from "jotai"
import { useEffect } from "react"
import { type Theme, checkTheme, themeAtom } from "@/atoms"

const dataThemeAttr = "data-theme"
const storageThemeKey = "theme"

export function useTheme() {
  const [theme, setThemeAtom] = useAtom(themeAtom)

  useEffect(() => {
    const mutationCallback: MutationCallback = (list) => {
      for (const mutation of list) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === dataThemeAttr
        ) {
          const dataTheme = getDataTheme()
          setTheme(dataTheme, "storage")
        }
      }
    }

    const observer = new MutationObserver(mutationCallback)

    const config: MutationObserverInit = {
      attributes: true,
      attributeFilter: [dataThemeAttr],
    }

    observer.observe(document.documentElement, config)

    const handleStorage = (e: StorageEvent) => {
      if (e.key === storageThemeKey) {
        const storageTheme = e.newValue
        setTheme(storageTheme, "dataset")
      }
    }

    window.addEventListener("storage", handleStorage)

    return () => {
      observer.disconnect()
      window.removeEventListener("storage", handleStorage)
    }
  }, [])

  useEffect(() => {
    setTheme(theme, "all")
  }, [theme])

  function setTheme(
    t: string | null | undefined,
    type: "all" | "storage" | "dataset",
  ) {
    const isValidTheme = checkTheme(t)

    if (!isValidTheme) return

    if (type === "all" || type === "dataset") {
      setDataTheme(t)
    }

    if (type === "all" || type === "storage") {
      setStorageTheme(t)
    }

    setThemeAtom(t)
  }
}

export function getDataTheme() {
  return document.documentElement.dataset.theme
}

export function setDataTheme(t: string) {
  document.documentElement.dataset.theme = t
}

export function getStorageTheme() {
  return localStorage.getItem("theme")
}

export function setStorageTheme(t: Theme) {
  localStorage.setItem("theme", t)
}
