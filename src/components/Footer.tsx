const Footer = () => {
  return (
    <footer className="py-12 section-padding bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="font-display text-xl font-bold text-primary-foreground">
              AFT<span className="text-primary-foreground/50">.</span>
            </a>
            <p className="text-primary-foreground/60 text-sm mt-1">
              Engineering the Future of African Enterprise.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
            >
              X (Twitter)
            </a>
            <a
              href="https://www.adaptive-future.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm"
            >
              Website
            </a>
          </div>
        </div>

        <div className="h-px bg-primary-foreground/10 mt-8 mb-6" />

        <p className="text-center text-primary-foreground/40 text-xs">
          © {new Date().getFullYear()} Adaptive Future Technology Solution Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
