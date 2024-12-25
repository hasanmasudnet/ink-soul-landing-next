export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-pacifico text-xl mb-4">Ink & Soul</h3>
            <p className="text-muted-foreground">
              Premium tattoo artistry in a welcoming, professional environment
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <address className="text-muted-foreground not-italic">
              123 Tattoo Street<br />
              Art District<br />
              contact@inkandsoul.com<br />
              (555) 123-4567
            </address>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <p className="text-muted-foreground">
              Monday - Saturday: 10am - 8pm<br />
              Sunday: Closed
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ink & Soul Tattoo Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}