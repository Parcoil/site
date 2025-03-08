import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="p-4 rounded-2xl shadow-lg w-64">
        <CardContent className="text-center">
          <p className="text-blue-600 font-medium">
            parcoil
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
