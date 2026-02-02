'use client';

import { useRouter } from 'next/navigation';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { ShoppingCart } from 'lucide-react';
import { products } from '@/lib/products';

export default function Home() {
  const router = useRouter();
  const { getCartCount, isLoaded } = useCart();
  const cartCount = getCartCount();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-light tracking-wide text-foreground">
              Artisan Store
            </h1>
            <p className="text-sm text-muted-foreground">Curated home decor</p>
          </div>
          <Button
            onClick={() => router.push('/cart')}
            variant="outline"
            className="flex items-center gap-2 border-border hover:bg-muted"
          >
            <ShoppingCart size={20} />
            <span className="hidden sm:inline">Cart</span>
            {isLoaded && cartCount > 0 && (
              <span className="ml-1 px-2 py-1 bg-primary text-white text-xs rounded-full font-semibold">
                {cartCount}
              </span>
            )}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-muted/50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-light mb-4 text-foreground">
            Welcome to Artisan Store
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover handcrafted home decor and furniture for your perfect space
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-muted-foreground text-sm">
          <p>© 2024 Artisan Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
