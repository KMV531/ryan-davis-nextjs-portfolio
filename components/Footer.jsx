import Socials from "./Socials"

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          {/* Socials */}
          <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0 mb-4" iconStyles="text-primary text-[20px] dark:text-white/70 hover:text-white dark:hover:text-primary transition-all" />

          {/* Copyright */}
          <div className="text-muted-foreground">
            Copyright &copy; Ryan Davis. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
