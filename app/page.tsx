import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Fish, Leaf, Smartphone, TrendingUp, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Fish className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-green-800">TessyFarm Nexus</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#solution" className="text-gray-600 hover:text-green-600">
              Solution
            </Link>
            <Link href="#features" className="text-gray-600 hover:text-green-600">
              Features
            </Link>
            <Link href="#impact" className="text-gray-600 hover:text-green-600">
              Impact
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-green-600">
              Dashboard
            </Link>
          </nav>
          <Link href="/dashboard">
            <Button className="bg-green-600 hover:bg-green-700">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">InnovaCities 2025 Finalist</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Regenerative AgriTech for
            <span className="text-green-600 block">Circular Rural Economies</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Innovating fish farming, fertilizer production, and smart supply chains to transform rural agriculture
            across Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Launch Dashboard
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 bg-red-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Rural farms waste 40% of inputs and face broken value chains
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-700">Low Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Fish farms suffer from poor management and toxic runoff, damaging local ecosystems
                </p>
              </CardContent>
            </Card>
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-700">High Costs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Expensive fertilizer costs and soil degradation severely limit crop yields
                </p>
              </CardContent>
            </Card>
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-700">Limited Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Rural farmers lack access to real-time technology and fair marketplaces</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              An Integrated Circular System for Aquaculture + Crop Synergy
            </h2>
          </div>

          {/* Circular Flow Diagram */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Fish className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Fish Farming</h3>
                <p className="text-sm text-gray-600">Smart IoT monitoring</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-8 h-8 text-amber-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Waste Processing</h3>
                <p className="text-sm text-gray-600">Zero-waste conversion</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Organic Fertilizer</h3>
                <p className="text-sm text-gray-600">Nutrient-rich output</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900">Crop Growth</h3>
                <p className="text-sm text-gray-600">Enhanced yields</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">Smart IoT Aquaculture</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Real-time monitoring of water quality, feeding schedules, and fish health
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">Zero-Waste Production</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Convert fish waste into high-quality organic fertilizer for crops</p>
              </CardContent>
            </Card>
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">Digital Marketplace</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Connect farmers directly with buyers and suppliers through our platform</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* App Features Section */}
      <section id="features" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Smart Farming in Your Palm</h2>
            <p className="text-xl text-gray-600">
              IoT data + AI insights, traceability & inventory, offline sync for rural areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smartphone className="w-5 h-5 mr-2 text-blue-600" />
                    Real-time Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Monitor pond conditions, feeding schedules, and pH levels in real-time
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-green-600" />
                    Input Marketplace
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Access fair-priced inputs and sell your produce directly to buyers</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-5 h-5 mr-2 text-amber-600" />
                    Waste Tracking
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Track waste conversion and optimize your circular farming system</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded mb-3 flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">Dashboard</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="h-32 bg-gradient-to-br from-green-100 to-green-200 rounded mb-3 flex items-center justify-center">
                  <span className="text-green-600 font-semibold">Marketplace</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="h-32 bg-gradient-to-br from-amber-100 to-amber-200 rounded mb-3 flex items-center justify-center">
                  <span className="text-amber-600 font-semibold">Waste Tracking</span>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm border">
                <div className="h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded mb-3 flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">Profile</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Snapshot */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Financial Snapshot</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Current Revenue</CardDescription>
                    <CardTitle className="text-2xl text-green-600">₦15M</CardTitle>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>2025 Forecast</CardDescription>
                    <CardTitle className="text-2xl text-blue-600">₦50M</CardTitle>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>5-Year Goal</CardDescription>
                    <CardTitle className="text-2xl text-purple-600">₦120M</CardTitle>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Income Increase</CardDescription>
                    <CardTitle className="text-2xl text-emerald-600">2.5×</CardTitle>
                  </CardHeader>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Key Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Input Waste Reduction</span>
                    <span className="font-semibold text-green-600">60%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Farmer Income Boost</span>
                    <span className="font-semibold text-blue-600">2.5×</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Waste Reuse Rate</span>
                    <span className="font-semibold text-purple-600">80%</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Projected Revenue Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">2023</span>
                    <div className="flex-1 mx-4">
                      <div className="h-4 bg-gray-200 rounded-full">
                        <div className="h-4 bg-green-500 rounded-full w-[12%]"></div>
                      </div>
                    </div>
                    <span className="text-sm font-semibold">₦15M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">2025</span>
                    <div className="flex-1 mx-4">
                      <div className="h-4 bg-gray-200 rounded-full">
                        <div className="h-4 bg-blue-500 rounded-full w-[42%]"></div>
                      </div>
                    </div>
                    <span className="text-sm font-semibold">₦50M</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">2029</span>
                    <div className="flex-1 mx-4">
                      <div className="h-4 bg-gray-200 rounded-full">
                        <div className="h-4 bg-purple-500 rounded-full w-[100%]"></div>
                      </div>
                    </div>
                    <span className="text-sm font-semibold">₦120M</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 px-4 bg-green-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Regenerative Impact</h2>
            <p className="text-xl text-gray-600">Economic resilience + ecological restoration across rural Africa</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">Soil Health Restored</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Verified through pilot tests showing improved soil quality and nutrient retention
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">80% Waste Reuse</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Aquaculture waste converted into valuable organic fertilizer for crops</p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">Biodiversity Boost</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Cocoa and plantain intercropping increases local ecosystem diversity</p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">Women Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Women-led farming clusters supported with training and resources</p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">Economic Resilience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Diversified income streams reduce farmer vulnerability to market shocks</p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700">Ecological Restoration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Regenerative practices restore degraded farmland and water systems</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Regenerating Africa's Agri-Future</h2>
          <p className="text-xl mb-8 opacity-90">
            Support scaling, partnership, and inclusion in our mission to transform rural agriculture
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/dashboard">
              <Button size="lg" variant="secondary">
                Launch Platform
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-green-600 border-white hover:bg-white bg-transparent">
              Partner With Us
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center text-sm opacity-90">
            <span>📧 contact@tessyfarm.com</span>
            <span>📱 +234 800 TESSY FARM</span>
            <span>💬 WhatsApp Support</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-green-600 rounded flex items-center justify-center">
              <Fish className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold">TessyFarm Nexus</span>
          </div>
          <p className="text-gray-400">© 2025 TessyFarm Nexus. Regenerating Africa's agricultural future.</p>
        </div>
      </footer>
    </div>
  )
}
