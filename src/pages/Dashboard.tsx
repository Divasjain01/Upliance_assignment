
import { useState, useEffect } from "react";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CounterData {
  timestamp: string;
  value: number;
}

interface UserActivity {
  date: string;
  logins: number;
  updates: number;
}

const Dashboard = () => {
  const [counterHistory, setCounterHistory] = useState<CounterData[]>([]);
  const [userActivityData, setUserActivityData] = useState<UserActivity[]>([]);
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    // Load user data
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }

    // Generate sample counter history
    const sampleCounterData = Array.from({ length: 7 }).map((_, i) => ({
      timestamp: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString(),
      value: Math.floor(Math.random() * 50),
    })).reverse();
    setCounterHistory(sampleCounterData);

    // Generate sample user activity data
    const sampleActivityData = Array.from({ length: 7 }).map((_, i) => ({
      date: new Date(Date.now() - i * 24 * 60 * 60 * 1000).toLocaleDateString(),
      logins: Math.floor(Math.random() * 10),
      updates: Math.floor(Math.random() * 5),
    })).reverse();
    setUserActivityData(sampleActivityData);
  }, []);

  const config = {
    counter: {
      theme: {
        light: "#37b24d",
        dark: "#2f9e44"
      }
    },
    activity: {
      theme: {
        light: "#4dabf7",
        dark: "#339af0"
      }
    }
  };

  return (
    <div className="container py-12 animate-enter">
      <div className="space-y-8">
        <div className="space-y-2">
          <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-mint-100 text-mint-600">
            Dashboard
          </span>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Overview</h1>
          <p className="text-gray-500">Monitor your counter and profile activity</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Counter Trend</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={counterHistory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="timestamp"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis style={{ fontSize: '12px' }} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#37b24d"
                    strokeWidth={2}
                    dot={{ fill: '#37b24d' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle>User Activity</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={userActivityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="date"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis style={{ fontSize: '12px' }} />
                  <Tooltip />
                  <Bar dataKey="logins" fill="#37b24d" />
                  <Bar dataKey="updates" fill="#4dabf7" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {userData && (
            <Card className="glass-card md:col-span-2">
              <CardHeader>
                <CardTitle>User Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {Object.entries(userData).map(([key, value]) => (
                    <div key={key} className="p-4 rounded-lg bg-white/50">
                      <div className="text-sm font-medium text-gray-500 capitalize">{key}</div>
                      <div className="mt-1 text-lg font-semibold text-gray-900">{value as string}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
