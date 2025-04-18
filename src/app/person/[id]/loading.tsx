import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

export default function BillionaireLoading() {
  return (
    <div className="container mx-auto py-8 px-6">
      <Link href="/" className="text-blue-500 hover:underline mb-6 inline-block">
        ← 목록으로 돌아가기
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 좌측 - 이미지와 기본 정보 스켈레톤 */}
        <div className="lg:col-span-1">
          <Card className="overflow-hidden">
            <div className="relative w-full h-[400px] bg-gray-200 animate-pulse"></div>
            <CardContent className="p-6">
              <div className="h-8 w-3/4 bg-gray-200 animate-pulse mb-2"></div>
              <div className="flex flex-col gap-4 mt-6">
                <div className="h-5 w-1/2 bg-gray-200 animate-pulse"></div>
                <div className="h-5 w-2/3 bg-gray-200 animate-pulse"></div>
                <div className="h-5 w-3/4 bg-gray-200 animate-pulse"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 우측 - 상세 정보 스켈레톤 */}
        <div className="lg:col-span-2">
          <Card className="mb-8">
            <CardHeader>
              <div className="h-6 w-1/4 bg-gray-200 animate-pulse"></div>
            </CardHeader>
            <CardContent>
              <div className="h-5 w-full bg-gray-200 animate-pulse mb-4"></div>
              <div className="h-5 w-full bg-gray-200 animate-pulse mb-2"></div>
              <div className="h-5 w-full bg-gray-200 animate-pulse mb-2"></div>
              <div className="h-5 w-full bg-gray-200 animate-pulse mb-2"></div>
              <div className="h-5 w-3/4 bg-gray-200 animate-pulse"></div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="h-6 w-1/4 bg-gray-200 animate-pulse"></div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <div className="h-64 w-full bg-gray-200 animate-pulse"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 