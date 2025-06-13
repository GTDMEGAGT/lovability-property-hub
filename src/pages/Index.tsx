
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Home, Users, Star, ArrowRight, Eye, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const year = new Date().getFullYear();

  const featuredProperties = [
    {
      id: 1,
      title: "Modern Downtown Condo",
      price: "$850,000",
      location: "Downtown District",
      beds: 3,
      baths: 2,
      sqft: "1,850",
      image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800&h=600&fit=crop",
      type: "Sale",
      featured: true
    },
    {
      id: 2,
      title: "Luxury Villa with Pool",
      price: "$2,200/month",
      location: "Riverside Heights",
      beds: 4,
      baths: 3,
      sqft: "2,400",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
      type: "Rent",
      featured: true
    },
    {
      id: 3,
      title: "Cozy Family Home",
      price: "$650,000",
      location: "Suburban Valley",
      beds: 4,
      baths: 2.5,
      sqft: "2,100",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop",
      type: "Sale",
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Home className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
                PropertyHub
              </span>
            </div>
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/properties" className="text-foreground hover:text-primary transition-colors">
                Properties
              </Link>
              <Link to="/agents" className="text-foreground hover:text-primary transition-colors">
                Agents
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link to="/login">
                <Button variant="outline" size="sm" className="hidden sm:inline-flex">Login</Button>
                <Button variant="outline" size="sm" className="sm:hidden px-3">Log</Button>
              </Link>
              <Link to="/register">
                <Button size="sm" className="hidden sm:inline-flex">Get Started</Button>
                <Button size="sm" className="sm:hidden px-3">Start</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary via-accent-foreground to-primary bg-clip-text text-transparent leading-tight">
            Find Your Dream Property
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Discover the perfect home with our comprehensive real estate platform. 
            Search, compare, and connect with top agents in your area.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg p-4 sm:p-6 mb-8 sm:mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="sm:col-span-2">
                <Input
                  placeholder="Enter location or property type..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-10 sm:h-12"
                />
              </div>
              <div>
                <Input placeholder="Min Price" className="h-10 sm:h-12" />
              </div>
              <div>
                <Button className="w-full h-10 sm:h-12" size="lg">
                  <Search className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">Search</span>
                  <span className="sm:hidden">Find</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">2,500+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Active Listings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">150+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Expert Agents</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">98%</div>
              <div className="text-sm sm:text-base text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">$2.5B+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Properties Sold</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Featured Properties</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              Discover our hand-picked selection of premium properties
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProperties.map((property) => (
              <Card key={property.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <Badge className="absolute top-3 sm:top-4 left-3 sm:left-4 text-xs sm:text-sm" variant={property.type === "Sale" ? "default" : "secondary"}>
                    {property.type}
                  </Badge>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 space-x-2">
                    <Button size="sm" variant="secondary" className="h-7 w-7 sm:h-8 sm:w-8 p-0">
                      <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {property.title}
                  </h3>
                  <div className="flex items-center text-muted-foreground mb-3">
                    <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 flex-shrink-0" />
                    <span className="text-sm sm:text-base truncate">{property.location}</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                    {property.price}
                  </div>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                    <div className="text-center">
                      <span className="font-medium">{property.beds}</span>
                      <div>beds</div>
                    </div>
                    <div className="text-center">
                      <span className="font-medium">{property.baths}</span>
                      <div>baths</div>
                    </div>
                    <div className="text-center">
                      <span className="font-medium">{property.sqft}</span>
                      <div>sqft</div>
                    </div>
                  </div>
                  <Button className="w-full group text-sm sm:text-base">
                    View Details
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Link to="/properties">
              <Button size="lg" variant="outline" className="text-sm sm:text-base">
                View All Properties
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Why Choose PropertyHub?</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4">
              We provide comprehensive real estate services to make your property journey seamless
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="text-center p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Search className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Advanced Search</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Find properties with our powerful search and filtering system
              </p>
            </Card>
            
            <Card className="text-center p-6 sm:p-8 hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Expert Agents</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Work with certified professionals who know the local market
              </p>
            </Card>
            
            <Card className="text-center p-6 sm:p-8 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="bg-primary/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Easy Scheduling</h3>
              <p className="text-muted-foreground text-sm sm:text-base">
                Book property tours and consultations with just a few clicks
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 sm:mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join thousands of satisfied customers who found their perfect property with PropertyHub
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link to="/properties">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Browse Properties
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-8 sm:py-12 px-4 sm:px-6 lg:px-8 border-t">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <Home className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                <span className="text-lg sm:text-xl font-bold">PropertyHub</span>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">
                Your trusted partner in finding the perfect property.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
              <div className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <div><Link to="/properties" className="hover:text-primary transition-colors">Properties</Link></div>
                <div><Link to="/agents" className="hover:text-primary transition-colors">Agents</Link></div>
                <div><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></div>
                <div><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
              <div className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <div>Property Search</div>
                <div>Market Analysis</div>
                <div>Property Management</div>
                <div>Investment Consulting</div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact Info</h4>
              <div className="space-y-2 text-muted-foreground text-sm sm:text-base">
                <div>📧 info@propertyhub.com</div>
                <div>📞 (555) 123-4567</div>
                <div>📍 123 Real Estate Ave</div>
                <div>New York, NY 10001</div>
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t text-center text-muted-foreground text-sm sm:text-base">
            <p>&copy; {year} TECH-X4. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
