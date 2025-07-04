import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Fish,
  TrendingUp,
  User,
  CreditCard,
  Brain,
  Package,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Smartphone,
  Shield,
  Zap,
  Users,
  Target,
  Award,
  TrendingDown,
  Leaf,
  Recycle,
  DollarSign,
  Play,
} from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                <Fish className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  TessyFarm Nexus
                </span>
                <div className="text-xs text-gray-500">Unified AI Platform</div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">
                Features
              </a>
              <a href="#platform" className="text-gray-600 hover:text-green-600 transition-colors">
                Platform
              </a>
              <a href="#impact" className="text-gray-600 hover:text-green-600 transition-colors">
                Impact
              </a>
              <a href="#investors" className="text-gray-600 hover:text-green-600 transition-colors">
                Investors
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button asChild>
                <Link href="/dashboard">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">🚀 Now Live in Nigeria</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Africa's First{" "}
                  <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Unified
                  </span>{" "}
                  Agro-Intelligence Platform
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Revolutionizing agriculture through AI-powered credit scoring, blockchain traceability, and circular
                  economy principles. Empowering 50,000+ farmers across Nigeria with smart financing, branded products,
                  and predictive analytics.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                  <Link href="/dashboard">
                    Start Your Farm Journey
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="group bg-transparent">
                  <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">50K+</div>
                  <div className="text-sm text-gray-600">Active Farmers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">₦2.5B</div>
                  <div className="text-sm text-gray-600">Credit Disbursed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">94%</div>
                  <div className="text-sm text-gray-600">AI Accuracy</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium">Farmer Adebayo</div>
                      <div className="text-xs text-gray-500">Akure, Ondo State</div>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Live</Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-blue-600">785</div>
                    <div className="text-xs text-gray-600">Credit Score</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="text-lg font-bold text-green-600">₦3.2M</div>
                    <div className="text-xs text-gray-600">Monthly Revenue</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>AI Yield Prediction</span>
                    <span className="text-green-600">94% Accurate</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full opacity-20 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </section>

      {/* Three Core Modules */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Three Integrated Modules, One Powerful Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unified approach combines financial technology, product branding, and artificial intelligence to
              create a complete ecosystem for modern African agriculture.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* SmartLoop Agrofinance */}
            <Card className="relative overflow-hidden border-2 hover:border-blue-200 transition-all duration-300 group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600" />
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-blue-900">SmartLoop Agrofinance</CardTitle>
                <CardDescription className="text-gray-600">
                  AI-powered credit scoring and automated revenue recycling for sustainable farm growth
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">AI Credit Scoring (94% accuracy)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Automated Revenue Recycling</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Digital Wallet Integration</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Flexible Repayment Terms</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Credit Disbursed</span>
                    <span className="font-semibold">₦2.5B+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Default Rate</span>
                    <span className="font-semibold text-green-600">2.1%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Agrobrand */}
            <Card className="relative overflow-hidden border-2 hover:border-green-200 transition-all duration-300 group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-600" />
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Package className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl text-green-900">Agrobrand</CardTitle>
                <CardDescription className="text-gray-600">
                  Blockchain-verified product traceability and premium branding for market differentiation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Blockchain Traceability</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">QR Code Product Tracking</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Premium Brand Development</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Direct Market Access</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Products Traced</span>
                    <span className="font-semibold">1M+</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Brand Premium</span>
                    <span className="font-semibold text-green-600">+35%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fusion AI */}
            <Card className="relative overflow-hidden border-2 hover:border-purple-200 transition-all duration-300 group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-600" />
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl text-purple-900">Fusion AI</CardTitle>
                <CardDescription className="text-gray-600">
                  Advanced machine learning for yield prediction, disease detection, and farm optimization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Yield Prediction (94% accuracy)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Disease Early Detection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Weather Pattern Analysis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Market Price Forecasting</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Prediction Accuracy</span>
                    <span className="font-semibold">94%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Cost Reduction</span>
                    <span className="font-semibold text-green-600">-42%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platform Architecture */}
      <section id="platform" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Built for African Agriculture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is designed specifically for the unique challenges and opportunities of African farming
              communities, with multilingual support and offline capabilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smartphone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile-First Design</h3>
                    <p className="text-gray-600">
                      Optimized for smartphones with USSD support for feature phones, ensuring accessibility across all
                      device types in rural areas.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Multilingual Support</h3>
                    <p className="text-gray-600">
                      Available in English, Yoruba, Hausa, and Igbo with voice commands and SMS integration for maximum
                      accessibility.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Blockchain Security</h3>
                    <p className="text-gray-600">
                      Immutable transaction records and product traceability powered by blockchain technology for trust
                      and transparency.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-Time Analytics</h3>
                    <p className="text-gray-600">
                      Live monitoring of farm conditions, market prices, and weather patterns with instant alerts and
                      recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold">Platform Statistics</h4>
                  <Badge className="bg-green-100 text-green-800">Live Data</Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">50,247</div>
                    <div className="text-sm text-gray-600">Active Farmers</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">₦2.5B</div>
                    <div className="text-sm text-gray-600">Credit Disbursed</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">1.2M</div>
                    <div className="text-sm text-gray-600">Products Traced</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-600">94%</div>
                    <div className="text-sm text-gray-600">AI Accuracy</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Platform Adoption</span>
                      <span>87%</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Farmer Satisfaction</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section id="impact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Measurable Impact Across Africa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is driving real change in agricultural productivity, financial inclusion, and environmental
              sustainability across Nigerian farming communities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6 border-2 hover:border-green-200 transition-colors">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">50,247</div>
              <div className="text-gray-600 font-medium">Farmers Empowered</div>
              <div className="text-sm text-gray-500 mt-1">Across 12 Nigerian states</div>
            </Card>

            <Card className="text-center p-6 border-2 hover:border-blue-200 transition-colors">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">₦2.5B</div>
              <div className="text-gray-600 font-medium">Credit Disbursed</div>
              <div className="text-sm text-gray-500 mt-1">With 2.1% default rate</div>
            </Card>

            <Card className="text-center p-6 border-2 hover:border-purple-200 transition-colors">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">+67%</div>
              <div className="text-gray-600 font-medium">Yield Increase</div>
              <div className="text-sm text-gray-500 mt-1">Average across all farms</div>
            </Card>

            <Card className="text-center p-6 border-2 hover:border-emerald-200 transition-colors">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-emerald-600" />
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">-45%</div>
              <div className="text-gray-600 font-medium">Carbon Footprint</div>
              <div className="text-sm text-gray-500 mt-1">Through circular economy</div>
            </Card>
          </div>

          {/* Sustainability Impact */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Circular Economy Impact</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our integrated approach creates a sustainable cycle where waste becomes input, reducing costs and
                environmental impact while increasing profitability.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Recycle className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-2xl font-bold text-green-600 mb-2">85%</div>
                <div className="font-medium text-gray-900">Waste Recycled</div>
                <div className="text-sm text-gray-600 mt-1">Fish waste converted to organic fertilizer</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingDown className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-2">-42%</div>
                <div className="font-medium text-gray-900">Feed Costs</div>
                <div className="text-sm text-gray-600 mt-1">Through optimized nutrition and local sourcing</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-2xl font-bold text-purple-600 mb-2">+35%</div>
                <div className="font-medium text-gray-900">Revenue Increase</div>
                <div className="text-sm text-gray-600 mt-1">From premium branded products</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Trusted by Farmers Across Nigeria</h2>
            <p className="text-xl text-gray-600">
              Real stories from farmers who have transformed their operations with TessyFarm Nexus
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "TessyFarm Nexus transformed my fish farming business. The AI predictions helped me increase my yield by
                80%, and the credit system gave me access to funds I never thought possible."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <User className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-medium">Adebayo Ogundimu</div>
                  <div className="text-sm text-gray-500">Fish Farmer, Akure</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The blockchain traceability feature helped me get premium prices for my organic products. Customers
                trust the QR codes and pay 35% more for verified quality."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">Fatima Abdullahi</div>
                  <div className="text-sm text-gray-500">Organic Farmer, Kano</div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The voice assistant in Igbo language made it so easy for me to use the platform. I can check my pond
                conditions and get AI recommendations without reading anything."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <User className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <div className="font-medium">Chukwudi Okafor</div>
                  <div className="text-sm text-gray-500">Aquaculture Farmer, Enugu</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section id="investors" className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Investment Opportunity</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join us in revolutionizing African agriculture. We're seeking strategic partners to scale our impact
              across the continent.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Market Opportunity</h3>
                    <p className="text-blue-100">
                      $35B African agtech market with 70% of population in agriculture. Massive opportunity for digital
                      transformation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Proven Traction</h3>
                    <p className="text-blue-100">
                      50K+ active farmers, ₦2.5B credit disbursed, 94% AI accuracy, and 2.1% default rate demonstrate
                      strong product-market fit.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Competitive Advantage</h3>
                    <p className="text-blue-100">
                      First unified platform combining fintech, AI, and blockchain specifically designed for African
                      agriculture.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  Download Pitch Deck
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-900 bg-transparent"
                >
                  Schedule Meeting
                </Button>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">Investment Highlights</h3>

              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span>Funding Round</span>
                  <span className="font-semibold">Series A</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Target Raise</span>
                  <span className="font-semibold">$15M USD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Valuation</span>
                  <span className="font-semibold">$75M USD</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Use of Funds</span>
                  <span className="font-semibold">Scale & Expansion</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="font-semibold mb-4">5-Year Projections</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Active Farmers</span>
                    <span>500K+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Revenue</span>
                    <span>$50M ARR</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Countries</span>
                    <span>8 African Markets</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Transform Your Farm?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers already using TessyFarm Nexus to increase yields, access credit, and build
            sustainable businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100" asChild>
              <Link href="/dashboard">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <Fish className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">TessyFarm Nexus</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing African agriculture through AI, fintech, and blockchain technology.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <div className="space-y-2 text-gray-400">
                <div>SmartLoop Finance</div>
                <div>Agrobrand</div>
                <div>Fusion AI</div>
                <div>Dashboard</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2 text-gray-400">
                <div>About Us</div>
                <div>Careers</div>
                <div>Press</div>
                <div>Contact</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-gray-400">
                <div>Help Center</div>
                <div>Documentation</div>
                <div>Community</div>
                <div>Status</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400">© 2024 TessyFarm Nexus. All rights reserved.</div>
            <div className="flex space-x-6 text-gray-400 mt-4 md:mt-0">
              <div>Privacy Policy</div>
              <div>Terms of Service</div>
              <div>Cookie Policy</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
