import { Billionaire } from "@/lib/types";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface BillionaireCardProps {
  billionaire: Billionaire;
}

export default function BillionaireCard({ billionaire }: BillionaireCardProps) {
  // 숫자 형식화 (예: 1,000,000,000)
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('ko-KR').format(num);
  };
  
  return (
    <Link href={`/person/${billionaire.id}`}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-lg hover:scale-[1.02] p-0">
        <CardHeader className="p-0">
          <div className="relative w-full h-90">
            {billionaire.squareImage ? (
              <Image
                src={billionaire.squareImage}
                alt={billionaire.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">이미지 없음</span>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-xl mb-2">{billionaire.name}</CardTitle>
          <CardDescription className="text-sm mb-4">
            {billionaire.country}
          </CardDescription>
          <div className="flex flex-col gap-2">
            <div>
              <span className="font-bold">순자산: </span>
              <span className="text-lg">${formatNumber(billionaire.netWorth)}M</span>
            </div>
            <div>
              <span className="font-bold">산업: </span>
              <span>{billionaire.industries.join(', ')}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-gray-50 p-4">
          <span className="text-sm text-gray-500">자세히 보기 →</span>
        </CardFooter>
      </Card>
    </Link>
  );
} 