import { atom } from "jotai"
import { getDataTheme, getStorageTheme } from "@/hooks/theme"

export const PresetThemes = {
  light: "light",
  dark: "dark",
} as const

export type Theme = (typeof PresetThemes)[keyof typeof PresetThemes]

export const themeAtom = atom(getDefaultTheme())

export const isDarkAtom = atom(
  (get) => get(themeAtom) === PresetThemes.dark,
  (_, set, value: boolean) => {
    const theme = value ? PresetThemes.dark : PresetThemes.light
    set(themeAtom, theme)
  },
)

export function checkTheme(t: string | null | undefined): t is Theme {
  return !!t && (Object.values(PresetThemes) as string[]).includes(t)
}

function getDefaultTheme() {
  const dataTheme = getDataTheme()

  if (checkTheme(dataTheme)) return dataTheme

  const storageTheme = getStorageTheme()

  if (checkTheme(storageTheme)) return storageTheme

  return PresetThemes.light
}
