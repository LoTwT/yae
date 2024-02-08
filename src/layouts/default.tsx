import DefaultLayoutHeader from "@/components/layouts/default/header"
import type { PropsWithChildren } from "react"

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <DefaultLayoutHeader />
      <main>{children}</main>
    </>
  )
}

export default DefaultLayout
