export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Copyright © Sujit Raj Thapa {new Date().getFullYear()} All rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

