const Footer = () => {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-5xl mx-auto flex justify-center">
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Mhd Zubair. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;