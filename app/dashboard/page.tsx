import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Fish,
  Droplets,
  Thermometer,
  Activity,
  TrendingUp,
  AlertTriangle,
  Leaf,
  ShoppingCart,
  Recycle,
  User,
  Bell,
  Settings,
  Home,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <Fish className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-green-800">TessyFarm Nexus</span>
            </Link>
            <Badge variant="secondary">Farmer Dashboard</Badge>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-green-600" />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r min-h-screen">
          <nav className="p-4 space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center space-x-3 px-3 py-2 bg-green-50 text-green-700 rounded-lg"
            >
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/dashboard/ponds"
              className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <Fish className="w-5 h-5" />
              <span>Pond Management</span>
            </Link>
            <Link
              href="/dashboard/marketplace"
              className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Marketplace</span>
            </Link>
            <Link
              href="/dashboard/waste"
              className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <Recycle className="w-5 h-5" />
              <span>Waste Tracking</span>
            </Link>
            <Link
              href="/dashboard/analytics"
              className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              <BarChart3 className="w-5 h-5" />
              <span>Analytics</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, Farmer John!</h1>
            <p className="text-gray-600">Here's what's happening with your farm today.</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Ponds</CardTitle>
                <Fish className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">+2 from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Water Quality</CardTitle>
                <Droplets className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Excellent</div>
                <p className="text-xs text-muted-foreground">pH: 7.2, DO: 8.5mg/L</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₦2.4M</div>
                <p className="text-xs text-muted-foreground">+15% from last month</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Waste Converted</CardTitle>
                <Recycle className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <p className="text-xs text-muted-foreground">2.1 tons this month</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Dashboard Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="ponds">Pond Status</TabsTrigger>
              <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
              <TabsTrigger value="waste">Waste Tracking</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Latest updates from your farm</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Pond 3 feeding completed</p>
                        <p className="text-xs text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Water quality check - All normal</p>
                        <p className="text-xs text-gray-500">4 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">Fertilizer batch ready for harvest</p>
                        <p className="text-xs text-gray-500">6 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">New marketplace order received</p>
                        <p className="text-xs text-gray-500">8 hours ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Alerts */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2 text-amber-500" />
                      Alerts & Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <p className="text-sm font-medium text-amber-800">Feed Schedule Reminder</p>
                      <p className="text-xs text-amber-600">Pond 5 feeding due in 30 minutes</p>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm font-medium text-blue-800">Optimal Harvest Time</p>
                      <p className="text-xs text-blue-600">Pond 2 fish ready for harvest in 3 days</p>
                    </div>
                    <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-sm font-medium text-green-800">Fertilizer Ready</p>
                      <p className="text-xs text-green-600">50kg organic fertilizer ready for use</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Performance Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Production</CardTitle>
                    <CardDescription>Fish harvest and fertilizer production</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Fish Harvest</span>
                          <span>1,200kg / 1,500kg</span>
                        </div>
                        <Progress value={80} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Organic Fertilizer</span>
                          <span>450kg / 500kg</span>
                        </div>
                        <Progress value={90} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Crop Yield</span>
                          <span>2,100kg / 2,500kg</span>
                        </div>
                        <Progress value={84} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Circular Economy Impact</CardTitle>
                    <CardDescription>Waste conversion and resource efficiency</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Waste Reuse Rate</span>
                        <span className="text-lg font-semibold text-green-600">85%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Input Cost Reduction</span>
                        <span className="text-lg font-semibold text-blue-600">40%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Carbon Footprint</span>
                        <span className="text-lg font-semibold text-purple-600">-60%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Water Efficiency</span>
                        <span className="text-lg font-semibold text-teal-600">+35%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="ponds" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((pond) => (
                  <Card key={pond}>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>Pond {pond}</span>
                        <Badge variant={pond <= 4 ? "default" : "secondary"}>
                          {pond <= 4 ? "Active" : "Maintenance"}
                        </Badge>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center space-x-2">
                          <Thermometer className="w-4 h-4 text-red-500" />
                          <span>28°C</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Droplets className="w-4 h-4 text-blue-500" />
                          <span>pH 7.{pond}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Activity className="w-4 h-4 text-green-500" />
                          <span>DO: 8.{pond}mg/L</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Fish className="w-4 h-4 text-blue-600" />
                          <span>{150 + pond * 20} fish</span>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Growth Progress</span>
                          <span>{60 + pond * 5}%</span>
                        </div>
                        <Progress value={60 + pond * 5} className="h-2" />
                      </div>
                      <Button size="sm" className="w-full">
                        View Details
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="marketplace" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Available Products</CardTitle>
                    <CardDescription>Your products ready for sale</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Fresh Catfish</p>
                        <p className="text-sm text-gray-500">500kg available</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">₦1,200/kg</p>
                        <Button size="sm">List for Sale</Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Organic Fertilizer</p>
                        <p className="text-sm text-gray-500">200kg available</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">₦800/kg</p>
                        <Button size="sm">List for Sale</Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Plantain</p>
                        <p className="text-sm text-gray-500">300 bunches</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">₦2,500/bunch</p>
                        <Button size="sm">List for Sale</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>Your marketplace transactions</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div>
                        <p className="font-medium">Order #TF-001</p>
                        <p className="text-sm text-gray-500">100kg Catfish</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">₦120,000</p>
                        <Badge className="bg-green-100 text-green-800">Completed</Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div>
                        <p className="font-medium">Order #TF-002</p>
                        <p className="text-sm text-gray-500">50kg Fertilizer</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-blue-600">₦40,000</p>
                        <Badge className="bg-blue-100 text-blue-800">Processing</Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-amber-50 border border-amber-200 rounded-lg">
                      <div>
                        <p className="font-medium">Order #TF-003</p>
                        <p className="text-sm text-gray-500">20 Plantain bunches</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-amber-600">₦50,000</p>
                        <Badge className="bg-amber-100 text-amber-800">Pending</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="waste" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Waste Conversion Process</CardTitle>
                    <CardDescription>Track your circular farming system</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <Fish className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">Fish Waste Collection</p>
                            <p className="text-sm text-gray-500">Daily collection from ponds</p>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Active</Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                            <Recycle className="w-4 h-4 text-amber-600" />
                          </div>
                          <div>
                            <p className="font-medium">Composting Process</p>
                            <p className="text-sm text-gray-500">14-day decomposition cycle</p>
                          </div>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <Leaf className="w-4 h-4 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">Fertilizer Production</p>
                            <p className="text-sm text-gray-500">Ready for crop application</p>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800">Ready</Badge>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <div className="flex justify-between text-sm mb-2">
                        <span>Monthly Conversion Rate</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Waste Analytics</CardTitle>
                    <CardDescription>Monthly waste conversion metrics</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <p className="text-2xl font-bold text-blue-600">2.1</p>
                        <p className="text-sm text-gray-600">Tons Collected</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <p className="text-2xl font-bold text-green-600">1.8</p>
                        <p className="text-sm text-gray-600">Tons Converted</p>
                      </div>
                      <div className="text-center p-4 bg-amber-50 rounded-lg">
                        <p className="text-2xl font-bold text-amber-600">₦144K</p>
                        <p className="text-sm text-gray-600">Value Generated</p>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <p className="text-2xl font-bold text-purple-600">60%</p>
                        <p className="text-sm text-gray-600">Cost Savings</p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Waste to Fertilizer</span>
                        <span className="font-semibold">85%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Fertilizer Utilization</span>
                        <span className="font-semibold">92%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">System Efficiency</span>
                        <span className="font-semibold">88%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
