<motion.nav
  className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm"
  initial={{ y: -100 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.5 }}
>
  <div className="container mx-auto px-4">
    <div className="flex items-center justify-between h-16">
      
      {/* Left-aligned Navigation */}
      <div className="flex items-center gap-8">
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  activeSection === item.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right-aligned Social Links */}
      <SocialLinks />

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <motion.div 
        className="md:hidden"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <ul className="py-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`block py-2 px-4 text-sm font-medium transition-colors hover:text-foreground ${
                  activeSection === item.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-4 py-2">
          <SocialLinks />
        </div>
      </motion.div>
    )}
  </div>
</motion.nav>
