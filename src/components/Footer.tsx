const Footer = () => {
  return (
    <footer className="py-12 section-padding border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <a href="#" className="font-display text-xl font-bold text-foreground">
              AFT<span className="text-primary">.</span>
            </a>
            <p className="text-muted-foreground text-sm mt-1">
              Engineering the Future of African Enterprise.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              X (Twitter)
            </a>
            <a
              href="https://www.adaptive-future.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              Website
            </a>
          </div>
        </div>

        <div className="glow-line mt-8 mb-6" />

        <p className="text-center text-muted-foreground text-xs">
          © {new Date().getFullYear()} Adaptive Future Technology Solution Limited. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
