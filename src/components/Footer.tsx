const Footer = () => {
  return (
    <footer className="py-16 bg-background border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-muted-foreground text-sm tracking-wide font-light">
            © {new Date().getFullYear()} drafts of heart
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
