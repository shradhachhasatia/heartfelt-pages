const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground font-light text-sm tracking-wide">
            © {new Date().getFullYear()} drafts of heart. All rights reserved.
          </p>
          <p className="text-muted-foreground/60 font-light text-xs mt-2 italic">
            crafted with care
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
