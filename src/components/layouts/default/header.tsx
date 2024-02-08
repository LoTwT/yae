import ThemeToggle from "@/components/theme/toggle"

const DefaultLayoutHeader = () => {
  return (
    <header
      className={`
        h-12 flex justify-end items-center px-2 py-2
        bg-base-100 text-base-content sticky top-0 z-30  
        w-full  bg-opacity-90 backdrop-blur transition-shadow
        duration-100 [transform:translate3d(0,0,0)] shadow-md
      `}
    >
      <ThemeToggle />
    </header>
  )
}

export default DefaultLayoutHeader
