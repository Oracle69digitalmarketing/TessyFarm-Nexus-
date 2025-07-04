import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Fish,
  User,
  ArrowLeft,
  Thermometer,
  Droplets,
  Wind,
  Activity,
  CheckCircle2,
  Calendar,
  Clock,
  Plus,
  Edit,
  Eye,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

export default function PondsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-40">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5 text-gray-500" />
              <span className="text-sm text-gray-500">Back to Dashboard</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <Fish className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-green-800">My Ponds</span>
                <div className="text-xs text-gray-500">Pond Management System</div>
              </div>
            </div>
            <Badge className="bg-blue-100 text-blue-800">6 Active Ponds</Badge>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Add New Pond
            </Button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-green-600" />
              </div>
              <div className="text-sm">
                <div className="font-medium">Adebayo Ogundimu</div>
                <div className="text-xs text-gray-500">Akure, Ondo State</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Ponds</CardTitle>
              <Fish className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-green-600">4 active, 2 maintenance</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Fish</CardTitle>
              <Fish className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,230</div>
              <p className="text-xs text-blue-600">Across all active ponds</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ready to Harvest</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-amber-600">Pond 1 & 2 ready</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Health Status</CardTitle>
              <Activity className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">Excellent</div>
              <p className="text-xs text-gray-600">All parameters optimal</p>
            </CardContent>
          </Card>
        </div>

        {/* Pond Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            {
              id: 1,
              status: "Ready to Harvest",
              statusColor: "green",
              temperature: "28.2°C",
              ph: "7.1",
              oxygen: "8.5mg/L",
              fishCount: 180,
              progress: 95,
              lastFed: "2 hours ago",
              nextFeeding: "In 4 hours",
              alerts: 0,
            },
            {
              id: 2,
              status: "Ready to Harvest",
              statusColor: "green",
              temperature: "28.5°C",
              ph: "7.2",
              oxygen: "8.3mg/L",
              fishCount: 170,
              progress: 92,
              lastFed: "1 hour ago",
              nextFeeding: "In 5 hours",
              alerts: 0,
            },
            {
              id: 3,
              status: "Growing",
              statusColor: "blue",
              temperature: "28.1°C",
              ph: "7.0",
              oxygen: "8.7mg/L",
              fishCount: 200,
              progress: 75,
              lastFed: "3 hours ago",
              nextFeeding: "In 3 hours",
              alerts: 0,
            },
            {
              id: 4,
              status: "Growing",
              statusColor: "blue",
              temperature: "28.3°C",
              ph: "7.3",
              oxygen: "8.4mg/L",
              fishCount: 190,
              progress: 68,
              lastFed: "1 hour ago",
              nextFeeding: "In 5 hours",
              alerts: 1,
            },
            {
              id: 5,
              status: "Maintenance",
              statusColor: "gray",
              temperature: "27.8°C",
              ph: "6.9",
              oxygen: "8.1mg/L",
              fishCount: 0,
              progress: 0,
              lastFed: "N/A",
              nextFeeding: "N/A",
              alerts: 0,
            },
            {
              id: 6,
              status: "Maintenance",
              statusColor: "gray",
              temperature: "27.9°C",
              ph: "7.0",
              oxygen: "8.2mg/L",
              fishCount: 0,
              progress: 0,
              lastFed: "N/A",
              nextFeeding: "N/A",
              alerts: 0,
            },
          ].map((pond) => (
            <Card key={pond.id} className="relative overflow-hidden">
              <div
                className={`absolute top-0 left-0 w-full h-1 ${
                  pond.statusColor === "green"
                    ? "bg-gradient-to-r from-green-500 to-emerald-600"
                    : pond.statusColor === "blue"
                      ? "bg-gradient-to-r from-blue-500 to-blue-600"
                      : "bg-gradient-to-r from-gray-400 to-gray-500"
                }`}
              />

              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Fish className="w-5 h-5 mr-2" />
                    Pond {pond.id}
                  </span>
                  <div className="flex items-center space-x-2">
                    {pond.alerts > 0 && (
                      <Badge variant="destructive" className="text-xs">
                        {pond.alerts} Alert
                      </Badge>
                    )}
                    <Badge
                      variant={
                        pond.statusColor === "green" ? "default" : pond.statusColor === "blue" ? "secondary" : "outline"
                      }
                    >
                      {pond.status}
                    </Badge>
                  </div>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Environmental Parameters */}
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <Thermometer className="w-4 h-4 text-orange-500" />
                    <div>
                      <span className="text-gray-500 block text-xs">Temp</span>
                      <p className="font-medium">{pond.temperature}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-blue-500" />
                    <div>
                      <span className="text-gray-500 block text-xs">pH</span>
                      <p className="font-medium">{pond.ph}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Wind className="w-4 h-4 text-teal-500" />
                    <div>
                      <span className="text-gray-500 block text-xs">O₂</span>
                      <p className="font-medium">{pond.oxygen}</p>
                    </div>
                  </div>
                </div>

                {/* Fish Count and Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="flex items-center">
                      <Fish className="w-4 h-4 mr-1 text-green-500" />
                      Fish Count: {pond.fishCount}
                    </span>
                    <span className="font-medium">{pond.progress}%</span>
                  </div>
                  {pond.progress > 0 && <Progress value={pond.progress} className="h-2" />}
                </div>

                {/* Feeding Schedule */}
                {pond.status !== "Maintenance" && (
                  <div className="space-y-2 text-xs text-gray-600">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        Last fed:
                      </span>
                      <span>{pond.lastFed}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        Next feeding:
                      </span>
                      <span>{pond.nextFeeding}</span>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <Button size="sm" className="flex-1">
                    <Eye className="w-4 h-4 mr-1" />
                    View Details
                  </Button>
                  <Button size="sm" variant="outline">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <BarChart3 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feeding Schedule */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Today's Feeding Schedule
            </CardTitle>
            <CardDescription>Automated feeding schedule based on AI recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { time: "06:00", ponds: [1, 2, 3], status: "completed", amount: "2.5kg" },
                { time: "12:00", ponds: [4, 5], status: "completed", amount: "1.8kg" },
                { time: "18:00", ponds: [1, 2, 3, 4], status: "pending", amount: "3.2kg" },
                { time: "22:00", ponds: [1, 2], status: "scheduled", amount: "1.5kg" },
              ].map((feeding, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="text-lg font-mono font-bold">{feeding.time}</div>
                    <div>
                      <p className="font-medium">
                        Ponds {feeding.ponds.join(", ")} • {feeding.amount}
                      </p>
                      <p className="text-sm text-gray-500">{feeding.ponds.length} ponds scheduled</p>
                    </div>
                  </div>
                  <Badge
                    variant={
                      feeding.status === "completed"
                        ? "default"
                        : feeding.status === "pending"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {feeding.status.charAt(0).toUpperCase() + feeding.status.slice(1)}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Water Quality Trends */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Droplets className="w-5 h-5 mr-2" />
              Water Quality Trends
            </CardTitle>
            <CardDescription>7-day average across all active ponds</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Temperature</span>
                  <span className="text-sm font-medium">28.2°C avg</span>
                </div>
                <Progress value={85} className="h-2" />
                <p className="text-xs text-green-600">Optimal range maintained</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">pH Level</span>
                  <span className="text-sm font-medium">7.1 avg</span>
                </div>
                <Progress value={90} className="h-2" />
                <p className="text-xs text-green-600">Excellent stability</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600">Dissolved Oxygen</span>
                  <span className="text-sm font-medium">8.4mg/L avg</span>
                </div>
                <Progress value={95} className="h-2" />
                <p className="text-xs text-green-600">Above optimal threshold</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
